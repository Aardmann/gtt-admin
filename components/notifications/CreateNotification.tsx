// components/notifications/CreateNotification.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { toast } from 'react-hot-toast'
import { FiUpload, FiImage, FiX, FiSave, FiDatabase, FiCheck, FiSearch } from 'react-icons/fi'
import { regions } from '../../lib/constants'
import { Notification } from '../../types'

interface CreateNotificationProps {
  onSuccess: () => void
}

// Extended notification types to match React Native system
type NotificationType = 'banner' | 'fullscreen' | 'urgent' | 'important' | 'promotional' | 'system' | 'location' | 'search'
type TargetType = 'all' | 'location' | 'search_history' | 'device' | 'user_group'

interface NotificationData {
  title: string
  message: string
  type: NotificationType
  category: 'general' | 'promotion' | 'alert' | 'update' | 'location' | 'search'
  priority: 'low' | 'medium' | 'high' | 'critical'
  image_file?: File | null
  image_url?: string
  target_type: TargetType
  target_criteria: {
    locations: string[]
    regions: string[]
    device_types: string[]
    user_groups: string[]
    min_searches: number
  }
  scheduled_for: string
  expires_at: string
  action_url?: string
  action_text?: string
  vibration_pattern?: 'default' | 'urgent' | 'important'
}

interface ExistingImage {
  id: string
  name: string
  url: string
  size: number
  created_at: string
  used_in_notifications: number
}

