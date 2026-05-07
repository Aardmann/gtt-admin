'use client'

import { useState, useEffect } from 'react'
import { supabase } from '../../../lib/supabase'
import { Notification } from '../../../types'
import { Header } from '../../../components/layout/Header'
import { NotificationList } from '../../../components/notifications/NotificationList'
import { NotificationStats } from '../../../components/notifications/NotificationStats'
import { SearchBar } from '../../../components/common/SearchBar'
import { Pagination } from '../../../components/common/Pagination'
import { toast } from 'react-hot-toast'
import { 
  FiPlus, 
  FiBell, 
  FiFilter, 
  FiCalendar,
  FiAlertTriangle,
  FiStar,
  FiMapPin,
  FiSearch,
  FiSmartphone,
  FiUsers,
  FiTrendingUp
} from 'react-icons/fi'
import Link from 'next/link'

// Define all notification types
const NOTIFICATION_TYPES = [
  { id: 'banner', label: 'Banner', icon: FiBell, color: 'bg-blue-100 text-blue-600', bgColor: 'bg-blue-50' },
  { id: 'fullscreen', label: 'Full Screen', icon: FiAlertTriangle, color: 'bg-purple-100 text-purple-600', bgColor: 'bg-purple-50' },
  { id: 'urgent', label: 'Urgent', icon: FiAlertTriangle, color: 'bg-red-100 text-red-600', bgColor: 'bg-red-50' },
  { id: 'important', label: 'Important', icon: FiStar, color: 'bg-yellow-100 text-yellow-600', bgColor: 'bg-yellow-50' },
  { id: 'promotional', label: 'Promotional', icon: FiTrendingUp, color: 'bg-green-100 text-green-600', bgColor: 'bg-green-50' },
  { id: 'system', label: 'System', icon: FiSmartphone, color: 'bg-gray-100 text-gray-600', bgColor: 'bg-gray-50' },
  { id: 'location', label: 'Location', icon: FiMapPin, color: 'bg-indigo-100 text-indigo-600', bgColor: 'bg-indigo-50' },
  { id: 'search', label: 'Search', icon: FiSearch, color: 'bg-pink-100 text-pink-600', bgColor: 'bg-pink-50' }
] 

// Notification categories
const NOTIFICATION_CATEGORIES = [
  { id: 'general', label: 'General', color: 'text-blue-600' },
  { id: 'promotion', label: 'Promotion', color: 'text-green-600' },
  { id: 'alert', label: 'Alert', color: 'text-red-600' },
  { id: 'update', label: 'Update', color: 'text-yellow-600' },
  { id: 'location', label: 'Location', color: 'text-indigo-600' },
  { id: 'search', label: 'Search', color: 'text-pink-600' }
]

