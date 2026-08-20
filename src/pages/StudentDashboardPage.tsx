import { ArrowUpRight, CalendarDays, Clock3, Dumbbell, FileText, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import AppShell from '../components/layout/AppShell'
import PageHeader from '../components/ui/PageHeader'
import Card from '../components/ui/Card'
import StatCard from '../components/ui/StatCard'
import Badge from '../components/ui/Badge'
import Avatar from '../components/ui/Avatar'
import { roleNavigation } from '../app/navigation'

const upcomingSessions = [
  { day: 'Today', time: '4:30 PM', title: 'Strength & conditioning', coach: 'Coach Maya', status: 'Next' },
  { day: 'Wed, 14 May', time: '5:00 PM', title: 'Technical training', coach: 'Coach Daniel', status: 'Scheduled' },
  { day: 'Sat, 17 May', time: '10:00 AM', title: 'Team practice', coach: 'Coach Maya', status: 'Scheduled' },
]

function StudentDashboardPage() {
  return (
    <AppShell navigationItems={roleNavigation.student.items} topbarTitle="Student / Parent">
      <PageHeader
        title="Good afternoon, Arjun"
        description="Here is your training progress and academy activity."
        action={<Avatar name="Arjun Mehta" size="md" status="online" />}
      />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Attendance" value="92%" change="+4% this month" trend="up" icon={CalendarDays} />
        <StatCard title="Current level" value="Intermediate" change="On track" trend="neutral" icon={Dumbbell} />
        <StatCard title="Performance score" value="84 / 100" change="+8 points" trend="up" icon={Target} />
        <StatCard title="Next report" value="6 days" change="Due 20 May" trend="neutral" icon={FileText} />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="font-semibold text-text-primary">Upcoming schedule</h2>
              <p className="mt-1 text-sm text-text-secondary">Your next academy sessions</p>
            </div>
            <Link to="/student/schedule" className="inline-flex items-center gap-1 text-sm font-semibold text-profieldy-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-profieldy-blue">
              View schedule <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <div className="mt-5 divide-y divide-border">
            {upcomingSessions.map((session) => (
              <div key={`${session.day}-${session.title}`} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                <div className="hidden w-24 shrink-0 sm:block"><p className="text-sm font-semibold text-text-primary">{session.day}</p><p className="mt-1 text-xs text-text-secondary">{session.time}</p></div>
                <div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-text-primary">{session.title}</p><p className="mt-1 text-xs text-text-secondary">{session.coach}</p></div>
                <Badge variant={session.status === 'Next' ? 'info' : 'neutral'}>{session.status}</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between gap-4"><div><h2 className="font-semibold text-text-primary">Recent progress</h2><p className="mt-1 text-sm text-text-secondary">Your latest performance snapshot</p></div><Target aria-hidden="true" className="size-5 text-profieldy-pink" /></div>
          <div className="mt-6 space-y-5">
            {[['Speed & agility', '88%'], ['Ball control', '81%'], ['Endurance', '76%']].map(([label, value]) => (
              <div key={label}><div className="flex justify-between text-sm"><span className="font-medium text-text-primary">{label}</span><span className="text-text-secondary">{value}</span></div><div className="mt-2 h-2 rounded-full bg-profieldy-blue-light"><div className="h-2 rounded-full bg-profieldy-blue" style={{ width: value }} /></div></div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 border-t border-border pt-4 text-xs text-text-secondary"><Clock3 aria-hidden="true" className="size-4" /> Updated after your last session</div>
        </Card>
      </div>
    </AppShell>
  )
}

export default StudentDashboardPage