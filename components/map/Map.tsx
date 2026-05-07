// components/map/Map.tsx
'use client'

import { Stop } from '../../types'
import { useState } from 'react'
import { FiMapPin } from 'react-icons/fi'

interface MapProps {
  stops: Stop[]
  selectedStop: Stop | null
}

export default function Map({ stops, selectedStop }: MapProps) {
  const [view, setView] = useState<'map' | 'list'>('map')

  // Simple map visualization - in production, use Leaflet or Google Maps
  return (
    <div className="h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text">Stops Map View</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setView('map')}
            className={`px-3 py-1 rounded-lg ${
              view === 'map' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-text'
            }`}
          >
            Map
          </button>
          <button
            onClick={() => setView('list')}
            className={`px-3 py-1 rounded-lg ${
              view === 'list' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-text'
            }`}
          >
            List
          </button>
        </div>
      </div>
      
      {view === 'map' ? (
        <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
          {/* Simple grid-based map visualization */}
          <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-1 p-4">
            {stops.slice(0, 30).map((stop, index) => (
              <div
                key={stop.id}
                className={`relative flex items-center justify-center rounded-full cursor-pointer transition-transform hover:scale-125 ${
                  selectedStop?.id === stop.id
                    ? 'bg-primary text-white'
                    : 'bg-primary/20 text-primary'
                }`}
                title={`${stop.name} (${stop.latitude}, ${stop.longitude})`}
                style={{
                  gridColumn: (index % 10) + 1,
                  gridRow: Math.floor(index / 10) + 1,
                }}
              >
                <FiMapPin size={selectedStop?.id === stop.id ? 20 : 16} />
              </div>
            ))}
          </div>
          
          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-primary rounded-full mr-2"></div>
                <span className="text-sm">Selected Stop</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-primary/20 rounded-full mr-2"></div>
                <span className="text-sm">Other Stops</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-80 overflow-y-auto">
          <div className="space-y-2">
            {stops.map(stop => (
              <div
                key={stop.id}
                className={`p-3 rounded-lg border ${
                  selectedStop?.id === stop.id
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FiMapPin className={`mr-3 ${
                      selectedStop?.id === stop.id ? 'text-primary' : 'text-text-light'
                    }`} />
                    <div>
                      <p className="font-medium text-text">{stop.name}</p>
                      <p className="text-sm text-text-light">
                        {stop.latitude.toFixed(4)}, {stop.longitude.toFixed(4)}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-text-light">
                    {new Date(stop.created_at).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-4 text-sm text-text-light">
        <p>Showing {stops.length} stops. Click on a stop to view details.</p>
      </div>
    </div>
  )
}