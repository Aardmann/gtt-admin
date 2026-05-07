#!/bin/bash

echo "Setting up Ghana Trotro Admin Complete..."

# Create all directories
mkdir -p components/{dashboard,layout,notifications,common,providers}
mkdir -p lib hooks types
mkdir -p app/{login,dashboard/{users,routes,stops,notifications/{create},analytics,alerts},api/notifications}

# Install dependencies
npm install @supabase/supabase-js @supabase/ssr @supabase/auth-ui-react @supabase/auth-ui-shared recharts date-fns react-hot-toast react-icons tailwind-merge clsx zod

# Create config files
cat > middleware.ts << 'EOF'
// middleware.ts content from above
EOF

# Create all component files
# ... (paste each component from above into respective files)

echo "Complete! Run 'npm run dev' to start the development server."