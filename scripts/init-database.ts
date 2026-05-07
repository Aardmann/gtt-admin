// scripts/init-database.ts
import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'
import { resolve } from 'path'

// Load environment variables from .env.local
config({ path: resolve(process.cwd(), '.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('Environment variables loaded:')
console.log('URL exists:', !!supabaseUrl)
console.log('Key exists:', !!supabaseKey)

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase environment variables')
  console.error('Please create .env.local file with:')
  console.error('NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co')
  console.error('NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function initializeDatabase() {
  console.log('🚀 Initializing Ghana Trotro Transit Database...')
  console.log(`📡 Connecting to: ${supabaseUrl}`)

  try {
    // First, let's test the connection
    const { data: testData, error: testError } = await supabase
      .from('profiles')
      .select('count')
      .limit(1)

    if (testError && testError.code !== 'PGRST116') {
      // PGRST116 means table doesn't exist, which is OK
      console.error('❌ Connection test failed:', testError.message)
      return
    }

    console.log('✅ Connected to Supabase successfully!')

    // Run the SQL in Supabase SQL Editor instead
    console.log('\n📋 Please run the following SQL in Supabase SQL Editor:')
    console.log('============================================')
    
    const sql = `
-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  password_hash VARCHAR NOT NULL,
  role VARCHAR DEFAULT 'admin',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin', 'banned')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  last_location JSONB,
  device_info JSONB,
  last_seen_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create routes table
CREATE TABLE IF NOT EXISTS routes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR NOT NULL,
  total_distance NUMERIC,
  total_fare NUMERIC,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  created_by UUID REFERENCES auth.users(id),
  description TEXT,
  travel_time_minutes INTEGER,
  peak_hours TEXT,
  frequency TEXT,
  vehicle_type TEXT,
  notes TEXT,
  amenities TEXT[],
  operating_hours JSONB,
  approved BOOLEAN DEFAULT FALSE,
  rejection_reason TEXT
);

-- Create stops table
CREATE TABLE IF NOT EXISTS stops (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR NOT NULL,
  latitude NUMERIC NOT NULL,
  longitude NUMERIC NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  created_by UUID REFERENCES admin_users(id)
);

-- Create route_stops table
CREATE TABLE IF NOT EXISTS route_stops (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  route_id UUID REFERENCES routes(id) ON DELETE CASCADE,
  stop_id UUID REFERENCES stops(id) ON DELETE CASCADE,
  stop_order INTEGER NOT NULL,
  fare_to_next NUMERIC,
  distance_to_next NUMERIC,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create search_history table
CREATE TABLE IF NOT EXISTS search_history (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  start_point TEXT NOT NULL,
  destination TEXT NOT NULL,
  searched_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create location_history table
CREATE TABLE IF NOT EXISTS location_history (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  latitude NUMERIC NOT NULL,
  longitude NUMERIC NOT NULL,
  accuracy NUMERIC,
  route_id UUID REFERENCES routes(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create route_tracking table
CREATE TABLE IF NOT EXISTS route_tracking (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  route_id UUID NOT NULL REFERENCES routes(id) ON DELETE CASCADE,
  current_stop_index INTEGER DEFAULT 0,
  progress_percentage NUMERIC DEFAULT 0,
  estimated_time_remaining INTEGER,
  last_updated TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create user_created_routes table
CREATE TABLE IF NOT EXISTS user_created_routes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  route_name TEXT NOT NULL,
  start_point TEXT NOT NULL,
  stops TEXT[] DEFAULT '{}',
  destination TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  main_route_id UUID REFERENCES routes(id),
  total_fare NUMERIC,
  stop_fares NUMERIC[],
  destination_fare NUMERIC
);

-- Create route_creation_payments table
CREATE TABLE IF NOT EXISTS route_creation_payments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  route_id UUID REFERENCES user_created_routes(id),
  amount NUMERIC NOT NULL,
  payment_status VARCHAR DEFAULT 'pending',
  payment_provider_data JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create notifications table
CREATE TABLE IF NOT EXISTS notifications (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR NOT NULL,
  message TEXT NOT NULL,
  type VARCHAR NOT NULL CHECK (type IN ('banner', 'fullscreen')),
  target_type VARCHAR NOT NULL CHECK (target_type IN ('all', 'location', 'device', 'search_history', 'imei')),
  target_criteria JSONB DEFAULT '{}',
  scheduled_for TIMESTAMPTZ,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  sent_count INTEGER DEFAULT 0,
  read_count INTEGER DEFAULT 0,
  created_by UUID REFERENCES admin_users(id)
);

-- Create notification_logs table
CREATE TABLE IF NOT EXISTS notification_logs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  notification_id UUID NOT NULL REFERENCES notifications(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  device_info JSONB,
  location JSONB,
  sent_at TIMESTAMPTZ DEFAULT NOW(),
  read_at TIMESTAMPTZ
);

-- Create alerts table
CREATE TABLE IF NOT EXISTS alerts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  type VARCHAR NOT NULL CHECK (type IN ('route', 'user', 'system', 'payment')),
  severity VARCHAR NOT NULL CHECK (severity IN ('high', 'medium', 'low')),
  title VARCHAR NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  resolved BOOLEAN DEFAULT FALSE,
  resolved_at TIMESTAMPTZ,
  data JSONB
);

-- Enable Row Level Security on all tables
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE routes ENABLE ROW LEVEL SECURITY;
ALTER TABLE stops ENABLE ROW LEVEL SECURITY;
ALTER TABLE route_stops ENABLE ROW LEVEL SECURITY;
ALTER TABLE search_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE location_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE route_tracking ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_created_routes ENABLE ROW LEVEL SECURITY;
ALTER TABLE route_creation_payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE notification_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE alerts ENABLE ROW LEVEL SECURITY;

-- Create basic policies
CREATE POLICY "Enable read access for all authenticated users" ON profiles
  FOR SELECT USING (auth.uid() IS NOT NULL);

CREATE POLICY "Enable read access for all authenticated users" ON users
  FOR SELECT USING (auth.uid() IS NOT NULL);

CREATE POLICY "Enable read access for all authenticated users" ON routes
  FOR SELECT USING (auth.uid() IS NOT NULL);

CREATE POLICY "Enable read access for all authenticated users" ON stops
  FOR SELECT USING (auth.uid() IS NOT NULL);

-- Insert sample admin user (password: admin123)
INSERT INTO admin_users (email, password_hash) 
VALUES ('admin@example.com', crypt('admin123', gen_salt('bf')))
ON CONFLICT (email) DO NOTHING;

-- Insert sample stops
INSERT INTO stops (name, latitude, longitude) VALUES
('Accra Central', 5.5557, -0.1963),
('Kumasi Kejetia', 6.6981, -1.6234),
('Tamale Station', 9.4075, -0.8533),
('Takoradi Circle', 4.9016, -1.7831),
('Cape Coast', 5.1315, -1.2795)
ON CONFLICT DO NOTHING;
`

    console.log(sql)
    console.log('============================================')
    console.log('\n📝 Copy and paste this SQL into Supabase SQL Editor')
    console.log('Then click "Run" to create all tables')
    
  } catch (error) {
    console.error('❌ Error:', error)
  }
}

// Run initialization
initializeDatabase()