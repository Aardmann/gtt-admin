# Ghana Trotro Admin Setup Guide

## 1. Database Setup

### Step 1: Run the SQL
1. Go to your Supabase project
2. Click "SQL Editor" in left sidebar
3. Click "New query"
4. Copy the SQL from `scripts/full-setup.sql`
5. Paste and click "Run"

### Step 2: Create Storage Bucket
1. Go to "Storage" in left sidebar
2. Click "Create a new bucket"
3. Name: `notification-images`
4. Set to public
5. Click "Create bucket"

### Step 3: Enable Authentication
1. Go to "Authentication" → "Providers"
2. Enable "Email"
3. Disable "Confirm email" (for testing)
4. Go to "URL Configuration"
5. Add: `http://localhost:3000` to Site URL
6. Add: `http://localhost:3000/dashboard` to Redirect URLs

### Step 4: Create Admin User
1. Go to "Authentication" → "Users"
2. Click "Invite User"
3. Email: `admin@ghana-trotro.com`
4. Send invite
5. Set password to `Admin123!`

## 2. Environment Variables

Create `.env.local` file:
