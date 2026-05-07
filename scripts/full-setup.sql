-- scripts/full-setup.sql
-- Run this entire SQL in Supabase SQL Editor

-- Enable extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. Create admin_users table
CREATE TABLE IF NOT EXISTS public.admin_users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR NOT NULL UNIQUE,
    password_hash VARCHAR NOT NULL,
    role VARCHAR DEFAULT 'admin',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create profiles table (linked to auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin', 'driver', 'banned')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    last_location JSONB,
    device_info JSONB,
    last_seen_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Create users table (linked to auth.users)
CREATE TABLE IF NOT EXISTS public.users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone_number TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Create stops table
CREATE TABLE IF NOT EXISTS public.stops (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR NOT NULL,
    latitude NUMERIC NOT NULL,
    longitude NUMERIC NOT NULL,
    region VARCHAR,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    created_by UUID REFERENCES public.admin_users(id)
);

-- 5. Create routes table
CREATE TABLE IF NOT EXISTS public.routes (
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
    amenities TEXT[] DEFAULT '{}',
    operating_hours JSONB DEFAULT '{"start": "06:00", "end": "22:00", "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]}',
    approved BOOLEAN DEFAULT FALSE,
    rejection_reason TEXT,
    CONSTRAINT routes_name_unique UNIQUE(name)
);

-- 6. Create route_stops table
CREATE TABLE IF NOT EXISTS public.route_stops (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    route_id UUID REFERENCES public.routes(id) ON DELETE CASCADE,
    stop_id UUID REFERENCES public.stops(id) ON DELETE CASCADE,
    stop_order INTEGER NOT NULL,
    fare_to_next NUMERIC,
    distance_to_next NUMERIC,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unique_route_stop_order UNIQUE(route_id, stop_order)
);

-- 7. Create search_history table
CREATE TABLE IF NOT EXISTS public.search_history (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    start_point TEXT NOT NULL,
    destination TEXT NOT NULL,
    searched_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. Create location_history table
CREATE TABLE IF NOT EXISTS public.location_history (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    latitude NUMERIC NOT NULL,
    longitude NUMERIC NOT NULL,
    accuracy NUMERIC,
    route_id UUID REFERENCES public.routes(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. Create user_created_routes table
CREATE TABLE IF NOT EXISTS public.user_created_routes (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    route_name TEXT NOT NULL,
    start_point TEXT NOT NULL,
    stops TEXT[] DEFAULT '{}',
    destination TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    main_route_id UUID REFERENCES public.routes(id),
    total_fare NUMERIC,
    stop_fares NUMERIC[],
    destination_fare NUMERIC
);

-- 10. Create route_creation_payments table
CREATE TABLE IF NOT EXISTS public.route_creation_payments (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    route_id UUID REFERENCES public.user_created_routes(id),
    amount NUMERIC NOT NULL,
    payment_status VARCHAR DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded')),
    payment_provider_data JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 11. Create notifications table (WITH IMAGE SUPPORT)
CREATE TABLE IF NOT EXISTS public.notifications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR NOT NULL,
    message TEXT NOT NULL,
    type VARCHAR NOT NULL CHECK (type IN ('banner', 'fullscreen')),
    image_url TEXT, -- New field for image storage
    target_type VARCHAR NOT NULL CHECK (target_type IN ('all', 'location', 'device', 'search_history', 'imei', 'user_group')),
    target_criteria JSONB DEFAULT '{}',
    scheduled_for TIMESTAMPTZ,
    expires_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    sent_count INTEGER DEFAULT 0,
    read_count INTEGER DEFAULT 0,
    created_by UUID REFERENCES public.admin_users(id)
);

-- 12. Create notification_logs table
CREATE TABLE IF NOT EXISTS public.notification_logs (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    notification_id UUID NOT NULL REFERENCES public.notifications(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    device_info JSONB,
    location JSONB,
    sent_at TIMESTAMPTZ DEFAULT NOW(),
    read_at TIMESTAMPTZ
);

-- 13. Create alerts table (for admin notifications)
CREATE TABLE IF NOT EXISTS public.alerts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    type VARCHAR NOT NULL CHECK (type IN ('new_route', 'payment', 'user', 'system')),
    severity VARCHAR NOT NULL CHECK (severity IN ('info', 'warning', 'error')),
    title VARCHAR NOT NULL,
    message TEXT NOT NULL,
    data JSONB DEFAULT '{}',
    read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    resolved_at TIMESTAMPTZ
);

-- 14. Create route_tracking table
CREATE TABLE IF NOT EXISTS public.route_tracking (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    route_id UUID NOT NULL REFERENCES public.routes(id) ON DELETE CASCADE,
    current_stop_index INTEGER DEFAULT 0,
    progress_percentage NUMERIC DEFAULT 0,
    estimated_time_remaining INTEGER,
    last_updated TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert sample data
INSERT INTO public.stops (name, latitude, longitude, region) VALUES
('Accra Central Station', 5.5557, -0.1963, 'Accra'),
('Kumasi Kejetia', 6.6981, -1.6234, 'Kumasi'),
('Tamale Main Station', 9.4075, -0.8533, 'Tamale'),
('Takoradi Market Circle', 4.9016, -1.7831, 'Takoradi'),
('Cape Coast Station', 5.1315, -1.2795, 'Cape Coast'),
('Sunyani Lorry Station', 7.3399, -2.3268, 'Sunyani'),
('Ho Central', 6.6111, 0.4713, 'Ho'),
('Koforidua Central', 6.0940, -0.2590, 'Koforidua')
ON CONFLICT DO NOTHING;

-- Insert sample routes
INSERT INTO public.routes (name, total_distance, total_fare, description, travel_time_minutes, vehicle_type, approved) VALUES
('Accra - Kumasi Express', 270.5, 85.00, 'Direct VIP bus service from Accra to Kumasi', 240, 'VIP Bus', true),
('Kumasi - Tamale', 398.2, 120.00, 'Northern route via Techiman and Kintampo', 360, 'Air-conditioned Bus', true),
('Accra - Takoradi Coastal', 218.7, 65.00, 'Scenic coastal route to Western Region', 180, 'Minibus', true),
('Kumasi - Cape Coast', 168.9, 55.00, 'Central region route via Assin Fosu', 150, 'Standard Bus', false)
ON CONFLICT (name) DO NOTHING;

-- Insert sample admin user
INSERT INTO public.admin_users (email, password_hash) 
VALUES ('admin@ghana-trotro.com', crypt('Admin123!', gen_salt('bf')))
ON CONFLICT (email) DO NOTHING;

-- Insert sample alerts
INSERT INTO public.alerts (type, severity, title, message, data) VALUES
('new_route', 'info', 'New Route Submitted', 'User JohnDoe submitted a new route: Kumasi - Cape Coast', '{"route_id": "new", "user": "JohnDoe"}'),
('payment', 'warning', 'Payment Failed', 'Route creation payment failed for user JaneSmith', '{"user_id": "456", "amount": 50}'),
('system', 'info', 'System Update', 'Database backup completed successfully', '{"backup_time": "2024-01-15T03:00:00Z"}')
ON CONFLICT DO NOTHING;

-- Create Row Level Security Policies
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.stops ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.routes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.route_stops ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.search_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.location_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_created_routes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.route_creation_payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notification_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.route_tracking ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access
CREATE POLICY "Admins can do everything" ON public.admin_users
    FOR ALL USING (auth.jwt() ->> 'email' IN (SELECT email FROM public.admin_users));

CREATE POLICY "Enable read access for all users" ON public.stops
    FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON public.routes
    FOR SELECT USING (true);

CREATE POLICY "Only admins can insert/update routes" ON public.routes
    FOR INSERT WITH CHECK (EXISTS (SELECT 1 FROM public.admin_users WHERE email = auth.jwt() ->> 'email'));

CREATE POLICY "Enable read access for authenticated users" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Enable read access for authenticated users" ON public.users
    FOR SELECT USING (auth.uid() = id);

-- Create function to auto-create alerts for new routes
CREATE OR REPLACE FUNCTION public.handle_new_route_alert()
RETURNS TRIGGER AS $$
BEGIN
    -- Create alert when new route is added
    INSERT INTO public.alerts (type, severity, title, message, data)
    VALUES (
        'new_route',
        'info',
        'New Route Submitted',
        'A new route "' || NEW.name || '" has been submitted for approval',
        jsonb_build_object(
            'route_id', NEW.id,
            'route_name', NEW.name,
            'created_by', NEW.created_by,
            'created_at', NEW.created_at
        )
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for new routes
CREATE TRIGGER new_route_alert_trigger
    AFTER INSERT ON public.routes
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_route_alert();

-- Create function to check admin role
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.admin_users 
        WHERE email = auth.jwt() ->> 'email'
    );
END;
$$ LANGUAGE plpgsql;

-- Grant necessary permissions
GRANT ALL ON ALL TABLES IN SCHEMA public TO postgres, anon, authenticated, service_role;
GRANT USAGE ON SCHEMA public TO postgres, anon, authenticated, service_role;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role);
CREATE INDEX IF NOT EXISTS idx_routes_approved ON public.routes(approved);
CREATE INDEX IF NOT EXISTS idx_routes_created_at ON public.routes(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_alerts_read ON public.alerts(read);
CREATE INDEX IF NOT EXISTS idx_alerts_created_at ON public.alerts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_search_history_user_id ON public.search_history(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_created_by ON public.notifications(created_by);
CREATE INDEX IF NOT EXISTS idx_notification_logs_user_id ON public.notification_logs(user_id);

-- Set up storage bucket for notification images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('notification-images', 'notification-images', true)
ON CONFLICT (id) DO NOTHING;

-- Create storage policy for notification images
CREATE POLICY "Allow admins to upload notification images" 
ON storage.objects 
FOR ALL 
USING (bucket_id = 'notification-images' AND public.is_admin())
WITH CHECK (bucket_id = 'notification-images' AND public.is_admin());

CREATE POLICY "Allow public to view notification images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'notification-images');