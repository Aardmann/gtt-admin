// hooks/useUsers.ts - Fixed version
import { useEffect, useState, useCallback } from 'react'
import { supabase } from '../lib/supabase'
import { User } from '../types'
import { toast } from 'react-hot-toast'

export function useUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      
      console.log('Fetching users from database...')
      
      // First try to fetch with joins
      const { data, error: fetchError } = await supabase
        .from('users')
        .select(`
          *,
          profile:profiles(*),
          search_history:search_history(*),
          location_history:location_history(*)
        `)
        .order('created_at', { ascending: false })

      if (fetchError) {
        console.warn('Join fetch failed, trying simple fetch:', fetchError.message)
        
        // Try simple fetch without joins
        const { data: simpleData, error: simpleError } = await supabase
          .from('users')
          .select('*')
          .order('created_at', { ascending: false })
        
        if (simpleError) {
          // Check if table exists
          if (simpleError.code === 'PGRST116') {
            setError('Users table not found. Please run database setup.')
            toast.error('Database tables not set up. Please run setup.')
            setUsers([])
            return
          }
          throw simpleError
        }
        
        // Try to fetch profiles separately
        const { data: profilesData } = await supabase
          .from('profiles')
          .select('*')
        
        const profilesMap = profilesData?.reduce((acc: Record<string, any>, profile: any) => {
          acc[profile.id] = profile
          return acc
        }, {}) || {}

        // Map to User type
        const usersWithDefaults = (simpleData || []).map((user: any) => ({
          ...user,
          profile: profilesMap[user.id] || undefined,
          search_history: [],
          location_history: []
        }))
        
        setUsers(usersWithDefaults)
        return
      }
      
      console.log('Successfully fetched users:', data?.length || 0)
      setUsers(data || [])
      
    } catch (err: any) {
      console.error('Failed to fetch users:', err)
      setError(err.message)
      
      // Don't show toast for table not found errors
      if (!err.message?.includes('relation') && 
          !err.message?.includes('does not exist') &&
          !err.message?.includes('permission denied')) {
        toast.error('Failed to load users')
      }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchUsers()
    
    // Setup real-time subscription
    const subscription = supabase
      .channel('users-channel')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'users' },
        () => {
          console.log('Users table changed, refreshing...')
          fetchUsers()
        }
      )
      .subscribe((status) => {
        console.log('Subscription status:', status)
      })

    return () => {
      subscription.unsubscribe()
    }
  }, [fetchUsers])

  const banUser = async (userId: string) => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ role: 'banned' })
        .eq('id', userId)

      if (error) {
        // Try to create a profile if it doesn't exist
        const { error: createError } = await supabase
          .from('profiles')
          .insert({ id: userId, role: 'banned' })
        
        if (createError) throw createError
      }
      
      toast.success('User banned successfully')
      fetchUsers()
    } catch (err: any) {
      console.error('Ban error:', err)
      toast.error('Failed to ban user: ' + err.message)
    }
  }

  const deleteUser = async (userId: string) => {
    if (!confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      return
    }

    try {
      // Delete user data from all related tables
      const tables = ['search_history', 'location_history', 'profiles', 'users']
      
      for (const table of tables) {
        try {
          await supabase
            .from(table)
            .delete()
            .eq('user_id', userId)
            //.catch(() => {}) // Ignore errors if table doesn't exist
        } catch (err) {
          console.warn(`Error deleting from ${table}:`, err)
        }
      }
      
      // Try to delete from users table
      try {
        await supabase
          .from('users')
          .delete()
          .eq('id', userId)
      } catch (err) {
        console.warn('Error deleting from users table:', err)
      }
      
      toast.success('User data removed successfully')
      fetchUsers()
    } catch (err: any) {
      console.error('Delete error:', err)
      toast.error('Failed to delete user: ' + err.message)
    }
  }

  return {
    users,
    loading,
    error,
    refresh: fetchUsers,
    banUser,
    deleteUser
  }
}