// app/dashboard/users/page.tsx - Fixed version
'use client'

import { useState, useEffect } from 'react'
import { Header } from '../../../components/layout/Header'
import { UsersTable } from '../../../components/dashboard/UsersTable'
import { SearchBar } from '../../../components/common/SearchBar'
import { Pagination } from '../../../components/common/Pagination'
import { FiDownload, FiUserPlus, FiRefreshCw, FiUsers, FiActivity, FiShield, FiAlertCircle } from 'react-icons/fi'
import { supabase } from '../../../lib/supabase'
import { toast } from 'react-hot-toast'
import { User } from '../../../types'

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState('all')
  const itemsPerPage = 10

  // Fetch users directly from the database
  const fetchUsers = async () => {
    try {
      setLoading(true)
      setError(null)
      
      console.log('Fetching all users from database...')
      
      // Fetch all users from users table
      const { data: usersData, error: usersError } = await supabase
        .from('users')
        .select('*')
        .order('created_at', { ascending: false })

      if (usersError) {
        console.error('Error fetching users:', usersError)
        
        // Check if table exists
        if (usersError.code === 'PGRST116') {
          setError('Users table does not exist. Please run database setup.')
          toast.error('Database tables not set up. Please run setup.')
          return
        }
        
        throw usersError
      }

      console.log(`Found ${usersData?.length || 0} users in database`)

      if (!usersData || usersData.length === 0) {
        console.log('No users found in database')
        setUsers([])
        return
      }

      // Get user IDs to fetch their profiles
      const userIds = usersData.map(user => user.id)
      
      // Fetch profiles for these users
      const { data: profilesData, error: profilesError } = await supabase
        .from('profiles')
        .select('*')
        .in('id', userIds)

      if (profilesError) {
        console.warn('Could not fetch profiles:', profilesError)
      }

      // Create a map of profiles by user ID
      const profilesMap = new Map()
      profilesData?.forEach(profile => {
        profilesMap.set(profile.id, profile)
      })

      // Combine users with their profiles
      const combinedUsers = usersData.map(user => ({
        ...user,
        profile: profilesMap.get(user.id) || null,
        search_history: [],
        location_history: []
      }))

      console.log('Combined users:', combinedUsers.length)
      setUsers(combinedUsers)
      
    } catch (err: any) {
      console.error('Failed to fetch users:', err)
      setError(err.message || 'Unknown error occurred')
      toast.error('Failed to load users')
    } finally {
      setLoading(false)
    }
  }

  // Ban user function
  const banUser = async (userId: string) => {
    if (!confirm('Are you sure you want to ban this user?')) {
      return
    }

    try {
      // Update profile to banned
      const { error } = await supabase
        .from('profiles')
        .update({ role: 'banned', updated_at: new Date().toISOString() })
        .eq('id', userId)

      if (error) {
        // If profile doesn't exist, create one
        const { error: createError } = await supabase
          .from('profiles')
          .insert({
            id: userId,
            role: 'banned',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          })

        if (createError) throw createError
      }

      toast.success('User banned successfully')
      fetchUsers() // Refresh the list
    } catch (err: any) {
      console.error('Error banning user:', err)
      toast.error('Failed to ban user: ' + err.message)
    }
  }

  // Delete user function - FIXED: Removed .catch() and replaced with try-catch
  const deleteUser = async (userId: string) => {
    if (!confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      return
    }

    try {
      // First delete from users table
      const { error: userError } = await supabase
        .from('users')
        .delete()
        .eq('id', userId)

      if (userError) throw userError

      // Try to delete from profiles table (if exists)
      // Use try-catch instead of .catch()
      try {
        await supabase
          .from('profiles')
          .delete()
          .eq('id', userId)
      } catch (profileError) {
        console.log('Profiles table may not exist or error deleting profile:', profileError)
        // Continue anyway since we already deleted the user
      }

      toast.success('User deleted successfully')
      fetchUsers() // Refresh the list
    } catch (err: any) {
      console.error('Error deleting user:', err)
      toast.error('Failed to delete user: ' + err.message)
    }
  }

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers()
  }, [])

  // Filter and search users - FIXED: Removed 'unverified' option
  const filteredUsers = users.filter(user => {
    // Search filter
    if (search) {
      const searchLower = search.toLowerCase()
      const firstName = (user.first_name || '').toLowerCase()
      const lastName = (user.last_name || '').toLowerCase()
      const email = (user.email || '').toLowerCase()
      
      const matchesSearch = 
        firstName.includes(searchLower) ||
        lastName.includes(searchLower) ||
        email.includes(searchLower)
      
      if (!matchesSearch) return false
    }

    // Role filter - FIXED: Only check for existing roles
    if (filter === 'banned' && user.profile?.role !== 'banned') return false
    if (filter === 'active' && user.profile?.role !== 'user') return false
    if (filter === 'admin' && user.profile?.role !== 'admin') return false
    // Removed 'unverified' filter since it's not a valid role in our schema

    return true
  })

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / itemsPerPage))
  const paginatedUsers = filteredUsers.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  )

  const handleExportUsers = async () => {
    try {
      if (filteredUsers.length === 0) {
        alert('No users to export')
        return
      }

      const csvContent = [
        ['ID', 'First Name', 'Last Name', 'Email', 'Role', 'Created At', 'Last Seen', 'Status'],
        ...filteredUsers.map(user => [
          user.id,
          user.first_name || 'N/A',
          user.last_name || 'N/A',
          user.email || 'N/A',
          user.profile?.role || 'user',
          new Date(user.created_at).toLocaleDateString(),
          user.profile?.last_seen_at 
            ? new Date(user.profile.last_seen_at).toLocaleDateString()
            : 'Never',
          user.profile?.role === 'banned' ? 'Banned' : 'Active'
        ])
      ].map(row => row.join(',')).join('\n')

      const blob = new Blob([csvContent], { type: 'text/csv' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `users-${new Date().toISOString().split('T')[0]}.csv`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
      
      toast.success(`${filteredUsers.length} users exported successfully!`)
    } catch (error) {
      console.error('Failed to export users:', error)
      toast.error('Failed to export users')
    }
  }

  const userStats = {
    total: users.length,
    active: users.filter(u => u.profile?.role === 'user').length,
    banned: users.filter(u => u.profile?.role === 'banned').length,
    admin: users.filter(u => u.profile?.role === 'admin').length,
    todayActive: users.filter(u => {
      const lastSeen = new Date(u.profile?.last_seen_at || u.updated_at)
      const today = new Date()
      return lastSeen.toDateString() === today.toDateString()
    }).length
  }

  return (
    <div className="space-y-6">
      <Header 
        title="User Management" 
        subtitle="Manage all user accounts from the database"
      />

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-light text-sm">Total Users</p>
              <p className="text-3xl font-bold text-text mt-2">{userStats.total}</p>
            </div>
            <FiUsers className="text-4xl text-blue-100" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-light text-sm">Active Today</p>
              <p className="text-3xl font-bold text-green-600 mt-2">{userStats.todayActive}</p>
            </div>
            <FiActivity className="text-4xl text-green-100" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-light text-sm">Banned Users</p>
              <p className="text-3xl font-bold text-red-600 mt-2">{userStats.banned}</p>
            </div>
            <FiAlertCircle className="text-4xl text-red-100" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-light text-sm">Admins</p>
              <p className="text-3xl font-bold text-purple-600 mt-2">{userStats.admin}</p>
            </div>
            <FiShield className="text-4xl text-purple-100" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <SearchBar 
              value={search}
              onChange={setSearch}
              placeholder="Search users by name or email..."
            />
            
            <select
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value)
                setPage(1)
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="all">All Users</option>
              <option value="active">Active Users</option>
              <option value="admin">Admins</option>
              <option value="banned">Banned Users</option>
            </select>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={fetchUsers}
              disabled={loading}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
            >
              <FiRefreshCw className={loading ? 'animate-spin' : ''} />
              <span>Refresh</span>
            </button>
            <button
              onClick={handleExportUsers}
              disabled={filteredUsers.length === 0}
              className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark disabled:opacity-50"
            >
              <FiDownload />
              <span>Export ({filteredUsers.length})</span>
            </button>
          </div>
        </div>

        {error && !loading && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <FiAlertCircle className="text-red-500 mr-3" />
              <div>
                <p className="font-medium text-red-800">Error loading users</p>
                <p className="text-red-700 text-sm mt-1">{error}</p>
                <button
                  onClick={fetchUsers}
                  className="mt-2 px-3 py-1 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200"
                >
                  Retry
                </button>
              </div>
            </div>
          </div>
        )}

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <p className="mt-4 text-text">Loading users from database...</p>
          </div>
        ) : (
          <>
            <UsersTable 
              users={paginatedUsers}
              loading={false}
              onBan={banUser}
              onDelete={deleteUser}
            />

            {filteredUsers.length > 0 && (
              <div className="mt-6">
                <Pagination 
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={setPage}
                />
                <div className="mt-4 text-sm text-text-light text-center">
                  Showing {paginatedUsers.length} of {filteredUsers.length} users
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Recent User Activity */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-text mb-4">Recent User Activity</h3>
        {users.length === 0 ? (
          <p className="text-text-light text-center py-4">No users found in database</p>
        ) : (
          <div className="space-y-3">
            {users
              .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
              .slice(0, 5)
              .map(user => (
                <div key={user.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                  <div>
                    <p className="font-medium text-text">
                      {user.first_name} {user.last_name}
                    </p>
                    <p className="text-sm text-text-light">{user.email}</p>
                    <p className="text-xs text-text-light mt-1">
                      Joined: {new Date(user.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-text-light">
                      Role: <span className="font-medium">{user.profile?.role || 'user'}</span>
                    </p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      user.profile?.role === 'banned' 
                        ? 'bg-red-100 text-red-800' 
                        : user.profile?.role === 'admin'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {user.profile?.role || 'user'}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  )
}