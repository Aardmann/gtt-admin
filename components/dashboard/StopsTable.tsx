'use client'

import { Stop } from '../../types'
import { FiTrash2, FiEdit, FiMapPin, FiNavigation, FiEye } from 'react-icons/fi'
import { Loader } from '../../components/common/Loader'

interface StopsTableProps {
  stops: Stop[]
  loading: boolean
  onDelete: (stopId: string) => void
  onSelect: (stop: Stop) => void
}

export function StopsTable({ stops, loading, onDelete, onSelect }: StopsTableProps) {
  if (loading) {
    return <Loader message="Loading stops..." />
  }

  if (stops.length === 0) {
    return (
      <div className="text-center py-12">
        <FiNavigation className="mx-auto text-4xl text-text-light mb-4" />
        <p className="text-text">No stops found</p>
        <p className="text-text-light">Add your first bus stop to get started</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-border">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider">
              Stop Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider">
              Location
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider">
              Coordinates
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider">
              Created
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-border">
          {stops.map((stop) => (
            <tr 
              key={stop.id} 
              className="hover:bg-gray-50 cursor-pointer"
              onClick={() => onSelect(stop)}
            >
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FiMapPin className="text-primary" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-text">
                      {stop.name}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-text-light">
                  {getRegionFromCoordinates(stop.latitude, stop.longitude)}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-text-light">
                  {stop.latitude.toFixed(6)}, {stop.longitude.toFixed(6)}
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-text-light">
                {new Date(stop.created_at).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 text-sm font-medium space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onSelect(stop)
                  }}
                  className="text-primary hover:text-primary-dark"
                >
                  <FiEye className="inline mr-1" />
                  View
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onDelete(stop.id)
                  }}
                  className="text-error hover:text-error-dark"
                >
                  <FiTrash2 className="inline mr-1" />
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

function getRegionFromCoordinates(lat: number, lng: number): string {
  // Simplified region detection - in production, use reverse geocoding
  if (lat > 5.5 && lat < 5.7 && lng > -0.3 && lng < 0.1) return 'Accra'
  if (lat > 6.6 && lat < 6.8 && lng > -1.7 && lng < -1.5) return 'Kumasi'
  if (lat > 9.3 && lat < 9.5 && lng > -0.9 && lng < -0.7) return 'Tamale'
  return 'Unknown Region'
}