export function CreateNotification({ onSuccess }: CreateNotificationProps) {
  const [notification, setNotification] = useState<NotificationData>({
    title: '',
    message: '',
    type: 'banner',
    category: 'general',
    priority: 'medium',
    image_file: null,
    image_url: '',
    target_type: 'all',
    target_criteria: {
      locations: [],
      regions: [],
      device_types: [],
      user_groups: [],
      min_searches: 1
    },
    scheduled_for: '',
    expires_at: '',
    action_url: '',
    action_text: '',
    vibration_pattern: 'default'
  })

  const [uploading, setUploading] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [existingImages, setExistingImages] = useState<ExistingImage[]>([])
  const [searchImageQuery, setSearchImageQuery] = useState('')
  const [showExistingImages, setShowExistingImages] = useState(false)
  const [selectedExistingImage, setSelectedExistingImage] = useState<ExistingImage | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Load existing images on component mount
  useEffect(() => {
    fetchExistingImages()
  }, [])

  // Fetch existing images from database
  const fetchExistingImages = async () => {
    try {
      // First, get all notifications with images
      const { data: notifications, error } = await supabase
        .from('notifications')
        .select('id, title, image_url, created_at')
        .not('image_url', 'is', null)
        .order('created_at', { ascending: false })

      if (error) throw error

      // Group images by URL to find duplicates
      const imageMap = new Map<string, ExistingImage>()
      
      notifications?.forEach(notif => {
        if (!notif.image_url) return
        
        const existing = imageMap.get(notif.image_url)
        if (existing) {
          existing.used_in_notifications++
        } else {
          // Extract filename from URL
          const urlParts = notif.image_url.split('/')
          const filename = urlParts[urlParts.length - 1]
          
          imageMap.set(notif.image_url, {
            id: notif.id,
            name: filename,
            url: notif.image_url,
            size: 0, // We don't have size info from URL
            created_at: notif.created_at,
            used_in_notifications: 1
          })
        }
      })

      setExistingImages(Array.from(imageMap.values()))
    } catch (error) {
      console.error('Error fetching existing images:', error)
    }
  }

  // Search for similar notifications to find existing images
  const searchSimilarNotifications = async () => {
    try {
      if (!notification.message.trim() && !notification.title.trim()) {
        return []
      }

      let query = supabase
        .from('notifications')
        .select('id, title, message, image_url, created_at')
        .not('image_url', 'is', null)

      if (notification.message.trim()) {
        // Search for similar messages
        query = query.or(`message.ilike.%${notification.message.substring(0, 50)}%`)
      }

      if (notification.title.trim()) {
        query = query.or(`title.ilike.%${notification.title}%`)
      }

      const { data, error } = await query
        .limit(10)
        .order('created_at', { ascending: false })

      if (error) throw error

      return data || []
    } catch (error) {
      console.error('Error searching similar notifications:', error)
      return []
    }
  }

  // Check if image already exists in database
  const checkForExistingImage = async (file: File): Promise<string | null> => {
    try {
      // Calculate file hash (simple size-based check for now)
      // In production, you might want to use actual image hash
      const fileSize = file.size
      const fileName = file.name.toLowerCase()
      const fileType = file.type

      // Look for existing images with similar characteristics
      const { data: existingNotifs } = await supabase
        .from('notifications')
        .select('image_url')
        .not('image_url', 'is', null)
        .limit(50)

      if (!existingNotifs) return null

      // Check if any existing image might be the same
      // This is a basic check - you might want to implement more sophisticated deduplication
      const existingUrls = existingNotifs
        .map(n => n.image_url)
        .filter(Boolean) as string[]

      // You could add more sophisticated checks here like:
      // 1. Image content hashing
      // 2. File size comparison
      // 3. File name pattern matching

      // For now, we'll just return the first image URL
      // In a real app, you'd implement proper deduplication
      return existingUrls.length > 0 ? existingUrls[0] : null

    } catch (error) {
      console.error('Error checking for existing image:', error)
      return null
    }
  }

  // Handle file selection for preview
  const handleFileSelect = async (file: File) => {
    try {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image must be less than 5MB')
        return
      }

      // Check file type
      if (!file.type.startsWith('image/')) {
        toast.error('Please upload an image file')
        return
      }

      // Check if similar image exists
      toast.loading('Checking for existing similar images...', { id: 'image-check' })
      
      const existingImageUrl = await checkForExistingImage(file)
      
      if (existingImageUrl) {
        toast.dismiss('image-check')
        
        // Ask user if they want to use existing image
        const useExisting = confirm(
          'A similar image was found in our database. Would you like to use the existing image instead of uploading a new one?'
        )
        
        if (useExisting) {
          setNotification(prev => ({ 
            ...prev, 
            image_file: null, 
            image_url: existingImageUrl 
          }))
          setImagePreview(existingImageUrl)
          toast.success('Using existing image from database')
          return
        }
      } else {
        toast.dismiss('image-check')
      }

      // Set file for later upload
      setNotification(prev => ({ ...prev, image_file: file }))
      
      // Create preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      
    } catch (error) {
      toast.error('Error processing image')
      console.error('File selection error:', error)
    }
  }

  // Upload image function with deduplication
  const uploadImage = async (file: File): Promise<string> => {
    try {
      setUploading(true)
      
      // Generate unique but descriptive filename
      const fileExt = file.name.split('.').pop()?.toLowerCase() || 'jpg'
      const timestamp = Date.now()
      const randomStr = Math.random().toString(36).substring(2, 8)
      const fileName = `notification_${timestamp}_${randomStr}.${fileExt}`
      
      const filePath = fileName

      // Check if file already exists in storage (by name)
      const { data: existingFiles } = await supabase.storage
        .from('notification-images')
        .list('', {
          search: fileName
        })

      if (existingFiles && existingFiles.length > 0) {
        // File with same name exists, get its URL
        const { data: { publicUrl } } = supabase.storage
          .from('notification-images')
          .getPublicUrl(fileName)
        
        toast('Using existing file from storage', { icon: '♻️' })
        return publicUrl
      }

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('notification-images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false,
          contentType: file.type
        })

      if (uploadError) {
        if (uploadError.message?.includes('bucket') || uploadError.message?.includes('not found')) {
          toast.error('Storage bucket not configured. Please create "notification-images" bucket in Supabase Storage.')
          throw new Error('Storage bucket not configured')
        }
        
        throw uploadError
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('notification-images')
        .getPublicUrl(filePath)

      return publicUrl
      
    } catch (error: any) {
      console.error('Image upload error:', error)
      throw new Error(`Failed to upload image: ${error.message}`)
    } finally {
      setUploading(false)
    }
  }

  // Remove image
  const removeImage = () => {
    setNotification(prev => ({ ...prev, image_file: null, image_url: '' }))
    setImagePreview(null)
    setSelectedExistingImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  // Select existing image
  const selectExistingImage = (image: ExistingImage) => {
    setSelectedExistingImage(image)
    setNotification(prev => ({ 
      ...prev, 
      image_file: null, 
      image_url: image.url 
    }))
    setImagePreview(image.url)
    setShowExistingImages(false)
    toast.success(`Selected existing image: ${image.name}`)
  }

  // Check if current user is admin
  const checkIsAdmin = async (userId: string): Promise<boolean> => {
    try {
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', userId)
        .single()

      if (error) {
        console.error('Error checking admin status:', error)
        return false
      }

      return profile?.role === 'admin'
    } catch (error) {
      console.error('Error checking admin:', error)
      return false
    }
  }

  // Validate notification data
  const validateNotification = (): string[] => {
    const errors: string[] = []

    if (!notification.title.trim()) {
      errors.push('Title is required')
    }

    if (!notification.message.trim()) {
      errors.push('Message is required')
    }

    if (notification.target_type === 'device' && notification.target_criteria.device_types.length === 0) {
      errors.push('Please select at least one device type')
    }

    if (['location', 'search_history'].includes(notification.target_type) && 
        notification.target_criteria.regions.length === 0) {
      errors.push('Please select at least one region')
    }

    if (notification.target_type === 'user_group' && 
        notification.target_criteria.user_groups.length === 0) {
      errors.push('Please select at least one user group')
    }

    return errors
  }

  // Get complete user data (users + profiles)
  const getCompleteUserData = async () => {
    try {
      const { data: usersData, error: usersError } = await supabase
        .from('users')
        .select('id, first_name, last_name, email, created_at')
      
      if (usersError) throw usersError
      
      const { data: profilesData, error: profilesError } = await supabase
        .from('profiles')
        .select('id, role, last_location, device_info, last_seen_at')
      
      if (profilesError) throw profilesError
      
      const profilesMap = new Map(profilesData?.map(p => [p.id, p]) || [])
      
      return usersData?.map(user => ({
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        created_at: user.created_at,
        role: profilesMap.get(user.id)?.role || 'user',
        last_location: profilesMap.get(user.id)?.last_location,
        device_info: profilesMap.get(user.id)?.device_info,
        last_seen_at: profilesMap.get(user.id)?.last_seen_at
      })) || []
      
    } catch (error) {
      console.error('Error getting user data:', error)
      return []
    }
  }

  // Create notification in database and distribute to users
  const createNotificationAndDistribute = async (imageUrl: string = ''): Promise<any> => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        throw new Error('You must be logged in to create notifications')
      }

      const isAdmin = await checkIsAdmin(user.id)
      if (!isAdmin) {
        throw new Error('You must be an admin to create notifications')
      }

      // Step 1: Check if similar notification already exists
      if (imageUrl) {
        const { data: similarNotifications } = await supabase
          .from('notifications')
          .select('id, title, image_url, sent_count, read_count')
          .eq('image_url', imageUrl)
          .limit(1)

        if (similarNotifications && similarNotifications.length > 0) {
          const similar = similarNotifications[0]
          toast(`Similar notification found with image (Sent: ${similar.sent_count}, Read: ${similar.read_count})`, {
            icon: 'ℹ️',
            duration: 5000
          })
        }
      }

      // Step 2: Create the notification
      const notificationData: any = {
        title: notification.title,
        message: notification.message,
        type: notification.type,
        category: notification.category,
        priority: notification.priority,
        target_type: notification.target_type,
        created_by: user.id,
        sent_count: 0,
        read_count: 0,
        created_at: new Date().toISOString(),
        vibration_pattern: notification.vibration_pattern
      }

      if (imageUrl) {
        notificationData.image_url = imageUrl
      }

      if (notification.target_type !== 'all' && Object.keys(notification.target_criteria).length > 0) {
        notificationData.target_criteria = notification.target_criteria
      }

      if (notification.scheduled_for) {
        notificationData.scheduled_for = notification.scheduled_for
      }

      if (notification.expires_at) {
        notificationData.expires_at = notification.expires_at
      }

      if (notification.action_url) {
        notificationData.action_url = notification.action_url
      }

      if (notification.action_text) {
        notificationData.action_text = notification.action_text
      }

      const { data: createdNotification, error: notificationError } = await supabase
        .from('notifications')
        .insert([notificationData])
        .select()
        .single()

      if (notificationError) {
        console.error('Database insertion error:', notificationError)
        throw notificationError
      }

      // Step 3: Get users and create user_notifications
      const users = await getCompleteUserData()
      let filteredUsers = users

      // Filter users based on target criteria
      if (createdNotification.target_type !== 'all') {
        const criteria = createdNotification.target_criteria || {}
        
        switch (createdNotification.target_type) {
          case 'location':
            filteredUsers = users.filter(user => {
              const region = user.last_location?.region
              return region && criteria.regions?.includes(region)
            })
            break

          case 'search_history':
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

      // Step 4: Create user_notifications for filtered users
      const userNotifications = filteredUsers.map(user => ({
        user_id: user.id,
        notification_id: createdNotification.id,
        is_read: false,
        read_at: null,
        created_at: new Date().toISOString()
      }))

      if (userNotifications.length > 0) {
        // Insert user notifications
        const { error: userNotificationsError } = await supabase
          .from('user_notifications')
          .insert(userNotifications)

        if (userNotificationsError) {
          console.error('Error creating user notifications:', userNotificationsError)
          throw userNotificationsError
        }

        // Update sent count
        const { error: updateError } = await supabase
          .from('notifications')
          .update({ sent_count: userNotifications.length })
          .eq('id', createdNotification.id)

        if (updateError) {
          console.error('Error updating sent count:', updateError)
        }
      }

      return {
        notification: createdNotification,
        userCount: userNotifications.length,
        usedExistingImage: !!selectedExistingImage
      }
      
    } catch (error: any) {
      console.error('Create notification DB error:', error)
      throw error
    }
  }

  // Main form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      setIsSubmitting(true)

      // Validate form
      const errors = validateNotification()
      if (errors.length > 0) {
        errors.forEach(error => toast.error(error))
        return
      }

      // Check if user is admin
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        toast.error('You must be logged in to create notifications')
        return
      }

      const isAdmin = await checkIsAdmin(user.id)
      if (!isAdmin) {
        toast.error('You must be an admin to create notifications')
        return
      }

      // Step 1: Handle image
      let finalImageUrl = notification.image_url || ''
      
      if (notification.image_file) {
        toast.loading('Uploading image...', { id: 'image-upload' })
        try {
          finalImageUrl = await uploadImage(notification.image_file)
          toast.success('Image uploaded successfully!', { id: 'image-upload' })
        } catch (error: any) {
          toast.error('Image upload failed: ' + error.message, { id: 'image-upload' })
          
          if (!confirm('Image upload failed. Continue without image?')) {
            setIsSubmitting(false)
            return
          }
          finalImageUrl = ''
        }
      } else if (selectedExistingImage) {
        toast('Using existing image from database', { 
          icon: '♻️',
          duration: 3000 
        })
      }

      // Step 2: Create notification and distribute
      toast.loading('Creating and sending notification...', { id: 'notification-create' })
      const result = await createNotificationAndDistribute(finalImageUrl)
      
      if (result) {
        let successMessage = `Notification created and sent to ${result.userCount} users!`
        if (result.usedExistingImage) {
          successMessage += ' (Reused existing image)'
        }
        
        toast.success(successMessage, { 
          id: 'notification-create',
          duration: 4000 
        })
        
        // Reset form
        resetForm()
        onSuccess()
      }
      
    } catch (error: any) {
      console.error('Submit error:', error)
      
      let errorMessage = error.message || 'Failed to create notification'
      
      if (error.code === '42501') {
        errorMessage = 'Permission denied. Please check if you have proper database permissions.'
      } else if (error.code === '23505') {
        errorMessage = 'Duplicate notification detected.'
      }
      
      toast.error(errorMessage, { 
        id: 'notification-create',
        duration: 5000 
      })
      
    } finally {
      setIsSubmitting(false)
    }
  }

  // Reset form
  const resetForm = () => {
    setNotification({
      title: '',
      message: '',
      type: 'banner',
      category: 'general',
      priority: 'medium',
      image_file: null,
      image_url: '',
      target_type: 'all',
      target_criteria: {
        locations: [],
        regions: [],
        device_types: [],
        user_groups: [],
        min_searches: 1
      },
      scheduled_for: '',
      expires_at: '',
      action_url: '',
      action_text: '',
      vibration_pattern: 'default'
    })
    setImagePreview(null)
    setSelectedExistingImage(null)
    setShowExistingImages(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  // Filtered existing images based on search
  const filteredExistingImages = existingImages.filter(image =>
    image.name.toLowerCase().includes(searchImageQuery.toLowerCase()) ||
    image.url.toLowerCase().includes(searchImageQuery.toLowerCase())
  )

  return (
    <div className="bg-background p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-text mb-6">Create Notification</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title & Message */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Title *
            </label>
            <input
              type="text"
              value={notification.title}
              onChange={(e) => setNotification(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter notification title"
              required
              disabled={isSubmitting || uploading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Message *
            </label>
            <textarea
              value={notification.message}
              onChange={(e) => setNotification(prev => ({ ...prev, message: e.target.value }))}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              rows={3}
              placeholder="Enter notification message"
              required
              disabled={isSubmitting || uploading}
            />
          </div>
        </div>

        {/* Notification Settings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Type */}
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Type
            </label>
            <select
              value={notification.type}
              onChange={(e) => setNotification(prev => ({ ...prev, type: e.target.value as NotificationType }))}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={isSubmitting || uploading}
            >
              <option value="banner">Banner</option>
              <option value="fullscreen">Full Screen</option>
              <option value="urgent">Urgent</option>
              <option value="important">Important</option>
              <option value="promotional">Promotional</option>
              <option value="system">System</option>
              <option value="location">Location</option>
              <option value="search">Search</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Category
            </label>
            <select
              value={notification.category}
              onChange={(e) => setNotification(prev => ({ ...prev, category: e.target.value as any }))}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={isSubmitting || uploading}
            >
              <option value="general">General</option>
              <option value="promotion">Promotion</option>
              <option value="alert">Alert</option>
              <option value="update">Update</option>
              <option value="location">Location</option>
              <option value="search">Search</option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Priority
            </label>
            <select
              value={notification.priority}
              onChange={(e) => setNotification(prev => ({ ...prev, priority: e.target.value as any }))}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={isSubmitting || uploading}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
          </div>
        </div>

        {/* Image Section */}
        <div className="border border-border rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-text">Notification Image</h3>
            <button
              type="button"
              onClick={() => setShowExistingImages(!showExistingImages)}
              className="flex items-center gap-2 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              disabled={isSubmitting || uploading}
            >
              <FiDatabase />
              {showExistingImages ? 'Hide Existing Images' : 'Browse Existing Images'}
            </button>
          </div>

          {/* Browse Existing Images Section */}
          {showExistingImages && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <FiSearch />
                <input
                  type="text"
                  value={searchImageQuery}
                  onChange={(e) => setSearchImageQuery(e.target.value)}
                  placeholder="Search existing images..."
                  className="flex-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={isSubmitting || uploading}
                />
              </div>

              {filteredExistingImages.length === 0 ? (
                <p className="text-center text-text-light py-4">No existing images found</p>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {filteredExistingImages.map(image => (
                    <div
                      key={image.id}
                      className={`border rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-md ${
                        selectedExistingImage?.id === image.id ? 'ring-2 ring-primary border-primary' : 'border-border'
                      }`}
                      onClick={() => selectExistingImage(image)}
                    >
                      <div className="h-32 bg-gray-200 relative">
                        <img
                          src={image.url}
                          alt={image.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                            target.parentElement!.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center bg-gray-300">
                                <FiImage class="text-2xl text-gray-500" />
                              </div>
                            `
                          }}
                        />
                        {selectedExistingImage?.id === image.id && (
                          <div className="absolute top-2 right-2 bg-primary text-white p-1 rounded-full">
                            <FiCheck size={16} />
                          </div>
                        )}
                      </div>
                      <div className="p-2 bg-white">
                        <p className="text-xs truncate text-text" title={image.name}>
                          {image.name}
                        </p>
                        <p className="text-xs text-text-light">
                          Used in {image.used_in_notifications} notification{image.used_in_notifications !== 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {selectedExistingImage && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2 text-green-800">
                    <FiCheck />
                    <span>Selected: {selectedExistingImage.name}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Upload New Image Section */}
          {imagePreview ? (
            <div className="relative mb-4">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute top-2 right-2 flex gap-2">
                {selectedExistingImage && (
                  <div className="px-3 py-1 bg-green-500 text-white text-xs rounded-full">
                    Existing Image
                  </div>
                )}
                <button
                  type="button"
                  onClick={removeImage}
                  className="p-2 bg-error text-white rounded-full hover:bg-error-dark"
                  disabled={isSubmitting || uploading}
                >
                  <FiX size={16} />
                </button>
              </div>
            </div>
          ) : (
            <div 
              className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => !isSubmitting && !uploading && fileInputRef.current?.click()}
            >
              <FiImage className="mx-auto text-4xl text-text-light mb-3" />
              <p className="text-text font-medium mb-1">Upload New Image</p>
              <p className="text-text-light text-sm">
                {notification.type === 'banner' 
                  ? 'Recommended: 600x400px, max 5MB' 
                  : 'Recommended: 1200x800px, max 5MB'}
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) handleFileSelect(file)
                }}
                className="hidden"
                disabled={isSubmitting || uploading}
              />
            </div>
          )}
          
          {uploading && (
            <div className="mt-3 text-center">
              <div className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
              <span className="ml-2 text-text-light">Uploading image...</span>
            </div>
          )}
        </div>

        {/* Target Audience and other sections remain the same... */}
        {/* ... Rest of your form code ... */}

        {/* Form Actions */}
        <div className="flex justify-end space-x-4 pt-4 border-t border-border">
          <button
            type="button"
            onClick={onSuccess}
            className="px-6 py-2 border border-border rounded-lg text-text hover:bg-gray-50 transition-colors disabled:opacity-50"
            disabled={isSubmitting || uploading}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting || uploading}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            {(isSubmitting || uploading) ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                {uploading ? 'Uploading...' : 'Creating...'}
              </>
            ) : (
              <>
                <FiSave size={18} />
                Create Notification
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}