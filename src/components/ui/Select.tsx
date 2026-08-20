import { forwardRef, type SelectHTMLAttributes } from 'react'

interface SelectOption {
  label: string
  value: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helperText?: string
  options: SelectOption[]
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, error, helperText, options, id, className = '', ...props },
  ref,
) {
  const selectId = id || props.name
  const descriptionId = error ? `${selectId}-error` : `${selectId}-helper`

  return (
    <div className="space-y-1.5">
      {label && <label htmlFor={selectId} className="block text-sm font-medium text-text-primary">{label}</label>}
      <select
        ref={ref}
        id={selectId}
        className={`min-h-10 w-full rounded-md border bg-surface px-3 py-2 text-sm text-text-primary outline-none transition focus:border-profieldy-blue focus:ring-2 focus:ring-profieldy-blue/20 disabled:cursor-not-allowed disabled:bg-background ${error ? 'border-danger' : 'border-border'} ${className}`}
        aria-invalid={Boolean(error)}
        aria-describedby={descriptionId}
        {...props}
      >
        {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
      {(error || helperText) && <p id={descriptionId} className={`text-xs ${error ? 'text-danger' : 'text-text-secondary'}`}>{error || helperText}</p>}
    </div>
  )
})

export default Select