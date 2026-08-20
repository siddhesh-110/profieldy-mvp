import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from './AuthLayout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'

function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [sent, setSent] = useState(false)
  const emailError = submitted && !email.trim() ? 'Email is required.' : undefined

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    if (email.trim()) setSent(true)
  }

  return (
    <AuthLayout eyebrow="Account recovery" title="Reset your password" description="Enter your email to preview the password reset flow.">
      <Card className="p-6 sm:p-7">
        {sent ? (
          <div role="status" className="space-y-4">
            <Badge variant="success">Mock reset link ready</Badge>
            <p className="text-sm leading-6 text-text-secondary">In a real product, a reset link would be sent to <span className="font-semibold text-text-primary">{email}</span>. No email was sent in prototype mode.</p>
            <Link to="/reset-password" className="inline-flex min-h-10 items-center justify-center rounded-md bg-profieldy-blue px-4 py-2 text-sm font-semibold text-white hover:bg-profieldy-blue-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-profieldy-blue">Continue to reset password</Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <Input label="Email address" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} error={emailError} helperText="Use any email for this prototype flow." />
            <Button type="submit" className="w-full">Send reset link</Button>
          </form>
        )}
      </Card>
      <Link to="/login" className="mt-5 block text-center text-sm font-semibold text-profieldy-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-profieldy-blue">Back to login</Link>
    </AuthLayout>
  )
}

export default ForgotPasswordPage
