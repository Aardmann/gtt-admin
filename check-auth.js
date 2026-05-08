// check-auth.js
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('🔍 Testing Supabase Connection...')
console.log('URL:', supabaseUrl)
console.log('Key exists:', !!supabaseKey)

const supabase = createClient(supabaseUrl, supabaseKey)

async function testConnection() {
  try {
    // Test 1: Basic connection
    console.log('\n📡 Testing connection...')
    const { data, error } = await supabase.from('users').select('count').limit(1)
    
    if (error) {
      console.error('❌ Connection failed:', error.message)
      console.error('Error code:', error.code)
      
      // Check if table exists
      if (error.code === 'PGRST116') {
        console.log('Table might not exist. Please run the SQL schema first.')
      }
    } else {
      console.log('✅ Connected successfully!')
    }

    // Test 2: Auth configuration
    console.log('\n🔐 Testing auth configuration...')
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email: 'test@example.com',
      password: 'wrong-password'
    })

    if (authError) {
      console.log('Auth error (expected with wrong credentials):', authError.message)
      if (authError.message.includes('Invalid login credentials')) {
        console.log('✅ Auth is working! (Got expected invalid credentials error)')
      }
    }

  } catch (error) {
    console.error('❌ Unexpected error:', error.message)
  }
}

testConnection()