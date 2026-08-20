import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from './AuthLayout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'

function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirmation, setConfirmation] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [complete, setComplete] = useState(false)
  const passwordError = submitted && !password ? 'New password is required.' : undefined
  const confirmationError = submitted && !confirmation ? 'Please confirm your password.' : submitted && password !== confirmation ? 'Passwords do not match.' : undefined

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    if (password && confirmation && password === confirmation) setComplete(true)
  }

  return (
    <AuthLayout eyebrow="Account recovery" title="Create a new password" description="Set a new password to complete this prototype flow.">
      <Card className="p-6 sm:p-7">
        {complete ? (
          <div role="status" className="space-y-4"><Badge variant="success">Password updated</Badge><p className="text-sm leading-6 text-text-secondary">Your mock password reset is complete. No password was saved.</p><Link to="/login" className="inline-flex min-h-10 items-center justify-center rounded-md bg-profieldy-blue px-4 py-2 text-sm font-semibold text-white hover:bg-profieldy-blue-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-profieldy-blue">Return to login</Link></div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <Input label="New password" name="password" type="password" autoComplete="new-password" placeholder="Enter a new password" value={password} onChange={(event) => setPassword(event.target.value)} error={passwordError} />
            <Input label="Confirm new password" name="confirmation" type="password" autoComplete="new-password" placeholder="Re-enter your password" value={confirmation} onChange={(event) => setConfirmation(event.target.value)} error={confirmationError} />
            <Button type="submit" className="w-full">Update password</Button>
          </form>
        )}
      </Card>
      {!complete && <Link to="/login" className="mt-5 block text-center text-sm font-semibold text-profieldy-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-profieldy-blue">Back to login</Link>}
    </AuthLayout>
  )
}

export default ResetPasswordPage
