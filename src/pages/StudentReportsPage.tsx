import { CalendarDays, ChevronRight, FileText, MessageSquareText, UserRound } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import { roleNavigation } from '../app/navigation'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'

const previousReports = [
  { title: 'Term 1 development report', period: 'January - March 2026', date: '28 March 2026', status: 'Reviewed', variant: 'success' as const },
  { title: 'End-of-year progress report', period: 'October - December 2025', date: '18 December 2025', status: 'Reviewed', variant: 'success' as const },
  { title: 'Term 2 development report', period: 'July - September 2025', date: '30 September 2025', status: 'Archived', variant: 'neutral' as const },
]

function StudentReportsPage() {
  return (
    <AppShell navigationItems={roleNavigation.student.items} topbarTitle="Student / Parent">
      <PageHeader title="Reports" description="Your latest development reviews from the academy." />

      <Card className="mt-6 overflow-hidden p-0">
        <div className="bg-profieldy-blue px-5 py-6 text-white sm:px-8 sm:py-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-white/15"><FileText aria-hidden="true" className="size-5" /></span>
              <div><p className="text-xs font-semibold uppercase tracking-wide text-blue-100">Latest report</p><h2 className="mt-2 text-xl font-bold">Term 2 development report</h2><p className="mt-2 text-sm text-blue-100">April - June 2026 · Issued 20 May 2026</p></div>
            </div>
            <Badge variant="success" className="w-fit bg-white/90">Strong progress</Badge>
          </div>
        </div>
        <div className="grid gap-6 p-5 sm:grid-cols-3 sm:p-8">
          <div><p className="text-xs font-medium uppercase tracking-wide text-text-muted">Coach</p><p className="mt-2 flex items-center gap-2 text-sm font-semibold text-text-primary"><UserRound aria-hidden="true" className="size-4 text-profieldy-pink" /> Maya Kapoor</p></div>
          <div><p className="text-xs font-medium uppercase tracking-wide text-text-muted">Overall assessment</p><p className="mt-2 text-sm font-semibold text-text-primary">Exceeding expectations</p></div>
          <div className="sm:text-right"><Button variant="outline" className="w-full sm:w-auto" aria-label="View latest report prototype">View report <ChevronRight aria-hidden="true" className="size-4" /></Button><p className="mt-2 text-xs text-text-muted">Preview control only</p></div>
        </div>
      </Card>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <div className="flex items-start justify-between gap-4"><div><h2 className="font-semibold text-text-primary">Previous reports</h2><p className="mt-1 text-sm text-text-secondary">Your academy report history</p></div><CalendarDays aria-hidden="true" className="size-5 text-profieldy-blue" /></div>
          <div className="mt-6 divide-y divide-border">
            {previousReports.map((report) => (
              <div key={report.title} className="flex flex-col gap-3 py-4 first:pt-0 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0"><p className="text-sm font-semibold text-text-primary">{report.title}</p><p className="mt-1 text-xs text-text-secondary">{report.period} · {report.date}</p></div>
                <Badge variant={report.variant} className="w-fit">{report.status}</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-start gap-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-profieldy-pink-light text-profieldy-pink"><MessageSquareText aria-hidden="true" className="size-4" /></span><div><h2 className="font-semibold text-text-primary">Report highlights</h2><p className="mt-1 text-sm text-text-secondary">Coach comments from the latest review</p></div></div>
          <blockquote className="mt-6 border-l-2 border-profieldy-pink pl-4 text-sm leading-6 text-text-secondary">“Arjun has made noticeable progress in speed and technical confidence. He contributes positively to team sessions and responds well to feedback.”</blockquote>
          <p className="mt-5 text-xs font-medium text-text-muted">Maya Kapoor · Lead football coach</p>
        </Card>
      </div>
    </AppShell>
  )
}

export default StudentReportsPage
