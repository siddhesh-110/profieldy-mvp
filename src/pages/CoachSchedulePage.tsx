import { CalendarDays, Clock3, MapPin, Users } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import { roleNavigation } from '../app/navigation'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'

const sessions = [
  { day: 'Today', date: '20 Aug', time: '4:30 PM - 6:00 PM', group: 'Junior performance group', location: 'Northstar Arena · Court 1', athletes: 12, status: 'Next up', variant: 'info' as const },
  { day: 'Today', date: '20 Aug', time: '6:00 PM - 7:30 PM', group: 'Advanced skills session', location: 'Northstar Arena · Court 2', athletes: 8, status: 'Scheduled', variant: 'neutral' as const },
  { day: 'Tomorrow', date: '21 Aug', time: '9:00 AM - 11:00 AM', group: 'Development assessment', location: 'Northstar Arena · Studio A', athletes: 6, status: 'Scheduled', variant: 'neutral' as const },
  { day: 'Saturday', date: '22 Aug', time: '10:00 AM - 12:00 PM', group: 'U16 team practice', location: 'Northstar Arena · Main pitch', athletes: 18, status: 'Scheduled', variant: 'neutral' as const },
]

const weekOverview = [
  { day: 'Thu', date: '20', sessions: 2, active: true },
  { day: 'Fri', date: '21', sessions: 1, active: false },
  { day: 'Sat', date: '22', sessions: 1, active: false },
  { day: 'Sun', date: '23', sessions: 0, active: false },
  { day: 'Mon', date: '24', sessions: 0, active: false },
  { day: 'Tue', date: '25', sessions: 0, active: false },
  { day: 'Wed', date: '26', sessions: 0, active: false },
]

function CoachSchedulePage() {
  return (
    <AppShell navigationItems={roleNavigation.coach.items} topbarTitle="Coach">
      <PageHeader title="Schedule" description="Your upcoming coaching sessions." />

      <div className="mt-6 grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
        <Card className="border-profieldy-blue/20 bg-profieldy-blue-light/50"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-wide text-profieldy-blue">Next session</p><h2 className="mt-2 text-xl font-bold text-text-primary">Junior performance group</h2><p className="mt-2 text-sm text-text-secondary">Today · 4:30 PM - 6:00 PM</p></div><Badge variant="info">In 2 hours</Badge></div><div className="mt-6 space-y-3 border-t border-profieldy-blue/15 pt-5 text-sm text-text-secondary"><p className="flex items-center gap-2"><MapPin aria-hidden="true" className="size-4 text-profieldy-blue" /> Northstar Arena · Court 1</p><p className="flex items-center gap-2"><Users aria-hidden="true" className="size-4 text-profieldy-blue" /> 12 athletes · U16 performance</p></div></Card>

        <Card><div className="flex items-start justify-between gap-4"><div><h2 className="font-semibold text-text-primary">This week</h2><p className="mt-1 text-sm text-text-secondary">20 - 26 August 2026</p></div><CalendarDays aria-hidden="true" className="size-5 text-profieldy-pink" /></div><div className="mt-6 grid grid-cols-7 gap-1.5 sm:gap-2">{weekOverview.map((item) => <div key={item.day} className={`rounded-md px-1 py-2 text-center ${item.active ? 'bg-profieldy-blue text-white' : 'bg-background text-text-secondary'}`} aria-current={item.active ? 'date' : undefined}><p className="text-[11px] font-medium">{item.day}</p><p className="mt-1 text-sm font-bold">{item.date}</p><p className="mt-1 text-[10px]">{item.sessions ? `${item.sessions} session${item.sessions > 1 ? 's' : ''}` : 'Open'}</p></div>)}</div></Card>
      </div>

      <Card className="mt-6"><div className="flex items-start justify-between gap-4"><div><h2 className="font-semibold text-text-primary">Upcoming sessions</h2><p className="mt-1 text-sm text-text-secondary">Your coaching plan for the week</p></div><Clock3 aria-hidden="true" className="size-5 text-profieldy-blue" /></div><div className="mt-6 divide-y divide-border">{sessions.map((session) => <div key={`${session.date}-${session.group}`} className="flex flex-col gap-4 py-5 first:pt-0 lg:flex-row lg:items-center"><div className="w-28 shrink-0"><p className="text-xs font-semibold uppercase tracking-wide text-text-muted">{session.day}</p><p className="mt-1 text-lg font-bold text-text-primary">{session.date}</p></div><div className="min-w-0 flex-1"><p className="text-sm font-semibold text-text-primary">{session.group}</p><div className="mt-2 flex flex-col gap-1 text-xs text-text-secondary sm:flex-row sm:gap-4"><span className="flex items-center gap-1.5"><Clock3 aria-hidden="true" className="size-3.5" /> {session.time}</span><span className="flex items-center gap-1.5"><MapPin aria-hidden="true" className="size-3.5" /> {session.location}</span><span className="flex items-center gap-1.5"><Users aria-hidden="true" className="size-3.5" /> {session.athletes} athletes</span></div></div><Badge variant={session.variant} className="w-fit">{session.status}</Badge></div>)}</div></Card>

      <Card className="mt-6"><div className="flex items-start gap-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-profieldy-pink-light text-profieldy-pink"><CalendarDays aria-hidden="true" className="size-4" /></span><div><h2 className="font-semibold text-text-primary">Coaching reminder</h2><p className="mt-1 text-sm leading-6 text-text-secondary">Review the group objectives before each session and have attendance ready when athletes arrive. Calendar editing is unavailable in prototype mode.</p></div></div></Card>
    </AppShell>
  )
}

export default CoachSchedulePage
