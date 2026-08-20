import { ArrowUpRight, CalendarDays, CheckCircle2, ClipboardCheck, CreditCard, FileText, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import AppShell from '../components/layout/AppShell'
import PageHeader from '../components/ui/PageHeader'
import Card from '../components/ui/Card'
import StatCard from '../components/ui/StatCard'
import Badge from '../components/ui/Badge'
import { roleNavigation } from '../app/navigation'

const activity = [
  { label: 'Attendance recorded', detail: 'Junior performance group · 12 students', time: '10 min ago', icon: ClipboardCheck, tone: 'success' as const },
  { label: 'New student enrolled', detail: 'Aarav Menon · Football', time: '1 hour ago', icon: Users, tone: 'info' as const },
  { label: 'Payment received', detail: 'May training fees · 18 invoices', time: '3 hours ago', icon: CreditCard, tone: 'neutral' as const },
]

function AdminDashboardPage() {
  return (
    <AppShell navigationItems={roleNavigation.admin.items} topbarTitle="Admin / Owner">
      <PageHeader title="Good afternoon, Priya" description="A clear view of how your academy is doing today." />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Active students" value="248" change="+12 this month" trend="up" icon={Users} />
        <StatCard title="Active coaches" value="18" change="Across 5 sports" trend="neutral" icon={CheckCircle2} />
        <StatCard title="Attendance today" value="91%" change="216 present" trend="up" icon={ClipboardCheck} />
        <StatCard title="Fees collected" value="84%" change="May collection rate" trend="neutral" icon={CreditCard} />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <Card>
          <div className="flex items-center justify-between gap-4"><div><h2 className="font-semibold text-text-primary">Academy attendance</h2><p className="mt-1 text-sm text-text-secondary">Today's participation overview</p></div><ClipboardCheck aria-hidden="true" className="size-5 text-profieldy-blue" /></div>
          <div className="mt-6 flex items-center gap-6"><div className="relative flex size-32 shrink-0 items-center justify-center rounded-full border-[12px] border-profieldy-blue-light"><div className="absolute inset-0 rounded-full border-[12px] border-transparent border-t-profieldy-blue border-r-profieldy-blue" /><div className="text-center"><p className="text-2xl font-bold text-text-primary">91%</p><p className="text-xs text-text-secondary">present</p></div></div><div className="space-y-3 text-sm"><div className="flex items-center gap-2"><span className="size-2 rounded-full bg-success" />216 present</div><div className="flex items-center gap-2"><span className="size-2 rounded-full bg-warning" />18 late</div><div className="flex items-center gap-2"><span className="size-2 rounded-full bg-danger" />14 absent</div></div></div>
          <Link to="/admin/attendance" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-profieldy-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-profieldy-blue">View attendance <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
        </Card>

        <Card>
          <div className="flex items-center justify-between gap-4"><div><h2 className="font-semibold text-text-primary">Academy activity</h2><p className="mt-1 text-sm text-text-secondary">Recent updates across your academy</p></div><Badge variant="info">Live overview</Badge></div>
          <div className="mt-5 divide-y divide-border">{activity.map(({ label, detail, time, icon: Icon, tone }) => <div key={label} className="flex items-center gap-3 py-4 first:pt-0 last:pb-0"><div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-profieldy-blue-light text-profieldy-blue"><Icon aria-hidden="true" className="size-4" /></div><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-text-primary">{label}</p><p className="mt-1 truncate text-xs text-text-secondary">{detail}</p></div><div className="shrink-0 text-right"><Badge variant={tone}>{time}</Badge></div></div>)}</div>
          <div className="mt-2 grid gap-3 border-t border-border pt-4 sm:grid-cols-2"><Link to="/admin/reports" className="flex items-center gap-2 rounded-md bg-background p-3 text-sm font-medium text-text-primary hover:bg-profieldy-blue-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-profieldy-blue"><FileText aria-hidden="true" className="size-4 text-profieldy-blue" />Review reports</Link><Link to="/admin/schedule" className="flex items-center gap-2 rounded-md bg-background p-3 text-sm font-medium text-text-primary hover:bg-profieldy-blue-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-profieldy-blue"><CalendarDays aria-hidden="true" className="size-4 text-profieldy-blue" />Manage schedule</Link></div>
        </Card>
      </div>
    </AppShell>
  )
}

export default AdminDashboardPage