import { ArrowUpRight, CheckCircle2, ClipboardCheck, Users } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import { roleNavigation } from '../app/navigation'
import Avatar from '../components/ui/Avatar'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'
import StatCard from '../components/ui/StatCard'

const students = [
  { name: 'Arjun Mehta', program: 'U16 Football · Intermediate', coach: 'Maya Rao', attendance: 92, fee: 'Paid', feeVariant: 'success' as const },
  { name: 'Riya Sharma', program: 'U16 Football · Advanced', coach: 'Maya Rao', attendance: 96, fee: 'Paid', feeVariant: 'success' as const },
  { name: 'Kabir Singh', program: 'U14 Football · Development', coach: 'Daniel Thomas', attendance: 78, fee: 'Due soon', feeVariant: 'warning' as const },
  { name: 'Aanya Nair', program: 'U14 Football · Development', coach: 'Daniel Thomas', attendance: 89, fee: 'Paid', feeVariant: 'success' as const },
  { name: 'Meera Patel', program: 'U16 Football · Intermediate', coach: 'Maya Rao', attendance: 74, fee: 'Overdue', feeVariant: 'danger' as const },
]

function AdminStudentsPage() {
  return (
    <AppShell navigationItems={roleNavigation.admin.items} topbarTitle="Admin / Owner">
      <PageHeader title="Students" description="A clear overview of students across the academy." />
      <div className="mt-6 grid gap-4 sm:grid-cols-3"><StatCard title="Total students" value="248" change="12 enrolled this month" trend="up" icon={Users} /><StatCard title="Active students" value="236" change="95% of total students" trend="up" icon={CheckCircle2} /><StatCard title="Average attendance" value="91%" change="+3% from last month" trend="up" icon={ClipboardCheck} /></div>
      <Card className="mt-6"><div className="flex items-start justify-between gap-4"><div><h2 className="font-semibold text-text-primary">Student directory</h2><p className="mt-1 text-sm text-text-secondary">Static academy roster preview</p></div><Button disabled variant="outline" aria-label="View student details unavailable in prototype mode">View details</Button></div><div className="mt-6 overflow-x-auto"><table className="w-full min-w-180 border-collapse text-left"><caption className="sr-only">Academy student directory</caption><thead><tr className="border-b border-border text-xs uppercase tracking-wide text-text-muted"><th scope="col" className="pb-3 pr-4 font-medium">Student</th><th scope="col" className="pb-3 pr-4 font-medium">Program</th><th scope="col" className="pb-3 pr-4 font-medium">Coach assigned</th><th scope="col" className="pb-3 pr-4 font-medium">Attendance</th><th scope="col" className="pb-3 font-medium">Fee status</th></tr></thead><tbody className="divide-y divide-border">{students.map((student) => <tr key={student.name}><th scope="row" className="py-4 pr-4 font-normal"><div className="flex items-center gap-3"><Avatar name={student.name} size="sm" /><span className="text-sm font-semibold text-text-primary">{student.name}</span></div></th><td className="py-4 pr-4 text-sm text-text-secondary">{student.program}</td><td className="py-4 pr-4 text-sm text-text-secondary">{student.coach}</td><td className="py-4 pr-4"><div className="flex items-center gap-3"><div className="h-2 w-20 overflow-hidden rounded-full bg-slate-100" role="progressbar" aria-label={`${student.name} attendance`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={student.attendance}><div className={`h-full rounded-full ${student.attendance < 80 ? 'bg-warning' : 'bg-profieldy-blue'}`} style={{ width: `${student.attendance}%` }} /></div><span className="text-sm font-semibold tabular-nums text-text-primary">{student.attendance}%</span></div></td><td className="py-4"><Badge variant={student.feeVariant}>{student.fee}</Badge></td></tr>)}</tbody></table></div><p className="mt-4 flex items-center gap-1 text-xs text-text-secondary"><ArrowUpRight aria-hidden="true" className="size-3.5" /> Student details and directory actions are unavailable in prototype mode.</p></Card>
    </AppShell>
  )
}

export default AdminStudentsPage
