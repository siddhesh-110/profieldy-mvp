import { forwardRef, type InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, helperText, id, className = '', ...props },
  ref,
) {
  const inputId = id || props.name
  const descriptionId = error ? `${inputId}-error` : `${inputId}-helper`

  return (
    <div className="space-y-1.5">
      {label && <label htmlFor={inputId} className="block text-sm font-medium text-text-primary">{label}</label>}
      <input
        ref={ref}
        id={inputId}
        className={`min-h-10 w-full rounded-md border bg-surface px-3 py-2 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-profieldy-blue focus:ring-2 focus:ring-profieldy-blue/20 disabled:cursor-not-allowed disabled:bg-background ${error ? 'border-danger' : 'border-border'} ${className}`}
        aria-invalid={Boolean(error)}
        aria-describedby={descriptionId}
        {...props}
      />
      {(error || helperText) && <p id={descriptionId} className={`text-xs ${error ? 'text-danger' : 'text-text-secondary'}`}>{error || helperText}</p>}
    </div>
  )
})

export default Input