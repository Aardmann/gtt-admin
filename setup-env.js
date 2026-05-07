// setup-env.js
const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('🎯 Ghana Trotro Admin Setup')
console.log('============================\n')

async function setup() {
  // Check existing .env.local
  if (fs.existsSync('.env.local')) {
    const content = fs.readFileSync('.env.local', 'utf8')
    console.log('Current .env.local:')
    console.log(content)
    console.log('\n')
  }

  // Get Supabase URL
  const supabaseUrl = await new Promise((resolve) => {
    rl.question('Enter your Supabase URL (https://xxx.supabase.co): ', resolve)
  })

  // Get Supabase anon key
  const supabaseKey = await new Promise((resolve) => {
    rl.question('Enter your Supabase anon key: ', resolve)
  })

  // Create .env.local
  const envContent = `NEXT_PUBLIC_SUPABASE_URL=${supabaseUrl}
NEXT_PUBLIC_SUPABASE_ANON_KEY=${supabaseKey}`

  fs.writeFileSync('.env.local', envContent)
  console.log('\n✅ .env.local created successfully!')
  
  // Test the connection
  console.log('\n🔍 Testing connection...')
  console.log(`URL: ${supabaseUrl}`)
  console.log(`Key starts with: ${supabaseKey.substring(0, 20)}...`)

  rl.close()
}

setup()