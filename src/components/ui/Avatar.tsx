import type { ImgHTMLAttributes } from 'react'

interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt'> {
  name: string
  alt?: string
  size?: 'sm' | 'md' | 'lg'
  status?: 'online' | 'offline' | 'away'
}

const sizeClasses = { sm: 'size-8 text-xs', md: 'size-10 text-sm', lg: 'size-14 text-lg' }
const statusClasses = { online: 'bg-success', offline: 'bg-text-muted', away: 'bg-warning' }

function Avatar({ name, alt = name, size = 'md', status, src, className = '', ...props }: AvatarProps) {
  const initials = name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase()

  return (
    <span className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-profieldy-blue-light font-semibold text-profieldy-blue ${sizeClasses[size]} ${className}`}>
      {src ? <img src={src} alt={alt} className="size-full object-cover" {...props} /> : <span aria-hidden="true">{initials}</span>}
      {status && <span aria-label={status} className={`absolute right-0 bottom-0 size-2.5 rounded-full border-2 border-surface ${statusClasses[status]}`} />}
    </span>
  )
}

export default Avatar