// Priority levels
const PRIORITY_LEVELS = [
  { id: 'low', label: 'Low', color: 'text-gray-600' },
  { id: 'medium', label: 'Medium', color: 'text-blue-600' },
  { id: 'high', label: 'High', color: 'text-yellow-600' },
  { id: 'critical', label: 'Critical', color: 'text-red-600' }
]

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [filter, setFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [priorityFilter, setPriorityFilter] = useState('all')
  const [dateRange, setDateRange] = useState('all')
  const [statsSummary, setStatsSummary] = useState({
    total: 0,
    byType: {} as Record<string, number>,
    byCategory: {} as Record<string, number>,
    byPriority: {} as Record<string, number>,
    totalSent: 0,
    totalRead: 0,
    readRate: 0
  })
  const itemsPerPage = 10

  useEffect(() => {
    fetchNotifications()
    setupRealtimeSubscription()
  }, [page, search, filter, categoryFilter, priorityFilter, dateRange])

  const fetchNotifications = async () => {
    try {
      setLoading(true)
      
      let query = supabase
        .from('notifications')
        .select('*', { count: 'exact' })

      if (search) {
        query = query.or(`title.ilike.%${search}%,message.ilike.%${search}%`)
      }

      if (filter !== 'all') {
        query = query.eq('type', filter)
      }

      if (categoryFilter !== 'all') {
        query = query.eq('category', categoryFilter)
      }

      if (priorityFilter !== 'all') {
        query = query.eq('priority', priorityFilter)
      }

      if (dateRange !== 'all') {
        const now = new Date()
        let startDate = new Date()
        
        switch (dateRange) {
          case 'today':
            startDate.setHours(0, 0, 0, 0)
            break
          case 'week':
            startDate.setDate(now.getDate() - 7)
            break
          case 'month':
            startDate.setMonth(now.getMonth() - 1)
            break
        }
        
        query = query.gte('created_at', startDate.toISOString())
      }

      const from = (page - 1) * itemsPerPage
      const to = from + itemsPerPage - 1

      const { data, error, count } = await query
        .range(from, to)
        .order('created_at', { ascending: false })

      if (error) throw error

      setNotifications(data || [])
      setTotalPages(Math.ceil((count || 0) / itemsPerPage))
      
      // Calculate stats
      calculateStats(data || [])
    } catch (error) {
      toast.error('Failed to load notifications')
    } finally {
      setLoading(false)
    }
  }

  const calculateStats = (notifications: Notification[]) => {
    const byType: Record<string, number> = {}
    const byCategory: Record<string, number> = {}
    const byPriority: Record<string, number> = {}
    
    let totalSent = 0
    let totalRead = 0
    
    notifications.forEach(notification => {
      // Count by type
      byType[notification.type] = (byType[notification.type] || 0) + 1
      
      // Count by category
      if (notification.category) {
        byCategory[notification.category] = (byCategory[notification.category] || 0) + 1
      }
      
      // Count by priority
      if (notification.priority) {
        byPriority[notification.priority] = (byPriority[notification.priority] || 0) + 1
      }
      
      totalSent += notification.sent_count || 0
      totalRead += notification.read_count || 0
    })
    
    const readRate = totalSent > 0 ? (totalRead / totalSent) * 100 : 0
    
    setStatsSummary({
      total: notifications.length,
      byType,
      byCategory,
      byPriority,
      totalSent,
      totalRead,
      readRate
    })
  }

  const setupRealtimeSubscription = () => {
    const subscription = supabase
      .channel('notifications-realtime')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'notifications' },
        fetchNotifications
      )
      .subscribe()

    return () => subscription.unsubscribe()
  }

  const handleDeleteNotification = async (notificationId: string) => {
    if (!confirm('Are you sure you want to delete this notification?')) return
    
    try {
      // First delete related user notifications
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
      
      // Remove from state immediately
      setNotifications(prev => prev.filter(n => n.id !== notificationId))
      
      toast.success('Notification deleted successfully')
    } catch (error) {
      toast.error('Failed to delete notification')
    }
  }

  const handleResendNotification = async (notificationId: string) => {
    try {
      const { data: notification } = await supabase
        .from('notifications')
        .select('*')
        .eq('id', notificationId)
        .single()

      if (!notification) throw new Error('Notification not found')

      // Create a copy of the notification
      const newNotification = {
        title: `${notification.title} (Resent)`,
        message: notification.message,
        type: notification.type,
        category: notification.category,
        priority: notification.priority,
        target_type: notification.target_type,
        target_criteria: notification.target_criteria,
        image_url: notification.image_url,
        created_by: notification.created_by,
        sent_count: 0,
        read_count: 0,
        vibration_pattern: notification.vibration_pattern,
        action_url: notification.action_url,
        action_text: notification.action_text
      }

      const { error } = await supabase
        .from('notifications')
        .insert([newNotification])

      if (error) throw error

      toast.success('Notification resent successfully')
    } catch (error) {
      toast.error('Failed to resend notification')
    }
  }

  const getTypeStats = () => {
    return NOTIFICATION_TYPES.map(type => ({
      ...type,
      count: statsSummary.byType[type.id] || 0,
      percentage: statsSummary.total > 0 ? ((statsSummary.byType[type.id] || 0) / statsSummary.total) * 100 : 0
    }))
  }

  const getCategoryStats = () => {
    return NOTIFICATION_CATEGORIES.map(category => ({
      ...category,
      count: statsSummary.byCategory[category.id] || 0,
      percentage: statsSummary.total > 0 ? ((statsSummary.byCategory[category.id] || 0) / statsSummary.total) * 100 : 0
    }))
  }

  const getPriorityStats = () => {
    return PRIORITY_LEVELS.map(priority => ({
      ...priority,
      count: statsSummary.byPriority[priority.id] || 0,
      percentage: statsSummary.total > 0 ? ((statsSummary.byPriority[priority.id] || 0) / statsSummary.total) * 100 : 0
    }))
  }

  return (
    <div className="space-y-6">
      <Header 
        title="Notifications Management" 
        subtitle="Create, manage, and track notifications sent to users"
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex-1">
                <SearchBar 
                  value={search}
                  onChange={setSearch}
                  placeholder="Search notifications..."
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                >
                  <option value="all">All Types</option>
                  {NOTIFICATION_TYPES.map(type => (
                    <option key={type.id} value={type.id}>
                      {type.label}
                    </option>
                  ))}
                </select>
                
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                >
                  <option value="all">All Categories</option>
                  {NOTIFICATION_CATEGORIES.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.label}
                    </option>
                  ))}
                </select>
                
                <select
                  value={priorityFilter}
                  onChange={(e) => setPriorityFilter(e.target.value)}
                  className="px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                >
                  <option value="all">All Priorities</option>
                  {PRIORITY_LEVELS.map(priority => (
                    <option key={priority.id} value={priority.id}>
                      {priority.label}
                    </option>
                  ))}
                </select>
                
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                >
                  <option value="all">All Time</option>
                  <option value="today">Today</option>
                  <option value="week">Last 7 Days</option>
                  <option value="month">Last 30 Days</option>
                </select>
              </div>

              <Link
                href="/dashboard/notifications/create"
                className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark whitespace-nowrap"
              >
                <FiPlus />
                <span>Create Notification</span>
              </Link>
            </div>

            <NotificationList 
              notifications={notifications}
              loading={loading}
              onDelete={handleDeleteNotification}
              onResend={handleResendNotification}
              notificationTypes={NOTIFICATION_TYPES}
              categories={NOTIFICATION_CATEGORIES}
              priorities={PRIORITY_LEVELS}
            />

            <Pagination 
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-text mb-4">Notification Performance</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-text-light">Total Sent</p>
                <p className="text-2xl font-bold text-text">{statsSummary.totalSent.toLocaleString()}</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-text-light">Total Read</p>
                <p className="text-2xl font-bold text-success">{statsSummary.totalRead.toLocaleString()}</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-text-light">Read Rate</p>
                <p className="text-2xl font-bold text-primary">{statsSummary.readRate.toFixed(1)}%</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-text-light">Total Notifications</p>
                <p className="text-2xl font-bold text-text">{statsSummary.total}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Notification Types Summary */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-text">Notification Types</h3>
              <span className="text-sm text-text-light">{statsSummary.total} total</span>
            </div>
            <div className="space-y-4">
              {getTypeStats().map(type => (
                <div key={type.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 ${type.bgColor} rounded-lg flex items-center justify-center`}>
                      <type.icon className={type.color} />
                    </div>
                    <div>
                      <span className="font-medium">{type.label}</span>
                      {type.count > 0 && (
                        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
                          <div 
                            className={`h-full ${type.bgColor.replace('50', '400')}`}
                            style={{ width: `${Math.min(type.percentage, 100)}%` }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-medium">{type.count}</span>
                    {type.percentage > 0 && (
                      <div className="text-xs text-text-light">{type.percentage.toFixed(1)}%</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories Summary */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-text mb-4">By Category</h3>
            <div className="space-y-3">
              {getCategoryStats().map(category => (
                category.count > 0 && (
                  <div key={category.id} className="flex items-center justify-between">
                    <span className={category.color}>{category.label}</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{category.count}</span>
                      <span className="text-sm text-text-light">({category.percentage.toFixed(1)}%)</span>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Priority Summary */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-text mb-4">By Priority</h3>
            <div className="space-y-3">
              {getPriorityStats().map(priority => (
                priority.count > 0 && (
                  <div key={priority.id} className="flex items-center justify-between">
                    <span className={priority.color}>{priority.label}</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{priority.count}</span>
                      <span className="text-sm text-text-light">({priority.percentage.toFixed(1)}%)</span>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-text mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                href="/dashboard/notifications/create"
                className="block w-full px-4 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white text-left transition-colors"
              >
                Create New Notification
              </Link>
              <button className="w-full px-4 py-3 border border-border rounded-lg hover:bg-gray-50 text-left">
                Schedule Notification
              </button>
              <button className="w-full px-4 py-3 border border-border rounded-lg hover:bg-gray-50 text-left">
                View Analytics Dashboard
              </button>
              <button 
                onClick={() => {
                  setFilter('all')
                  setCategoryFilter('all')
                  setPriorityFilter('all')
                  setDateRange('all')
                  setSearch('')
                }}
                className="w-full px-4 py-3 border border-border rounded-lg hover:bg-gray-50 text-left"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}