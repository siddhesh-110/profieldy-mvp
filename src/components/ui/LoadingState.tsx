interface LoadingStateProps {
  label?: string
  rows?: number
}

function LoadingState({ label = 'Loading', rows = 3 }: LoadingStateProps) {
  return (
    <div role="status" aria-label={label} className="space-y-3">
      {Array.from({ length: rows }, (_, index) => <div key={index} className="h-4 animate-pulse rounded bg-profieldy-blue-light" />)}
      <span className="sr-only">{label}</span>
    </div>
  )
}

export default LoadingState