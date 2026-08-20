import { CalendarDays, CheckCircle2, ClipboardCheck, Users } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import { roleNavigation } from '../app/navigation'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'
import StatCard from '../components/ui/StatCard'

const batches = [
  { name: 'U16 Football Performance', coach: 'Maya Rao', students: 32, attendance: 96, sessions: 18 },
  { name: 'U14 Football Development', coach: 'Daniel Thomas', students: 26, attendance: 88, sessions: 16 },
  { name: 'Junior Swimming', coach: 'Anika Iyer', students: 24, attendance: 93, sessions: 20 },
  { name: 'Speed Fundamentals', coach: 'Rahul Menon', students: 18, attendance: 76, sessions: 14 },
  { name: 'U16 Basketball', coach: 'Sofia Fernandes', students: 21, attendance: 90, sessions: 17 },
]

function AdminAttendancePage() {
  return (
    <AppShell navigationItems={roleNavigation.admin.items} topbarTitle="Admin / Owner">
      <PageHeader title="Attendance" description="Academy-wide participation for the current period." />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><StatCard title="Overall attendance" value="91%" change="+3% from last period" trend="up" icon={ClipboardCheck} /><StatCard title="Present today" value="216" change="Across all active batches" trend="up" icon={CheckCircle2} /><StatCard title="Absent today" value="14" change="5.6% of active students" trend="neutral" icon={Users} /><StatCard title="Batches tracked" value="12" change="Current period" trend="neutral" icon={CalendarDays} /></div>
      <Card className="mt-6"><div className="flex items-start justify-between gap-4"><div><h2 className="font-semibold text-text-primary">Batch attendance</h2><p className="mt-1 text-sm text-text-secondary">Attendance rates across academy programs</p></div><Badge variant="info">Current period</Badge></div><div className="mt-6 overflow-x-auto"><table className="w-full min-w-180 border-collapse text-left"><caption className="sr-only">Academy batch attendance</caption><thead><tr className="border-b border-border text-xs uppercase tracking-wide text-text-muted"><th scope="col" className="pb-3 pr-4 font-medium">Batch</th><th scope="col" className="pb-3 pr-4 font-medium">Coach</th><th scope="col" className="pb-3 pr-4 font-medium">Students</th><th scope="col" className="pb-3 pr-4 font-medium">Sessions</th><th scope="col" className="pb-3 font-medium">Attendance</th></tr></thead><tbody className="divide-y divide-border">{batches.map((batch) => <tr key={batch.name}><th scope="row" className="py-4 pr-4 text-sm font-semibold text-text-primary">{batch.name}</th><td className="py-4 pr-4 text-sm text-text-secondary">{batch.coach}</td><td className="py-4 pr-4 text-sm tabular-nums text-text-secondary">{batch.students}</td><td className="py-4 pr-4 text-sm tabular-nums text-text-secondary">{batch.sessions}</td><td className="py-4"><div className="flex items-center gap-3"><span className="text-sm font-bold tabular-nums text-text-primary">{batch.attendance}%</span><Badge variant={batch.attendance < 80 ? 'warning' : 'success'}>{batch.attendance < 80 ? 'Below target' : 'Healthy'}</Badge></div></td></tr>)}</tbody></table></div><p className="mt-4 text-xs text-text-secondary">Healthy attendance target: 80% or above.</p></Card>
    </AppShell>
  )
}

export default AdminAttendancePage
