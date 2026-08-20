import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from './AuthLayout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import type { UserRole } from '../app/navigation'

const roles: Array<{ value: UserRole; label: string; description: string; path: string }> = [
  { value: 'student', label: 'Student / Parent', description: 'View progress, reports, and schedule.', path: '/student' },
  { value: 'coach', label: 'Coach', description: 'Manage sessions and athlete progress.', path: '/coach' },
  { value: 'admin', label: 'Admin / Owner', description: 'Review your academy at a glance.', path: '/admin' },
]

function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<UserRole | ''>('')
  const [rememberMe, setRememberMe] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const emailError = submitted && !email.trim() ? 'Email is required.' : undefined
  const passwordError = submitted && !password ? 'Password is required.' : undefined
  const roleError = submitted && !role ? 'Select a workspace to continue.' : undefined

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    if (!email.trim() || !password || !role) return
    const selectedRole = roles.find((item) => item.value === role)
    if (selectedRole) navigate(selectedRole.path)
  }

  return (
    <AuthLayout eyebrow="Welcome back" title="Sign in to your workspace" description="Choose a prototype role to explore the PROFIELDY experience.">
      <Card className="p-6 sm:p-7">
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <Input label="Email address" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} error={emailError} />
          <Input label="Password" name="password" type="password" autoComplete="current-password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} error={passwordError} />

          <div className="flex items-center justify-between gap-4 text-sm">
            <label className="flex items-center gap-2 text-text-secondary"><input type="checkbox" checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)} className="size-4 rounded border-border text-profieldy-blue focus:ring-profieldy-blue" />Remember me</label>
            <Link to="/forgot-password" className="font-semibold text-profieldy-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-profieldy-blue">Forgot password?</Link>
          </div>

          <fieldset className="space-y-3">
            <legend className="text-sm font-medium text-text-primary">Choose a prototype role</legend>
            <div className="space-y-2">
              {roles.map((item) => <label key={item.value} className={`flex cursor-pointer items-start gap-3 rounded-md border p-3 transition-colors ${role === item.value ? 'border-profieldy-blue bg-profieldy-blue-light' : 'border-border hover:bg-background'}`}><input type="radio" name="role" value={item.value} checked={role === item.value} onChange={() => setRole(item.value)} className="mt-0.5 size-4 border-border text-profieldy-blue focus:ring-profieldy-blue" /><span><span className="block text-sm font-semibold text-text-primary">{item.label}</span><span className="mt-0.5 block text-xs text-text-secondary">{item.description}</span></span></label>)}
            </div>
            {roleError && <p className="text-xs text-danger" role="alert">{roleError}</p>}
          </fieldset>

          <Button type="submit" className="w-full">Sign in to prototype</Button>
        </form>
      </Card>
      <p className="mt-4 text-center text-xs text-text-muted">No account or real credentials are required in prototype mode.</p>
    </AuthLayout>
  )
}

export default LoginPage
