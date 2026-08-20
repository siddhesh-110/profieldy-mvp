import { Award, CalendarCheck, ChevronRight, MessageSquareText, Target, TrendingUp } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import { roleNavigation } from '../app/navigation'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'
import StatCard from '../components/ui/StatCard'

const skills = [
  { label: 'Endurance', value: 76, tone: 'bg-profieldy-blue' },
  { label: 'Technical skill', value: 81, tone: 'bg-profieldy-pink' },
  { label: 'Speed & agility', value: 88, tone: 'bg-success' },
  { label: 'Teamwork', value: 85, tone: 'bg-info' },
]

function StudentPerformancePage() {
  return (
    <AppShell navigationItems={roleNavigation.student.items} topbarTitle="Student / Parent">
      <PageHeader title="Performance" description="A snapshot of your recent training progress." />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Overall score" value="84 / 100" change="+8 points this term" trend="up" icon={TrendingUp} />
        <StatCard title="Sessions completed" value="18" change="92% attendance" trend="up" icon={CalendarCheck} />
        <StatCard title="Skills improving" value="4 of 5" change="On track" trend="neutral" icon={Target} />
        <StatCard title="Current level" value="Intermediate" change="Steady progress" trend="neutral" icon={Award} />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <Card>
          <div className="flex items-start justify-between gap-4">
            <div><h2 className="font-semibold text-text-primary">Skill development</h2><p className="mt-1 text-sm text-text-secondary">Latest assessment across key areas</p></div>
            <TrendingUp aria-hidden="true" className="size-5 text-profieldy-blue" />
          </div>
          <div className="mt-7 space-y-6">
            {skills.map(({ label, value, tone }) => (
              <div key={label}>
                <div className="flex items-center justify-between gap-4 text-sm"><span className="font-medium text-text-primary">{label}</span><span className="font-semibold tabular-nums text-text-secondary">{value}%</span></div>
                <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100" role="progressbar" aria-label={`${label} progress`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={value}><div className={`h-full rounded-full ${tone}`} style={{ width: `${value}%` }} /></div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between gap-4"><div><h2 className="font-semibold text-text-primary">Recent assessment</h2><p className="mt-1 text-sm text-text-secondary">15 May 2026 · Coach Maya</p></div><Badge variant="success">Strong progress</Badge></div>
          <div className="mt-6 rounded-md bg-profieldy-blue-light p-4"><p className="text-sm font-semibold text-text-primary">Technical training review</p><p className="mt-2 text-sm leading-6 text-text-secondary">Arjun showed confident ball control and quicker decisions under pressure. Keep building consistency with the first touch.</p></div>
          <div className="mt-5 flex items-center justify-between border-t border-border pt-4"><span className="text-sm text-text-secondary">Assessment score</span><span className="text-lg font-bold text-profieldy-blue">84 / 100</span></div>
        </Card>
      </div>

      <Card className="mt-6">
        <div className="flex items-start gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-profieldy-pink-light text-profieldy-pink"><MessageSquareText aria-hidden="true" className="size-4" /></span>
          <div className="min-w-0"><h2 className="font-semibold text-text-primary">Coach feedback</h2><p className="mt-1 text-sm text-text-secondary">A note from your latest review</p></div>
        </div>
        <blockquote className="mt-5 border-l-2 border-profieldy-pink pl-4 text-sm leading-6 text-text-secondary">“Arjun brings excellent energy to every session and is becoming more composed with the ball. The next step is to scan earlier before receiving possession.”</blockquote>
        <div className="mt-5 flex items-center justify-between gap-4 border-t border-border pt-4"><span className="text-xs text-text-muted">Coach Maya · 15 May 2026</span><span className="inline-flex items-center gap-1 text-sm font-semibold text-profieldy-blue">Next review <ChevronRight aria-hidden="true" className="size-4" /></span></div>
      </Card>
    </AppShell>
  )
}

export default StudentPerformancePage
