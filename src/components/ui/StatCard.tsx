import type { LucideIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string | number
  change?: string
  trend?: 'up' | 'down' | 'neutral'
  icon?: LucideIcon
}

const trendClasses = { up: 'text-success', down: 'text-danger', neutral: 'text-text-secondary' }

function StatCard({ title, value, change, trend = 'neutral', icon: Icon }: StatCardProps) {
  return (
    <section className="rounded-lg border border-border bg-surface p-5 shadow-sm" aria-label={title}>
      <div className="flex items-start justify-between gap-4">
        <p className="text-sm font-medium text-text-secondary">{title}</p>
        {Icon && <Icon aria-hidden="true" className="size-5 text-profieldy-blue" />}
      </div>
      <p className="mt-3 text-2xl font-bold tabular-nums text-text-primary">{value}</p>
      {change && <p className={`mt-2 text-xs font-medium ${trendClasses[trend]}`}>{change}</p>}
    </section>
  )
}

export default StatCard