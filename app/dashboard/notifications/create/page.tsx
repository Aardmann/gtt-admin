'use client'

import { useState } from 'react'
import { Header } from '../../../../components/layout/Header'
import { CreateNotification } from '../../../../components/notifications/CreateNotification'
import { toast } from 'react-hot-toast'
import { FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function CreateNotificationPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSuccess = () => {
    toast.success('Notification created successfully!')
    router.push('/dashboard/notifications')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text">Create Notification</h1>
          <p className="text-text-light">Send notifications to users based on various criteria</p>
        </div>
        
        <Link
          href="/dashboard/notifications"
          className="flex items-center space-x-2 px-4 py-2 border border-border rounded-lg hover:bg-gray-50"
        >
          <FiArrowLeft />
          <span>Back to Notifications</span>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-text">Notification Details</h2>
          <p className="text-text-light">Fill in the details below to create a new notification</p>
        </div>
        
        <div className="p-6">
          <CreateNotification onSuccess={handleSuccess} />
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-text mb-2">📋 Targeting Tips</h3>
        <ul className="space-y-2 text-text-light">
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span><strong>Location-based:</strong> Target users currently in specific regions</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span><strong>Search history:</strong> Target users who have searched for routes in specific regions (min. 2 searches)</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span><strong>Device type:</strong> Target users by their device (iOS, Android, etc.)</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span><strong>IMEI:</strong> Target specific devices by their IMEI number</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span><strong>All users:</strong> Send to everyone in the system</span>
          </li>
        </ul>
      </div>
    </div>
  )
}