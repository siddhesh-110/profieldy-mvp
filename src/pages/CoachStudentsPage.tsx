import { AlertTriangle, ArrowUpRight, ClipboardCheck, FileText, TrendingUp, Users } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import { roleNavigation } from '../app/navigation'
import Avatar from '../components/ui/Avatar'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'
import StatCard from '../components/ui/StatCard'

const students = [
  { name: 'Riya Sharma', ageGroup: 'U16', level: 'Advanced', attendance: 96, progress: 91, status: 'On track', variant: 'success' as const },
  { name: 'Arjun Mehta', ageGroup: 'U16', level: 'Intermediate', attendance: 92, progress: 84, status: 'On track', variant: 'success' as const },
  { name: 'Kabir Singh', ageGroup: 'U14', level: 'Development', attendance: 78, progress: 72, status: 'Follow up', variant: 'warning' as const },
  { name: 'Meera Patel', ageGroup: 'U16', level: 'Intermediate', attendance: 74, progress: 76, status: 'Monitor', variant: 'warning' as const },
  { name: 'Aanya Nair', ageGroup: 'U14', level: 'Development', attendance: 89, progress: 80, status: 'On track', variant: 'success' as const },
]

function CoachStudentsPage() {
  return (
    <AppShell navigationItems={roleNavigation.coach.items} topbarTitle="Coach">
      <PageHeader title="My students" description="A snapshot of the athletes assigned to you." />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><StatCard title="Assigned students" value="32" change="3 new this month" trend="up" icon={Users} /><StatCard title="Attendance average" value="94%" change="+2% from last week" trend="up" icon={ClipboardCheck} /><StatCard title="Needs attention" value="3" change="Follow-ups this week" trend="neutral" icon={AlertTriangle} /><StatCard title="Assessments due" value="5" change="Due by Friday" trend="neutral" icon={FileText} /></div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.35fr]">
        <Card>
          <div className="flex items-start justify-between gap-4"><div><h2 className="font-semibold text-text-primary">Assigned students</h2><p className="mt-1 text-sm text-text-secondary">Attendance and current development progress</p></div><Users aria-hidden="true" className="size-5 text-profieldy-blue" /></div>
          <div className="mt-6 space-y-3">
            {students.map((student) => <div key={student.name} className="flex flex-col gap-4 rounded-md border border-border p-4 sm:flex-row sm:items-center"><Avatar name={student.name} size="md" /><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><p className="text-sm font-semibold text-text-primary">{student.name}</p><Badge variant={student.variant}>{student.status}</Badge></div><p className="mt-1 text-xs text-text-secondary">{student.ageGroup} · {student.level} football</p><div className="mt-3 grid gap-3 sm:grid-cols-2"><div><div className="flex justify-between text-xs"><span className="text-text-secondary">Attendance</span><span className="font-semibold text-text-primary">{student.attendance}%</span></div><div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100" role="progressbar" aria-label={`${student.name} attendance`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={student.attendance}><div className={`h-full rounded-full ${student.attendance < 80 ? 'bg-warning' : 'bg-profieldy-blue'}`} style={{ width: `${student.attendance}%` }} /></div></div><div><div className="flex justify-between text-xs"><span className="text-text-secondary">Progress</span><span className="font-semibold text-text-primary">{student.progress}%</span></div><div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100" role="progressbar" aria-label={`${student.name} development progress`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={student.progress}><div className="h-full rounded-full bg-profieldy-pink" style={{ width: `${student.progress}%` }} /></div></div></div></div><Button variant="ghost" disabled className="w-fit shrink-0" aria-label={`View ${student.name} unavailable in prototype mode`}>View student <ArrowUpRight aria-hidden="true" className="size-4" /></Button></div>)}
          </div>
        </Card>

        <Card className="border-amber-200 bg-amber-50/50"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 size-5 text-amber-700" /><div><h2 className="font-semibold text-text-primary">Needs attention</h2><p className="mt-1 text-sm text-text-secondary">Small follow-ups to prioritize</p></div></div><div className="mt-6 space-y-4"><div><p className="text-sm font-semibold text-text-primary">Kabir Singh</p><p className="mt-1 text-xs leading-5 text-text-secondary">Absent from the last session. Check in before Friday training.</p></div><div className="border-t border-amber-200 pt-4"><p className="text-sm font-semibold text-text-primary">Meera Patel</p><p className="mt-1 text-xs leading-5 text-text-secondary">Attendance is below the 80% target this month.</p></div><div className="border-t border-amber-200 pt-4"><p className="text-sm font-semibold text-text-primary">Riya Sharma</p><p className="mt-1 text-xs leading-5 text-text-secondary">Performance review is ready for completion.</p></div></div><div className="mt-6 flex items-center gap-2 border-t border-amber-200 pt-4 text-xs text-text-secondary"><TrendingUp aria-hidden="true" className="size-4" /> Team average remains strong at 94%</div></Card>
      </div>
    </AppShell>
  )
}

export default CoachStudentsPage
