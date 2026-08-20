import {
  BarChart3,
  CalendarDays,
  ClipboardCheck,
  CreditCard,
  FileText,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  Settings,
  TrendingUp,
  UserRound,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type UserRole = 'student' | 'coach' | 'admin'

export interface NavigationItem {
  label: string
  href: string
  icon: LucideIcon
}

export interface RoleNavigation {
  label: string
  description: string
  items: NavigationItem[]
}

export const roleNavigation: Record<UserRole, RoleNavigation> = {
  student: {
    label: 'Student / Parent',
    description: 'Your academy information in one place.',
    items: [
      { label: 'Overview', href: '/student', icon: LayoutDashboard },
      { label: 'Profile', href: '/student/profile', icon: UserRound },
      { label: 'Performance', href: '/student/performance', icon: TrendingUp },
      { label: 'Reports', href: '/student/reports', icon: FileText },
      { label: 'Fees', href: '/student/fees', icon: CreditCard },
      { label: 'Schedule', href: '/student/schedule', icon: CalendarDays },
      { label: 'Community', href: '/student/community', icon: MessageSquare },
    ],
  },
  coach: {
    label: 'Coach',
    description: 'The tools you need to support your athletes.',
    items: [
      { label: 'Overview', href: '/coach', icon: LayoutDashboard },
      { label: 'Profile', href: '/coach/profile', icon: UserRound },
      { label: 'Students', href: '/coach/students', icon: Users },
      { label: 'Attendance', href: '/coach/attendance', icon: ClipboardCheck },
      { label: 'Performance', href: '/coach/performance', icon: TrendingUp },
      { label: 'Reports', href: '/coach/reports', icon: FileText },
      { label: 'Schedule', href: '/coach/schedule', icon: CalendarDays },
      { label: 'Community', href: '/coach/community', icon: MessageSquare },
    ],
  },
  admin: {
    label: 'Admin / Owner',
    description: 'Manage your academy from a single workspace.',
    items: [
      { label: 'Overview', href: '/admin', icon: LayoutDashboard },
      { label: 'Academy', href: '/admin/academy', icon: GraduationCap },
      { label: 'Students', href: '/admin/students', icon: Users },
      { label: 'Coaches', href: '/admin/coaches', icon: UserRound },
      { label: 'Attendance', href: '/admin/attendance', icon: ClipboardCheck },
      { label: 'Performance', href: '/admin/performance', icon: TrendingUp },
      { label: 'Reports', href: '/admin/reports', icon: FileText },
      { label: 'Fees', href: '/admin/fees', icon: CreditCard },
      { label: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
      { label: 'Schedule', href: '/admin/schedule', icon: CalendarDays },
      { label: 'Community', href: '/admin/community', icon: MessageSquare },
      { label: 'Settings', href: '/admin/settings', icon: Settings },
    ],
  },
}

export function getNavigationItem(role: UserRole, path: string) {
  return roleNavigation[role].items.find((item) => item.href === path)
}
