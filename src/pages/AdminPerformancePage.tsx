import { Award, ArrowDownRight, ArrowUpRight, Minus, Target, TrendingUp, Users } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import { roleNavigation } from '../app/navigation'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'
import StatCard from '../components/ui/StatCard'

const performanceRows = [
  { name: 'U16 Football Performance', coach: 'Maya Rao', score: 88, change: '+8%', trend: 'up' as const },
  { name: 'U16 Basketball', coach: 'Sofia Fernandes', score: 84, change: '+5%', trend: 'up' as const },
  { name: 'Junior Swimming', coach: 'Anika Iyer', score: 82, change: '+3%', trend: 'up' as const },
  { name: 'U14 Football Development', coach: 'Daniel Thomas', score: 78, change: 'Steady', trend: 'flat' as const },
  { name: 'Speed Fundamentals', coach: 'Rahul Menon', score: 71, change: '-2%', trend: 'down' as const },
]

const trendMeta = { up: { label: 'Improving', variant: 'success' as const, icon: ArrowUpRight }, flat: { label: 'Steady', variant: 'neutral' as const, icon: Minus }, down: { label: 'Needs review', variant: 'warning' as const, icon: ArrowDownRight } }

function AdminPerformancePage() {
  return (
    <AppShell navigationItems={roleNavigation.admin.items} topbarTitle="Admin / Owner">
      <PageHeader title="Performance" description="Academy-wide progress across active programs." />
      <div className="mt-6 grid gap-4 sm:grid-cols-3"><StatCard title="Top-performing batch" value="U16 Football" change="88 / 100 average" trend="up" icon={Award} /><StatCard title="Average performance score" value="81 / 100" change="+6 points this term" trend="up" icon={Target} /><StatCard title="Improvement trend" value="+6.2%" change="Across active programs" trend="up" icon={TrendingUp} /></div>
      <Card className="mt-6"><div className="flex items-start justify-between gap-4"><div><h2 className="font-semibold text-text-primary">Program performance</h2><p className="mt-1 text-sm text-text-secondary">Latest assessment snapshot by batch</p></div><Users aria-hidden="true" className="size-5 text-profieldy-blue" /></div><div className="mt-6 overflow-x-auto"><table className="w-full min-w-180 border-collapse text-left"><caption className="sr-only">Academy program performance</caption><thead><tr className="border-b border-border text-xs uppercase tracking-wide text-text-muted"><th scope="col" className="pb-3 pr-4 font-medium">Program</th><th scope="col" className="pb-3 pr-4 font-medium">Lead coach</th><th scope="col" className="pb-3 pr-4 font-medium">Score</th><th scope="col" className="pb-3 font-medium">Trend</th></tr></thead><tbody className="divide-y divide-border">{performanceRows.map((row) => { const meta = trendMeta[row.trend]; const TrendIcon = meta.icon; return <tr key={row.name}><th scope="row" className="py-4 pr-4 text-sm font-semibold text-text-primary">{row.name}</th><td className="py-4 pr-4 text-sm text-text-secondary">{row.coach}</td><td className="py-4 pr-4"><div className="flex items-center gap-3"><div className="h-2 w-24 overflow-hidden rounded-full bg-slate-100" role="progressbar" aria-label={`${row.name} performance score`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={row.score}><div className={`h-full rounded-full ${row.score < 75 ? 'bg-warning' : 'bg-profieldy-blue'}`} style={{ width: `${row.score}%` }} /></div><span className="text-sm font-bold tabular-nums text-text-primary">{row.score}</span></div></td><td className="py-4"><Badge variant={meta.variant}><span className="inline-flex items-center gap-1"><TrendIcon aria-hidden="true" className="size-3.5" /> {meta.label} · {row.change}</span></Badge></td></tr> })}</tbody></table></div></Card>
      <Card className="mt-6 border-profieldy-pink/20 bg-profieldy-pink-light/50"><div className="flex items-start gap-3"><TrendingUp aria-hidden="true" className="mt-0.5 size-5 text-profieldy-pink" /><div><h2 className="font-semibold text-text-primary">Academy insight</h2><p className="mt-2 text-sm leading-6 text-text-secondary">Football and basketball programs are showing the strongest upward movement this term. Speed Fundamentals is the next review priority for coaching support.</p></div></div></Card>
    </AppShell>
  )
}

export default AdminPerformancePage
