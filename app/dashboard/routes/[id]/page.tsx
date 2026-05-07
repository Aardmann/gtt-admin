'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { supabase } from '../../../../lib/supabase'
import { Route } from '../../../../types'
import { Header } from '../../../../components/layout/Header'
import { Loader } from '../../../../components/common/Loader'
import { toast } from 'react-hot-toast'
import { FiArrowLeft, FiMap, FiNavigation, FiClock, FiUsers, FiExternalLink } from 'react-icons/fi'
import Link from 'next/link'

export default function RouteDetailsPage() {
  const params = useParams()
  const routeId = params.id as string
  const [route, setRoute] = useState<Route | null>(null)
  const [creator, setCreator] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRoute()
  }, [routeId])

  const fetchRoute = async () => {
    try {
      setLoading(true)
      
      // Fetch route with creator info
      const { data: routeData, error: routeError } = await supabase
        .from('routes')
        .select('*')
        .eq('id', routeId)
        .single()

      if (routeError) throw routeError
      
      // Fetch creator information
      if (routeData.created_by) {
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('id, first_name, last_name, email')
          .eq('id', routeData.created_by)
          .single()
        
        if (!userError && userData) {
          setCreator(userData)
        }
        
        // Try to get role from profiles table
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', routeData.created_by)
          .single()
        
        if (!profileError && profileData) {
          setCreator((prev: any) => prev ? { ...prev, role: profileData.role } : { role: profileData.role })
        }
      }
      
      setRoute(routeData)
    } catch (error) {
      toast.error('Failed to load route details')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <Loader message="Loading route details..." />
  }

  if (!route) {
    return (
      <div className="text-center py-12">
        <FiMap className="mx-auto text-4xl text-text-light mb-4" />
        <p className="text-text">Route not found</p>
        <Link href="/dashboard/routes" className="text-primary hover:underline">
          Back to routes
        </Link>
      </div>
    )
  }

  return (
      <div className="space-y-6">
        <Header
            title={route.name}
            subtitle={`Route Details - ${route.approved ? 'Approved' : 'Pending Approval'}`}
        />
      <div className="flex items-center justify-between">
        <Link
          href="/dashboard/routes"
          className="flex items-center space-x-2 text-primary hover:text-primary-dark"
        >
          <FiArrowLeft />
          <span>Back to Routes</span>
        </Link>
        <button
          onClick={() => window.open('https://aardmann.github.io/ghana-trotro-transit-admin-web/', '_blank')}
          className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
        >
            <FiMap className="inline" />
            <span>View on Map</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-text mb-4">Route Information</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-text-light">Description</label>
              <p className="text-text">{route.description || 'No description'}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-text-light">Travel Time</label>
                <p className="text-text flex items-center">
                  <FiClock className="mr-2" />
                  {route.travel_time_minutes || 'N/A'} minutes
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-text-light">Distance</label>
                <p className="text-text flex items-center">
                  <FiMap className="mr-2" />
                  {route.total_distance ? `${route.total_distance} km` : 'N/A'}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-text-light">Fare</label>
                <p className="text-text flex items-center">
                  GH₵{route.total_fare || 'N/A'}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-text-light">Vehicle Type</label>
                <p className="text-text">{route.vehicle_type || 'N/A'}</p>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-text-light">Status</label>
              <span className={`px-2 py-1 text-xs rounded-full ml-2 ${
                route.approved
                  ? 'bg-success/10 text-success'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {route.approved ? 'Approved' : 'Pending'}
              </span>
            </div>
            {creator && (
              <div>
                <label className="text-sm font-medium text-text-light">Created By</label>
                <p className="text-text flex items-center">
                  <FiUsers className="mr-2" />
                  {creator.first_name && creator.last_name 
                    ? `${creator.first_name} ${creator.last_name}` 
                    : creator.email || 'Unknown User'}
                  {creator.role && (
                    <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                      creator.role === 'admin' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {creator.role}
                    </span>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-text mb-4">Stops</h3>
          {route.stops && route.stops.length > 0 ? (
            <div className="space-y-2">
              {route.stops.map((stop, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text">{stop.stop?.name || 'Unknown Stop'}</p>
                    <p className="text-xs text-text-light">
                      {stop.stop?.latitude?.toFixed(4) || 'N/A'}, {stop.stop?.longitude?.toFixed(4) || 'N/A'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-text-light">No stops defined for this route</p>
          )}
        </div>
      </div>
    </div>
  )
}