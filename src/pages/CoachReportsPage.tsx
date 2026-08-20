import { ArrowUpRight, CalendarDays, CheckCircle2, FileText, MessageSquareText, UserRound } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import { roleNavigation } from '../app/navigation'
import Avatar from '../components/ui/Avatar'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'
import StatCard from '../components/ui/StatCard'

const reportItems = [
  { name: 'Riya Sharma', period: 'April - June 2026', status: 'Ready for review', variant: 'info' as const, due: 'Due 22 Aug' },
  { name: 'Arjun Mehta', period: 'April - June 2026', status: 'Completed', variant: 'success' as const, due: 'Reviewed 20 Aug' },
  { name: 'Meera Patel', period: 'April - June 2026', status: 'Draft', variant: 'warning' as const, due: 'Due 23 Aug' },
  { name: 'Kabir Singh', period: 'April - June 2026', status: 'Draft', variant: 'warning' as const, due: 'Due 23 Aug' },
]

function CoachReportsPage() {
  return (
    <AppShell navigationItems={roleNavigation.coach.items} topbarTitle="Coach">
      <PageHeader title="Reports" description="Review and track student development reports." action={<Button disabled aria-label="Create report unavailable in prototype mode">Create report <ArrowUpRight aria-hidden="true" className="size-4" /></Button>} />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><StatCard title="Reports completed" value="27" change="This academic year" trend="up" icon={CheckCircle2} /><StatCard title="Reviews due" value="5" change="Due this week" trend="neutral" icon={CalendarDays} /><StatCard title="Drafts awaiting completion" value="3" change="Needs your attention" trend="neutral" icon={FileText} /><StatCard title="Recent feedback" value="12" change="Shared this month" trend="up" icon={MessageSquareText} /></div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.35fr]">
        <Card>
          <div className="flex items-start justify-between gap-4"><div><h2 className="font-semibold text-text-primary">Student reports</h2><p className="mt-1 text-sm text-text-secondary">Latest reporting cycle for your assigned athletes</p></div><FileText aria-hidden="true" className="size-5 text-profieldy-blue" /></div>
          <div className="mt-6 divide-y divide-border">{reportItems.map((report) => <div key={report.name} className="flex flex-col gap-4 py-4 first:pt-0 sm:flex-row sm:items-center"><Avatar name={report.name} size="md" /><div className="min-w-0 flex-1"><p className="text-sm font-semibold text-text-primary">{report.name}</p><p className="mt-1 flex items-center gap-1.5 text-xs text-text-secondary"><CalendarDays aria-hidden="true" className="size-3.5" /> {report.period}</p></div><div className="flex flex-col items-start gap-2 sm:items-end"><Badge variant={report.variant}>{report.status}</Badge><span className="text-xs text-text-secondary">{report.due}</span></div></div>)}</div>
        </Card>

        <Card className="border-profieldy-pink/20 bg-profieldy-pink-light/50"><div className="flex items-start gap-3"><MessageSquareText aria-hidden="true" className="mt-0.5 size-5 text-profieldy-pink" /><div><h2 className="font-semibold text-text-primary">Recent feedback</h2><p className="mt-1 text-sm text-text-secondary">Latest academy review note</p></div></div><p className="mt-6 text-sm leading-6 text-text-secondary">“The U16 group is showing strong progress in decision making. Keep individual goals visible during the next review cycle.”</p><div className="mt-6 flex items-center gap-2 border-t border-profieldy-pink/15 pt-4 text-xs text-text-secondary"><UserRound aria-hidden="true" className="size-4" /> Academy director · 18 Aug 2026</div></Card>
      </div>

      <p className="mt-4 text-center text-xs text-text-secondary">Report creation, editing, and exports are unavailable in prototype mode.</p>
    </AppShell>
  )
}

export default CoachReportsPage
