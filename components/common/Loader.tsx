'use client'

interface LoaderProps {
  message?: string
}

export function Loader({ message = "Loading..." }: LoaderProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      {message && <p className="mt-4 text-text-light">{message}</p>}
    </div>
  )
}