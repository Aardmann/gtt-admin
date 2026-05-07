'use client'

import { Notification, NotificationTypeConfig, CategoryConfig, PriorityConfig } from '../../types'
import { 
  FiBell, 
  FiTrash2, 
  FiSend, 
  FiEye, 
  FiCalendar,
  FiAlertTriangle,
  FiStar,
  FiMapPin,
  FiSearch,
  FiSmartphone,
  FiUsers,
  FiTrendingUp,
  FiImage,
  FiExternalLink,
  FiTarget,
  FiHash
} from 'react-icons/fi'
import { Loader } from '../../components/common/Loader'

interface NotificationListProps {
  notifications: Notification[]
  loading: boolean
  onDelete: (notificationId: string) => void
  onResend: (notificationId: string) => void
  notificationTypes?: readonly NotificationTypeConfig[]
  categories?: readonly CategoryConfig[]
  priorities?: readonly PriorityConfig[]
}

// Default notification types configuration
const DEFAULT_NOTIFICATION_TYPES: NotificationTypeConfig[] = [
  { id: 'banner', label: 'Banner', icon: FiBell, color: 'text-blue-600', bgColor: 'bg-blue-100' },
  { id: 'fullscreen', label: 'Full Screen', icon: FiAlertTriangle, color: 'text-purple-600', bgColor: 'bg-purple-100' },
  { id: 'urgent', label: 'Urgent', icon: FiAlertTriangle, color: 'text-red-600', bgColor: 'bg-red-100' },
  { id: 'important', label: 'Important', icon: FiStar, color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
  { id: 'promotional', label: 'Promotional', icon: FiTrendingUp, color: 'text-green-600', bgColor: 'bg-green-100' },
  { id: 'system', label: 'System', icon: FiSmartphone, color: 'text-gray-600', bgColor: 'bg-gray-100' },
  { id: 'location', label: 'Location', icon: FiMapPin, color: 'text-indigo-600', bgColor: 'bg-indigo-100' },
  { id: 'search', label: 'Search', icon: FiSearch, color: 'text-pink-600', bgColor: 'bg-pink-100' }
]

// Default categories configuration
const DEFAULT_CATEGORIES: CategoryConfig[] = [
  { id: 'general', label: 'General', color: 'text-blue-600' },
  { id: 'promotion', label: 'Promotion', color: 'text-green-600' },
  { id: 'alert', label: 'Alert', color: 'text-red-600' },
  { id: 'update', label: 'Update', color: 'text-yellow-600' },
  { id: 'location', label: 'Location', color: 'text-indigo-600' },
  { id: 'search', label: 'Search', color: 'text-pink-600' }
]

// Default priorities configuration
const DEFAULT_PRIORITIES: PriorityConfig[] = [
  { id: 'low', label: 'Low', color: 'text-gray-600' },
  { id: 'medium', label: 'Medium', color: 'text-blue-600' },
  { id: 'high', label: 'High', color: 'text-yellow-600' },
  { id: 'critical', label: 'Critical', color: 'text-red-600' }
]

export function NotificationList({ 
  notifications, 
  loading, 
  onDelete, 
  onResend,
  notificationTypes = DEFAULT_NOTIFICATION_TYPES,
  categories = DEFAULT_CATEGORIES,
  priorities = DEFAULT_PRIORITIES
}: NotificationListProps) {
  if (loading) {
    return <Loader message="Loading notifications..." />
  }

  if (notifications.length === 0) {
    return (
      <div className="text-center py-12">
        <FiBell className="mx-auto text-4xl text-text-light mb-4" />
        <p className="text-text">No notifications found</p>
        <p className="text-text-light">Create your first notification to get started</p>
      </div>
    )
  }

  const getTypeConfig = (type: string): NotificationTypeConfig => {
    return notificationTypes.find(t => t.id === type) || {
      id: type,
      label: type.charAt(0).toUpperCase() + type.slice(1),
      icon: FiBell,
      color: 'text-gray-600',
      bgColor: 'bg-gray-100'
    }
  }

  const getCategoryConfig = (category?: string): CategoryConfig => {
    if (!category) return { id: 'general', label: 'General', color: 'text-gray-600' }
    return categories.find(c => c.id === category) || {
      id: category,
      label: category.charAt(0).toUpperCase() + category.slice(1),
      color: 'text-gray-600'
    }
  }

  const getPriorityConfig = (priority?: string): PriorityConfig => {
    if (!priority) return { id: 'medium', label: 'Medium', color: 'text-blue-600' }
    return priorities.find(p => p.id === priority) || {
      id: priority,
      label: priority.charAt(0).toUpperCase() + priority.slice(1),
      color: 'text-gray-600'
    }
  }

  const getTargetBadge = (target: string) => {
    switch (target) {
      case 'all': return { bg: 'bg-green-100', text: 'text-green-800', icon: FiUsers }
      case 'location': return { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: FiMapPin }
      case 'search_history': return { bg: 'bg-indigo-100', text: 'text-indigo-800', icon: FiSearch }
      case 'device': return { bg: 'bg-purple-100', text: 'text-purple-800', icon: FiSmartphone }
      case 'user_group': return { bg: 'bg-pink-100', text: 'text-pink-800', icon: FiUsers }
      default: return { bg: 'bg-gray-100', text: 'text-gray-800', icon: FiTarget }
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    
    if (diffHours < 24) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    } else if (diffHours < 48) {
      return 'Yesterday'
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' })
    }
  }

  return (
    <div className="space-y-4">
      {notifications.map((notification) => {
        const typeConfig = getTypeConfig(notification.type)
        const categoryConfig = getCategoryConfig(notification.category)
        const priorityConfig = getPriorityConfig(notification.priority)
        const targetBadge = getTargetBadge(notification.target_type)
        const IconComponent = typeConfig.icon
        
        return (
          <div
            key={notification.id}
            className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow bg-white"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                {/* Header with badges */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${typeConfig.bgColor}`}>
                    <IconComponent className={`w-4 h-4 ${typeConfig.color}`} />
                    <span className={`text-xs font-medium ${typeConfig.color}`}>
                      {typeConfig.label}
                    </span>
                  </div>
                  
                  <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${targetBadge.bg}`}>
                    <targetBadge.icon className={`w-4 h-4 ${targetBadge.text}`} />
                    <span className={`text-xs font-medium ${targetBadge.text}`}>
                      {notification.target_type.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                  
                  {notification.category && (
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100">
                      <FiHash className="w-4 h-4 text-gray-600" />
                      <span className={`text-xs font-medium ${categoryConfig.color}`}>
                        {categoryConfig.label}
                      </span>
                    </div>
                  )}
                  
                  {notification.priority && (
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100">
                      <span className={`text-xs font-medium ${priorityConfig.color}`}>
                        {priorityConfig.label} Priority
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Title and message */}
                <div className="mb-3">
                  <h4 className="font-semibold text-text text-lg mb-1">{notification.title}</h4>
                  <p className="text-text-light text-sm line-clamp-2">{notification.message}</p>
                </div>
                
                {/* Image preview if available */}
                {notification.image_url && (
                  <div className="mb-3">
                    <div className="flex items-center gap-1 text-sm text-text-light mb-1">
                      <FiImage className="w-4 h-4" />
                      <span>Image attached</span>
                    </div>
                    <div className="w-32 h-20 rounded overflow-hidden border border-border">
                      <img 
                        src={notification.image_url} 
                        alt="Notification"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                        }}
                      />
                    </div>
                  </div>
                )}
                
                {/* Action button if available */}
                {notification.action_text && (
                  <div className="mb-3">
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 rounded text-primary text-sm">
                      <FiExternalLink className="w-4 h-4" />
                      <span>{notification.action_text}</span>
                    </div>
                  </div>
                )}
                
                {/* Stats and metadata */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-text-light">
                  <div className="flex items-center gap-1">
                    <FiSend className="w-4 h-4" />
                    <span className="font-medium">{notification.sent_count.toLocaleString()}</span>
                    <span>sent</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <FiEye className="w-4 h-4" />
                    <span className="font-medium">{notification.read_count.toLocaleString()}</span>
                    <span>read</span>
                    {notification.sent_count > 0 && (
                      <span className="text-xs">
                        ({Math.round((notification.read_count / notification.sent_count) * 100)}%)
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <FiCalendar className="w-4 h-4" />
                    <span>{formatDate(notification.created_at)}</span>
                  </div>
                  
                  {/* Vibration pattern indicator */}
                  {notification.vibration_pattern && notification.vibration_pattern !== 'default' && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded">
                      <span className="text-xs font-medium">
                        {notification.vibration_pattern.toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Action buttons */}
              <div className="flex items-center gap-2 ml-4 flex-shrink-0">
                <button
                  onClick={() => onResend(notification.id)}
                  className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                  title="Resend notification"
                >
                  <FiSend className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onDelete(notification.id)}
                  className="p-2 text-error hover:bg-error/10 rounded-lg transition-colors"
                  title="Delete notification"
                >
                  <FiTrash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Target criteria details */}
            {notification.target_criteria && Object.keys(notification.target_criteria).length > 0 && (
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-1 text-sm text-text-light mb-2">
                  <FiTarget className="w-4 h-4" />
                  <span>Target Criteria:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(notification.target_criteria).map(([key, value]) => {
                    if (!value || (Array.isArray(value) && value.length === 0)) return null
                    
                    return (
                      <div key={key} className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                        <span className="font-medium">{key.replace('_', ' ')}:</span>
                        <span>
                          {Array.isArray(value) 
                            ? value.slice(0, 3).join(', ') + (value.length > 3 ? `... (+${value.length - 3})` : '')
                            : String(value)
                          }
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
            
            {/* Scheduled/Expired info */}
            {(notification.scheduled_for || notification.expires_at) && (
              <div className="mt-3 pt-3 border-t border-border">
                <div className="flex flex-wrap gap-4 text-sm text-text-light">
                  {notification.scheduled_for && (
                    <div className="flex items-center gap-1">
                      <FiCalendar className="w-4 h-4" />
                      <span>Scheduled: {new Date(notification.scheduled_for).toLocaleString()}</span>
                    </div>
                  )}
                  {notification.expires_at && (
                    <div className="flex items-center gap-1">
                      <FiCalendar className="w-4 h-4" />
                      <span>Expires: {new Date(notification.expires_at).toLocaleString()}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}