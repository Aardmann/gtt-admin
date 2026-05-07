// scripts/verify-tables.js
require('dotenv').config({ path: '.env.local' })

const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkTables() {
  console.log('🔍 Checking database tables...')
  
  const tables = [
    'users',
    'profiles', 
    'routes',
    'stops',
    'search_history',
    'notifications',
    'alerts'
  ]
  
  for (const table of tables) {
    try {
      const { error } = await supabase
        .from(table)
        .select('count')
        .limit(1)
      
      if (error && error.code === 'PGRST116') {
        console.log(`❌ Table "${table}" does not exist`)
      } else if (error) {
        console.log(`⚠️  Table "${table}" error: ${error.message}`)
      } else {
        console.log(`✅ Table "${table}" exists`)
      }
    } catch (err) {
      console.log(`❌ Error checking table "${table}":`, err.message)
    }
  }
}

checkTables()