// components/dashboard/RoutesTable.tsx
'use client'

import { Route } from '../../types'
import { FiCheck, FiX, FiTrash2, FiMap, FiEye, FiClock } from 'react-icons/fi'
import { Loader } from '../../components/common/Loader'
import { useState } from 'react'

interface RoutesTableProps {
  routes: Route[]
  loading: boolean
  onApprove: (routeId: string) => void
  onReject: (routeId: string) => void
  onDelete: (routeId: string) => void
  highlightedRoute?: string | null
}

export function RoutesTable({ routes, loading, onApprove, onReject, onDelete, highlightedRoute }: RoutesTableProps) {
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null)

  if (loading) {
    return <Loader message="Loading routes..." />
  }

  if (routes.length === 0) {
    return (
      <div className="text-center py-12">
        <FiMap className="mx-auto text-4xl text-text-light mb-4" />
        <p className="text-text">No routes found</p>
        <p className="text-text-light">No routes match your search criteria</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-border">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider">
              Route Details
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider">
              Stops
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-border">
          {routes.map((route) => (
            <tr 
              key={route.id} 
              className={`hover:bg-gray-50 cursor-pointer ${
                highlightedRoute === route.id 
                  ? 'bg-blue-100 border-l-4 border-l-primary' 
                  : ''
              }`}
              onClick={() => setSelectedRoute(route)}
            >
              <td className="px-6 py-4">
                <div>
                  <div className="font-medium text-text">{route.name}</div>
                  <div className="text-sm text-text-light mt-1 line-clamp-2">
                    {route.description || 'No description'}
                  </div>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-text-light">
                    <div className="flex items-center">
                      <FiClock className="mr-1" />
                      <span>{route.travel_time_minutes || 'N/A'} mins</span>
                    </div>
                    <div className="flex items-center">
                      <FiMap className="mr-1" />
                      <span>{route.total_distance ? `${route.total_distance} km` : 'N/A'}</span>
                    </div>
                    <div>
                      <span>GH₵{route.total_fare || 'N/A'}</span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center text-sm text-text-light">
                  <FiMap className="mr-2" />
                  {route.stops?.length || 0} stops
                </div>
                {route.vehicle_type && (
                  <div className="text-xs text-text-light mt-1">
                    {route.vehicle_type}
                  </div>
                )}
              </td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  route.approved 
                    ? 'bg-success/10 text-success' 
                    : route.rejection_reason 
                      ? 'bg-error/10 text-error'
                      : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {route.approved ? 'Approved' : route.rejection_reason ? 'Rejected' : 'Pending'}
                </span>
                {route.rejection_reason && !route.approved && (
                  <div className="text-xs text-text-light mt-1">
                    Reason: {route.rejection_reason}
                  </div>
                )}
              </td>
              <td className="px-6 py-4 space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    window.location.href = `/dashboard/routes/${route.id}`
                  }}
                  className="inline-flex items-center text-primary text-sm"
                >
                  <FiEye className="mr-1" />
                  View
                </button>
                
                {!route.approved && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        onApprove(route.id)
                      }}
                      className="inline-flex items-center text-success rounded-md text-sm"
                    >
                      <FiCheck className="mr-1" />
                      Approve
                    </button>
                    {!route.rejection_reason && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          const reason = prompt('Enter rejection reason:')
                          if (reason) onReject(route.id)
                        }}
                        className="inline-flex items-center text-error text-sm"
                      >
                        <FiX className="mr-1" />
                        Reject
                      </button>
                    )}
                  </>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    if (confirm('Are you sure you want to delete this route?')) {
                      onDelete(route.id)
                    }
                  }}
                  className="inline-flex items-center text-text text-sm"
                >
                  <FiTrash2 className="mr-1" />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}