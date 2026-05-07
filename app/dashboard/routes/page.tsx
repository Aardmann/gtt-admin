// app/dashboard/routes/page.tsx
import { Suspense } from 'react'
import RoutesPageContent from './RoutesPageContent'

export default function RoutesPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading routes...</div>}>
      <RoutesPageContent />
    </Suspense>
  )
}