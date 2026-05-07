// types/index.ts
export interface User {
  id: string
  first_name: string
  last_name: string
  email: string
  created_at: string
  updated_at: string
  profile?: Profile
  search_history?: SearchHistory[]
  location_history?: LocationHistory[]
}

export interface Profile {
  id: string
  role: 'user' | 'admin' | 'banned'
  created_at: string
  updated_at: string
  last_location: {
    latitude: number
    longitude: number
    accuracy?: number
    region?: string
  } | null
  device_info: {
    imei?: string
    device_type?: string
    os?: string
    model?: string
    brand?: string
  } | null
  last_seen_at: string
}

export interface Route {
  id: string
  name: string
  total_distance: number
  total_fare: number
  created_at: string
  updated_at: string
  created_by: string
  description: string
  travel_time_minutes: number
  peak_hours: string
  frequency: string
  vehicle_type: string
  notes: string
  amenities: string[]
  operating_hours: {
    start: string
    end: string
    days: string[]
  }
  approved: boolean
  rejection_reason?: string
  stops: RouteStop[]
  tracking?: RouteTracking[]
}

export interface RouteStop {
  id: string
  route_id: string
  stop_id: string
  stop_order: number
  fare_to_next: number
  distance_to_next: number
  created_at: string
  stop?: Stop
}

export interface Stop {
  id: string
  name: string
  latitude: number
  longitude: number
  created_at: string
  updated_at: string
  created_by: string
}

export interface SearchHistory {
  id: string
  user_id: string
  start_point: string
  destination: string
  searched_at: string
}

export interface LocationHistory {
  id: string
  user_id: string
  latitude: number
  longitude: number
  accuracy: number
  route_id?: string
  created_at: string
  route?: Route
}

export interface RouteTracking {
  id: string
  user_id: string
  route_id: string
  current_stop_index: number
  progress_percentage: number
  estimated_time_remaining: number
  last_updated: string
  created_at: string
  user?: User
  route?: Route
}

export interface UserCreatedRoute {
  id: string
  user_id: string
  route_name: string
  start_point: string
  stops: string[]
  destination: string
  created_at: string
  main_route_id?: string
  total_fare: number
  stop_fares: number[]
  destination_fare: number
  user?: User
  main_route?: Route
}

export interface RouteCreationPayment {
  id: string
  user_id: string
  route_id?: string
  amount: number
  payment_status: 'pending' | 'completed' | 'failed' | 'refunded'
  payment_provider_data: any
  created_at: string
  updated_at: string
  user?: User
  route?: UserCreatedRoute
}

export interface Notification {
  id: string
  title: string
  message: string
  type: 'banner' | 'fullscreen' | 'urgent' | 'important' | 'promotional' | 'system' | 'location' | 'search'
  category?: 'general' | 'promotion' | 'alert' | 'update' | 'location' | 'search'
  priority?: 'low' | 'medium' | 'high' | 'critical'
  target_type: 'all' | 'location' | 'device' | 'search_history' | 'user_group'
  target_criteria: {
    locations?: string[]
    device_types?: string[]
    user_groups?: string[]
    min_searches?: number
    regions?: string[]
  }
  scheduled_for?: string
  expires_at?: string
  created_at: string
  sent_count: number
  read_count: number
  created_by: string
  image_url?: string
  vibration_pattern?: 'default' | 'urgent' | 'important'
  action_url?: string
  action_text?: string
  logs?: NotificationLog[]
}

export interface NotificationTypeConfig {
  id: string
  label: string
  icon: any
  color: string
  bgColor: string
}

export interface CategoryConfig {
  id: string
  label: string
  color: string
}

export interface PriorityConfig {
  id: string
  label: string
  color: string
}

export interface NotificationLog {
  id: string
  notification_id: string
  user_id: string
  device_info: any
  location: any
  sent_at: string
  read_at?: string
  user?: User
}

export interface Alert {
  id: string
  title: string
  message: string
  type: 'new_route' | 'user' | 'system' | 'payment' | 'report'
  severity: 'info' | 'warning' | 'error'
  read: boolean
  created_at: string
  updated_at: string
  route_id?: string
  created_by_name?: string
  data?: Record<string, any>
  report_id?: string
  report_status?: 'pending' | 'reviewed' | 'resolved'
  report_reason?: string
  route_name?: string
}


export interface DashboardStats {
  totalUsers: number
  totalRoutes: number
  totalStops: number
  activeUsers: number
  pendingRoutes: number
  rejectedRoutes: number
  todaySearches: number
  notificationsSent: number
  revenueToday: number
}