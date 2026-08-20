import type { HTMLAttributes, ReactNode } from 'react'

interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

function PageContainer({ children, className = '', ...props }: PageContainerProps) {
  return <div className={`mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 ${className}`} {...props}>{children}</div>
}

export default PageContainer