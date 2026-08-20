import { CalendarDays, Clock3, Dumbbell, MapPin, UserRound } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import { roleNavigation } from '../app/navigation'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'

const sessions = [
  { day: 'Today', date: '20 Aug', time: '4:30 PM - 6:00 PM', title: 'Strength & conditioning', coach: 'Maya Kapoor', location: 'Northstar Arena · Court 2', status: 'Next up', variant: 'info' as const },
  { day: 'Friday', date: '21 Aug', time: '5:00 PM - 6:30 PM', title: 'Technical training', coach: 'Daniel Thomas', location: 'Northstar Arena · Pitch 1', status: 'Scheduled', variant: 'neutral' as const },
  { day: 'Sunday', date: '23 Aug', time: '10:00 AM - 12:00 PM', title: 'Team practice', coach: 'Maya Kapoor', location: 'Northstar Arena · Main pitch', status: 'Scheduled', variant: 'neutral' as const },
  { day: 'Tuesday', date: '25 Aug', time: '4:30 PM - 6:00 PM', title: 'Speed & agility', coach: 'Daniel Thomas', location: 'Northstar Arena · Court 1', status: 'Scheduled', variant: 'neutral' as const },
]

const weekOverview = [
  { day: 'Thu', date: '20', active: true },
  { day: 'Fri', date: '21', active: false },
  { day: 'Sat', date: '22', active: false },
  { day: 'Sun', date: '23', active: false },
  { day: 'Mon', date: '24', active: false },
  { day: 'Tue', date: '25', active: false },
  { day: 'Wed', date: '26', active: false },
]

function StudentSchedulePage() {
  return (
    <AppShell navigationItems={roleNavigation.student.items} topbarTitle="Student / Parent">
      <PageHeader title="Schedule" description="Your upcoming academy training sessions." />

      <div className="mt-6 grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
        <Card className="border-profieldy-blue/20 bg-profieldy-blue-light/50">
          <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-wide text-profieldy-blue">Next session</p><h2 className="mt-2 text-xl font-bold text-text-primary">Strength & conditioning</h2><p className="mt-2 text-sm text-text-secondary">Today · 4:30 PM - 6:00 PM</p></div><Badge variant="info">In 3 hours</Badge></div>
          <div className="mt-6 space-y-3 border-t border-profieldy-blue/15 pt-5 text-sm text-text-secondary"><p className="flex items-center gap-2"><UserRound aria-hidden="true" className="size-4 text-profieldy-blue" /> Coach Maya Kapoor</p><p className="flex items-center gap-2"><MapPin aria-hidden="true" className="size-4 text-profieldy-blue" /> Northstar Arena · Court 2</p></div>
        </Card>

        <Card>
          <div className="flex items-start justify-between gap-4"><div><h2 className="font-semibold text-text-primary">This week</h2><p className="mt-1 text-sm text-text-secondary">20 - 26 August 2026</p></div><CalendarDays aria-hidden="true" className="size-5 text-profieldy-pink" /></div>
          <div className="mt-6 grid grid-cols-7 gap-1.5 sm:gap-2">
            {weekOverview.map((item) => (
              <div key={item.day} className={`rounded-md px-1 py-2 text-center ${item.active ? 'bg-profieldy-blue text-white' : 'bg-background text-text-secondary'}`} aria-current={item.active ? 'date' : undefined}><p className="text-[11px] font-medium">{item.day}</p><p className="mt-1 text-sm font-bold">{item.date}</p></div>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-2 text-xs text-text-secondary"><Dumbbell aria-hidden="true" className="size-4 text-profieldy-pink" /> 4 training sessions scheduled</div>
        </Card>
      </div>

      <Card className="mt-6">
        <div className="flex items-start justify-between gap-4"><div><h2 className="font-semibold text-text-primary">Upcoming sessions</h2><p className="mt-1 text-sm text-text-secondary">Keep your training plan in view.</p></div><Clock3 aria-hidden="true" className="size-5 text-profieldy-blue" /></div>
        <div className="mt-6 divide-y divide-border">
          {sessions.map((session) => (
            <div key={`${session.date}-${session.title}`} className="flex flex-col gap-4 py-5 first:pt-0 lg:flex-row lg:items-center">
              <div className="flex w-28 shrink-0 items-center gap-3"><div className="text-center"><p className="text-xs font-semibold uppercase tracking-wide text-text-muted">{session.day}</p><p className="mt-1 text-lg font-bold text-text-primary">{session.date}</p></div><div className="h-9 w-px bg-border lg:hidden" /></div>
              <div className="min-w-0 flex-1"><p className="text-sm font-semibold text-text-primary">{session.title}</p><div className="mt-2 flex flex-col gap-1 text-xs text-text-secondary sm:flex-row sm:gap-4"><span className="flex items-center gap-1.5"><Clock3 aria-hidden="true" className="size-3.5" /> {session.time}</span><span className="flex items-center gap-1.5"><UserRound aria-hidden="true" className="size-3.5" /> {session.coach}</span><span className="flex items-center gap-1.5"><MapPin aria-hidden="true" className="size-3.5" /> {session.location}</span></div></div>
              <Badge variant={session.variant} className="w-fit">{session.status}</Badge>
            </div>
          ))}
        </div>
      </Card>

      <Card className="mt-6">
        <div className="flex items-start gap-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-profieldy-pink-light text-profieldy-pink"><Dumbbell aria-hidden="true" className="size-4" /></span><div><h2 className="font-semibold text-text-primary">Training reminder</h2><p className="mt-1 text-sm leading-6 text-text-secondary">Bring your water bottle, boots, and academy kit. Arrive 15 minutes early for a focused warm-up.</p></div></div>
      </Card>
    </AppShell>
  )
}

export default StudentSchedulePage
