'use client'

interface NotificationStatsProps {
  stats: {
    total: number
    banner: number
    fullscreen: number
    totalSent: number
    totalRead: number
    readRate: number
  }
}

export function NotificationStats({ stats }: NotificationStatsProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-text mb-4">Notification Overview</h3>
      <div className="space-y-4">
        <div>
          <p className="text-text-light">Total Notifications</p>
          <p className="text-2xl font-bold text-text">{stats.total}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-text-light">Banner</p>
            <p className="text-xl font-bold text-blue-600">{stats.banner}</p>
          </div>
          <div>
            <p className="text-text-light">Full Screen</p>
            <p className="text-xl font-bold text-purple-600">{stats.fullscreen}</p>
          </div>
        </div>
        <div>
          <p className="text-text-light">Delivery Rate</p>
          <div className="flex items-center">
            <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
              <div 
                className="bg-success h-2 rounded-full" 
                style={{ width: `${stats.readRate}%` }}
              />
            </div>
            <span className="text-success font-medium">{stats.readRate.toFixed(1)}%</span>
          </div>
        </div>
        <div className="pt-4 border-t border-border">
          <p className="text-sm text-text-light">Performance Tips</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li className="text-text">• Send during peak hours (7-9 AM, 4-6 PM)</li>
            <li className="text-text">• Use location targeting for better engagement</li>
            <li className="text-text">• Keep banner notifications concise</li>
          </ul>
        </div>
      </div>
    </div>
  )
}