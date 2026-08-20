import { Award, ClipboardCheck, FileText, Lightbulb, Target, TrendingUp, Users } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import { roleNavigation } from '../app/navigation'
import Avatar from '../components/ui/Avatar'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'
import StatCard from '../components/ui/StatCard'

const performanceSnapshots = [
  { name: 'Riya Sharma', focus: 'Decision making', score: 91, status: 'Improving', variant: 'success' as const },
  { name: 'Arjun Mehta', focus: 'First touch', score: 84, status: 'Improving', variant: 'success' as const },
  { name: 'Aanya Nair', focus: 'Speed & agility', score: 80, status: 'On track', variant: 'info' as const },
  { name: 'Meera Patel', focus: 'Endurance', score: 76, status: 'Review due', variant: 'warning' as const },
  { name: 'Kabir Singh', focus: 'Ball control', score: 72, status: 'Needs support', variant: 'warning' as const },
]

function CoachPerformancePage() {
  return (
    <AppShell navigationItems={roleNavigation.coach.items} topbarTitle="Coach">
      <PageHeader title="Performance" description="Track athlete progress and upcoming review priorities." />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><StatCard title="Average score" value="81 / 100" change="+6 points this term" trend="up" icon={TrendingUp} /><StatCard title="Assessments completed" value="27" change="84% of assigned" trend="neutral" icon={ClipboardCheck} /><StatCard title="Athletes improving" value="24" change="75% of group" trend="up" icon={Users} /><StatCard title="Reviews due" value="5" change="Due this week" trend="neutral" icon={FileText} /></div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.36fr]">
        <Card>
          <div className="flex items-start justify-between gap-4"><div><h2 className="font-semibold text-text-primary">Athlete performance</h2><p className="mt-1 text-sm text-text-secondary">Latest snapshots across your assigned students</p></div><Target aria-hidden="true" className="size-5 text-profieldy-blue" /></div>
          <div className="mt-6 space-y-4">{performanceSnapshots.map((student) => <div key={student.name} className="flex flex-col gap-4 rounded-md border border-border p-4 sm:flex-row sm:items-center"><Avatar name={student.name} size="md" /><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><p className="text-sm font-semibold text-text-primary">{student.name}</p><Badge variant={student.variant}>{student.status}</Badge></div><p className="mt-1 text-xs text-text-secondary">Current focus: {student.focus}</p><div className="mt-3 flex items-center gap-3"><div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100" role="progressbar" aria-label={`${student.name} performance score`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={student.score}><div className={`h-full rounded-full ${student.score < 80 ? 'bg-warning' : 'bg-profieldy-blue'}`} style={{ width: `${student.score}%` }} /></div><span className="w-12 text-right text-sm font-bold tabular-nums text-text-primary">{student.score}%</span></div></div></div>)}</div>
        </Card>

        <Card className="border-profieldy-pink/20 bg-profieldy-pink-light/50"><div className="flex items-start gap-3"><Lightbulb aria-hidden="true" className="mt-0.5 size-5 text-profieldy-pink" /><div><h2 className="font-semibold text-text-primary">Coaching insight</h2><p className="mt-1 text-sm text-text-secondary">Next review priorities</p></div></div><p className="mt-6 text-sm leading-6 text-text-secondary">The group is progressing well in speed and decision making. Use the next two sessions to reinforce ball control for Kabir and build endurance consistency with Meera.</p><div className="mt-6 space-y-3 border-t border-profieldy-pink/15 pt-5"><div className="flex items-center gap-2 text-sm font-semibold text-text-primary"><Award aria-hidden="true" className="size-4 text-profieldy-pink" /> 3 athletes ready for stretch goals</div><div className="flex items-center gap-2 text-sm font-semibold text-text-primary"><FileText aria-hidden="true" className="size-4 text-profieldy-pink" /> 5 reviews to complete this week</div></div></Card>
      </div>
    </AppShell>
  )
}

export default CoachPerformancePage
