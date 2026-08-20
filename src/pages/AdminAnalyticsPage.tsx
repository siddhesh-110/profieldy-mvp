import { BarChart3, IndianRupee, TrendingUp, Users } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import { roleNavigation } from '../app/navigation'
import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'
import StatCard from '../components/ui/StatCard'

const revenueBars = [
  { month: 'Mar', value: 68 },
  { month: 'Apr', value: 74 },
  { month: 'May', value: 81 },
  { month: 'Jun', value: 78 },
  { month: 'Jul', value: 88 },
  { month: 'Aug', value: 94 },
]

const enrollmentBars = [
  { label: 'Football', value: 148, width: '100%' },
  { label: 'Swimming', value: 42, width: '29%' },
  { label: 'Basketball', value: 34, width: '23%' },
  { label: 'Athletic development', value: 24, width: '16%' },
]

function AdminAnalyticsPage() {
  return <AppShell navigationItems={roleNavigation.admin.items} topbarTitle="Admin / Owner"><PageHeader title="Analytics" description="A high-level view of academy growth and operations." /><div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><StatCard title="Total revenue" value="₹18.4L" change="+12% month on month" trend="up" icon={IndianRupee} /><StatCard title="Student growth" value="+8.4%" change="20 new enrollments" trend="up" icon={Users} /><StatCard title="Coach utilization" value="87%" change="Across active batches" trend="up" icon={BarChart3} /><StatCard title="Retention rate" value="92%" change="+2% this quarter" trend="up" icon={TrendingUp} /></div><div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]"><Card><div><h2 className="font-semibold text-text-primary">Revenue trend</h2><p className="mt-1 text-sm text-text-secondary">Monthly collection index, last six months</p></div><div className="mt-8 flex h-48 items-end gap-3 border-b border-border px-2">{revenueBars.map((bar) => <div key={bar.month} className="flex h-full flex-1 flex-col items-center justify-end gap-2"><div className="w-full max-w-12 rounded-t-md bg-profieldy-blue" style={{ height: `${bar.value}%` }} aria-label={`${bar.month} revenue index ${bar.value}`} /><span className="text-xs text-text-muted">{bar.month}</span></div>)}</div><p className="mt-4 text-xs text-text-secondary">Collection momentum is strongest in August after the new term enrollment cycle.</p></Card><Card><div><h2 className="font-semibold text-text-primary">Enrollment mix</h2><p className="mt-1 text-sm text-text-secondary">Active students by program</p></div><div className="mt-7 space-y-5">{enrollmentBars.map((bar) => <div key={bar.label}><div className="flex justify-between text-sm"><span className="font-medium text-text-primary">{bar.label}</span><span className="font-semibold tabular-nums text-text-secondary">{bar.value}</span></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-profieldy-pink" style={{ width: bar.width }} /></div></div>)}</div><div className="mt-6 flex items-center gap-2 border-t border-border pt-4 text-xs text-text-secondary"><TrendingUp aria-hidden="true" className="size-4 text-success" /> 8.4% overall student growth this term</div></Card></div></AppShell>
}

export default AdminAnalyticsPage
