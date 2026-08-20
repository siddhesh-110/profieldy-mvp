import { ArrowUpRight, CalendarDays, ClipboardCheck, Clock3, FileText, UserCheck, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import AppShell from '../components/layout/AppShell'
import PageHeader from '../components/ui/PageHeader'
import Card from '../components/ui/Card'
import StatCard from '../components/ui/StatCard'
import Badge from '../components/ui/Badge'
import Avatar from '../components/ui/Avatar'
import { roleNavigation } from '../app/navigation'

const sessions = [
  { time: '4:30 PM', title: 'Junior performance group', detail: '12 athletes · Court 1', status: 'In 2 hours' },
  { time: '6:00 PM', title: 'Advanced skills session', detail: '8 athletes · Court 2', status: 'Today' },
  { time: '9:00 AM', title: 'Development assessment', detail: '6 athletes · Studio A', status: 'Tomorrow' },
]

const studentsNeedingAttention = [
  { name: 'Riya Sharma', detail: 'Performance review overdue', status: 'Review' },
  { name: 'Kabir Singh', detail: 'Absent from last session', status: 'Follow up' },
  { name: 'Meera Patel', detail: 'Attendance below target', status: 'Monitor' },
]

function CoachDashboardPage() {
  return (
    <AppShell navigationItems={roleNavigation.coach.items} topbarTitle="Coach">
      <PageHeader title="Good afternoon, Maya" description="Here is what needs your attention today." action={<Avatar name="Maya Rao" size="md" status="online" />} />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Assigned students" value="32" change="3 new this month" trend="up" icon={Users} />
        <StatCard title="Today's sessions" value="3" change="26 athletes total" trend="neutral" icon={CalendarDays} />
        <StatCard title="Attendance this week" value="94%" change="+2% from last week" trend="up" icon={ClipboardCheck} />
        <StatCard title="Reports to complete" value="5" change="Due this week" trend="neutral" icon={FileText} />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <Card>
          <div className="flex items-center justify-between gap-4"><div><h2 className="font-semibold text-text-primary">Today and upcoming</h2><p className="mt-1 text-sm text-text-secondary">Your coaching schedule</p></div><Link to="/coach/schedule" className="inline-flex items-center gap-1 text-sm font-semibold text-profieldy-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-profieldy-blue">Full schedule <ArrowUpRight aria-hidden="true" className="size-4" /></Link></div>
          <div className="mt-5 divide-y divide-border">
            {sessions.map((session) => <div key={session.title} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"><div className="w-16 shrink-0 text-sm font-semibold text-text-primary">{session.time}</div><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-text-primary">{session.title}</p><p className="mt-1 text-xs text-text-secondary">{session.detail}</p></div><Badge variant={session.status === 'In 2 hours' ? 'info' : 'neutral'}>{session.status}</Badge></div>)}
          </div>
          <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-xs text-text-secondary"><Clock3 aria-hidden="true" className="size-4" /> Keep attendance ready before each session</div>
        </Card>

        <Card>
          <div className="flex items-center justify-between gap-4"><div><h2 className="font-semibold text-text-primary">Students needing attention</h2><p className="mt-1 text-sm text-text-secondary">Small follow-ups for today</p></div><UserCheck aria-hidden="true" className="size-5 text-profieldy-pink" /></div>
          <div className="mt-5 divide-y divide-border">{studentsNeedingAttention.map((student) => <div key={student.name} className="flex items-center gap-3 py-4 first:pt-0 last:pb-0"><Avatar name={student.name} size="sm" /><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-text-primary">{student.name}</p><p className="mt-1 truncate text-xs text-text-secondary">{student.detail}</p></div><Badge variant={student.status === 'Review' ? 'warning' : 'neutral'}>{student.status}</Badge></div>)}</div>
        </Card>
      </div>
    </AppShell>
  )
}

export default CoachDashboardPage