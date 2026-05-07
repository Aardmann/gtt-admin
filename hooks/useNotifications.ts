// hooks/useNotifications.ts
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { Notification } from '../types'
import { toast } from 'react-hot-toast'

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchNotifications = async () => {
    try {
      setLoading(true)
      setError(null)
      
      // Fetch notifications with user_notifications count instead of notification_logs
      const { data, error } = await supabase
        .from('notifications')
        .select(`
          *,
          user_notifications(count)
        `)
        .order('created_at', { ascending: false })

      if (error) throw error
      
      // Transform data to include sent_count from user_notifications count
      const transformedData = data?.map(notification => ({
        ...notification,
        sent_count: notification.user_notifications?.[0]?.count || 0
      })) || []
      
      setNotifications(transformedData)
    } catch (err: any) {
      setError(err.message)
      toast.error('Failed to fetch notifications')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNotifications()
    
    // Setup real-time subscription
    const subscription = supabase
      .channel('notifications-channel')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'notifications' },
        fetchNotifications
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const createNotification = async (notification: Omit<Notification, 'id' | 'created_at' | 'sent_count' | 'read_count'>) => {
    try {
      const { error } = await supabase
        .from('notifications')
        .insert([{
          ...notification,
          sent_count: 0,
          read_count: 0
        }])

      if (error) throw error
      
      toast.success('Notification created successfully')
      fetchNotifications()
      return true
    } catch (err: any) {
      toast.error('Failed to create notification')
      return false
    }
  }

  const deleteNotification = async (notificationId: string) => {
    try {
      // First delete related user_notifications
      const { error: deleteUserNotificationsError } = await supabase
        .from('user_notifications')
        .delete()
        .eq('notification_id', notificationId)

      if (deleteUserNotificationsError) throw deleteUserNotificationsError

      // Then delete the notification
      const { error } = await supabase
        .from('notifications')
        .delete()
        .eq('id', notificationId)

      if (error) throw error
      
      toast.success('Notification deleted')
      fetchNotifications()
    } catch (err: any) {
      toast.error('Failed to delete notification')
    }
  }

  const resendNotification = async (notificationId: string) => {
    try {
      // Get notification details
      const { data: notification } = await supabase
        .from('notifications')
        .select('*')
        .eq('id', notificationId)
        .single()

      if (!notification) throw new Error('Notification not found')

      // First, delete existing user notifications
      const { error: deleteError } = await supabase
        .from('user_notifications')
        .delete()
        .eq('notification_id', notificationId)

      if (deleteError) throw deleteError

      // Process and send notification based on target criteria
      await processNotificationTargets(notification)
      
      toast.success('Notification resent successfully')
      fetchNotifications()
    } catch (err: any) {
      toast.error('Failed to resend notification')
    }
  }

  const processNotificationTargets = async (notification: Notification) => {
    try {
      // Get all users
      const { data: usersData, error: usersError } = await supabase
        .from('users')
        .select('id, first_name, last_name, email, created_at')
      
      if (usersError) throw usersError
      
      const { data: profilesData, error: profilesError } = await supabase
        .from('profiles')
        .select('id, role, last_location, device_info, last_seen_at')
      
      if (profilesError) throw profilesError
      
      // Merge user data with profile data
      const profilesMap = new Map(profilesData?.map(p => [p.id, p]) || [])
      const users = usersData?.map(user => ({
        ...user,
        role: profilesMap.get(user.id)?.role || 'user',
        last_location: profilesMap.get(user.id)?.last_location,
        device_info: profilesMap.get(user.id)?.device_info,
        last_seen_at: profilesMap.get(user.id)?.last_seen_at
      })) || []

      let filteredUsers = users

      // Filter users based on target criteria
      if (notification.target_type !== 'all' && notification.target_criteria) {
        const criteria = notification.target_criteria as any
        
        switch (notification.target_type) {
          case 'location':
            filteredUsers = users.filter(user => {
              const region = user.last_location?.region
              return region && criteria.regions?.includes(region)
            })
            break

          case 'search_history':
            // Get users with search history
            const { data: searchHistories } = await supabase
              .from('search_history')
              .select('user_id, destination, start_point')
            
            const userSearches: Record<string, any[]> = {}
            searchHistories?.forEach(search => {
              if (!userSearches[search.user_id]) {
                userSearches[search.user_id] = []
              }
              userSearches[search.user_id].push(search)
            })

            filteredUsers = users.filter(user => {
              const searches = userSearches[user.id] || []
              const regionSearches = searches.filter(search => 
                criteria.regions?.some((region: string) => 
                  search.destination?.toLowerCase().includes(region.toLowerCase()) ||
                  search.start_point?.toLowerCase().includes(region.toLowerCase())
                )
              )

              const uniqueRegionSearches = new Set(
                regionSearches.map((s: any) => s.destination)
              ).size

              return uniqueRegionSearches >= (criteria.min_searches || 1)
            })
            break

          case 'device':
            filteredUsers = users.filter(user => {
              const deviceType = user.device_info?.device_type
              return deviceType && criteria.device_types?.includes(deviceType)
            })
            break

          case 'user_group':
            filteredUsers = users.filter(user => 
              criteria.user_groups?.includes(user.role || 'user')
            )
            break
        }
      }

      // Create user notifications
      const userNotifications = filteredUsers.map(user => ({
        user_id: user.id,
        notification_id: notification.id,
        is_read: false,
        read_at: null,
        created_at: new Date().toISOString()
      }))

      // Insert user notifications
      if (userNotifications.length > 0) {
        const { error: insertError } = await supabase
          .from('user_notifications')
          .insert(userNotifications)

        if (insertError) throw insertError

        // Update sent count
        const { error: updateError } = await supabase
          .from('notifications')
          .update({ sent_count: userNotifications.length })
          .eq('id', notification.id)

        if (updateError) throw updateError

        toast.success(`Notification sent to ${userNotifications.length} users`)
      } else {
        toast('No users match the target criteria', {
          icon: 'ℹ️'
        })
      }

    } catch (err: any) {
      console.error('Error processing notification targets:', err)
      toast.error('Failed to process notification targets')
    }
  }

  return {
    notifications,
    loading,
    error,
    refresh: fetchNotifications,
    createNotification,
    deleteNotification,
    resendNotification
  }
}