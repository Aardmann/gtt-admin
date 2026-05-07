// components/dashboard/RecentActivity.tsx
'use client'

import { Route } from '../../types'
import { FiMap, FiClock, FiTruck, FiChevronRight } from 'react-icons/fi'
import Link from 'next/link'

interface RecentActivityProps {
  routes: Route[]
}

function getRouteStatus(route: Route): { label: string; className: string } {
  if (route.rejection_reason) {
    return { label: 'Rejected', className: 'bg-red-100 text-red-700' }
  }
  if (route.approved) {
    return { label: 'Approved', className: 'bg-emerald-100 text-emerald-700' }
  }
  return { label: 'Pending', className: 'bg-amber-100 text-amber-700' }
}

export function RecentActivity({ routes }: RecentActivityProps) {
  if (routes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center gap-2">
        <div className="p-3 bg-gray-50 rounded-full">
          <FiMap className="text-gray-300 text-2xl" />
        </div>
        <p className="text-sm font-medium text-gray-500">No pending routes</p>
        <p className="text-xs text-gray-400">All routes have been processed</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {routes.map(route => {
        const status = getRouteStatus(route)
        return (
          <div
            key={route.id}
            className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            {/* Icon */}
            <div className="p-2 bg-white rounded-lg shadow-sm shrink-0">
              <FiMap className="text-violet-500 text-sm" />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-sm font-semibold text-gray-800 truncate">{route.name}</p>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${status.className}`}>
                  {status.label}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-0.5 text-xs text-gray-400">
                {route.travel_time_minutes && (
                  <span className="flex items-center gap-1">
                    <FiClock size={10} /> {route.travel_time_minutes} min
                  </span>
                )}
                {route.vehicle_type && (
                  <span className="flex items-center gap-1">
                    <FiTruck size={10} /> {route.vehicle_type}
                  </span>
                )}
              </div>
              {route.rejection_reason && (
                <p className="text-xs text-red-500 mt-0.5 truncate">
                  Reason: {route.rejection_reason}
                </p>
              )}
            </div>

            {/* Link */}
            <Link href="/dashboard/routes" className="shrink-0 text-gray-300 hover:text-violet-500 transition-colors">
              <FiChevronRight size={16} />
            </Link>
          </div>
        )
      })}
    </div>
  )
}