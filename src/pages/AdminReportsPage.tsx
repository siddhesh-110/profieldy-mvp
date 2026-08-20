import { BarChart3, ClipboardCheck, CreditCard, FileText, TrendingUp, Users } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import { roleNavigation } from '../app/navigation'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'
import StatCard from '../components/ui/StatCard'

const reportTypes = [
  { title: 'Attendance summary', description: 'Review participation rates by batch, coach, and reporting period.', icon: ClipboardCheck, tone: 'info' as const },
  { title: 'Fee collection summary', description: 'See paid, due, and overdue fee activity across the academy.', icon: CreditCard, tone: 'success' as const },
  { title: 'Coach performance', description: 'Compare coaching activity, reviews, and program progress.', icon: TrendingUp, tone: 'warning' as const },
  { title: 'Student progress', description: 'Summarize athlete development and latest assessment trends.', icon: Users, tone: 'neutral' as const },
]

function AdminReportsPage() {
  return (
    <AppShell navigationItems={roleNavigation.admin.items} topbarTitle="Admin / Owner">
      <PageHeader title="Reports" description="A central view of academy reporting activity." />
      <div className="mt-6 grid gap-4 sm:grid-cols-3"><StatCard title="Reports this month" value="42" change="+8 from last month" trend="up" icon={FileText} /><StatCard title="Most viewed report" value="Attendance" change="18 views this month" trend="neutral" icon={BarChart3} /><StatCard title="Last generated" value="Today, 10:42 AM" change="Academy summary" trend="neutral" icon={ClipboardCheck} /></div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">{reportTypes.map(({ title, description, icon: Icon, tone }) => <Card key={title} className="flex flex-col"><div className="flex items-start justify-between gap-4"><span className="flex size-10 items-center justify-center rounded-md bg-profieldy-blue-light text-profieldy-blue"><Icon aria-hidden="true" className="size-5" /></span><Badge variant={tone}>Available preview</Badge></div><h2 className="mt-5 font-semibold text-text-primary">{title}</h2><p className="mt-2 flex-1 text-sm leading-6 text-text-secondary">{description}</p><Button disabled variant="outline" className="mt-6 w-full" aria-label={`${title} unavailable in prototype mode`}>Generate report</Button></Card>)}</div>
      <p className="mt-5 text-center text-xs text-text-secondary">Report generation, exports, and downloads are unavailable in prototype mode.</p>
    </AppShell>
  )
}

export default AdminReportsPage
