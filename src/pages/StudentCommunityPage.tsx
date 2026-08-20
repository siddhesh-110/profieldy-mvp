import { CalendarDays, Heart, MessageCircle, Megaphone, MoreHorizontal, PartyPopper } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import { roleNavigation } from '../app/navigation'
import Avatar from '../components/ui/Avatar'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'

const posts = [
  { author: 'Maya Kapoor', role: 'Lead football coach', time: '2 hours ago', name: 'Academy training team', icon: Megaphone, badge: 'Announcement', badgeVariant: 'info' as const, content: 'Saturday team practice will start at 10:00 AM on the main pitch. Please arrive 15 minutes early for warm-ups.', likes: 18, comments: 4 },
  { author: 'Northstar Academy', role: 'Academy office', time: 'Yesterday', name: 'Northstar Academy', icon: PartyPopper, badge: 'Academy update', badgeVariant: 'success' as const, content: 'Congratulations to all athletes who represented Northstar at this weekend’s inter-academy festival. Your energy and sportsmanship made us proud.', likes: 32, comments: 7 },
  { author: 'Daniel Thomas', role: 'Technical coach', time: '2 days ago', name: 'Coach Daniel', icon: CalendarDays, badge: 'Training highlight', badgeVariant: 'warning' as const, content: 'This week’s focus is scanning before receiving the ball. Try the habit in every small-sided game and share what you notice with your coach.', likes: 14, comments: 3 },
  { author: 'Northstar Academy', role: 'Academy office', time: '5 days ago', name: 'Northstar Academy', icon: Megaphone, badge: 'Event reminder', badgeVariant: 'neutral' as const, content: 'Family fitness morning is coming up on 30 August. Parents and siblings are welcome to join the academy community for a fun session.', likes: 26, comments: 5 },
]

function StudentCommunityPage() {
  return (
    <AppShell navigationItems={roleNavigation.student.items} topbarTitle="Student / Parent">
      <PageHeader title="Community" description="Stay connected with your academy community." />

      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.34fr]">
        <main aria-label="Academy community feed" className="min-w-0 space-y-4">
          <Card className="border-dashed bg-surface">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-sm font-semibold text-text-primary">Share an update</p><p className="mt-1 text-sm text-text-secondary">Posting is not available in prototype mode.</p></div><Button disabled variant="outline" aria-label="Share an update unavailable in prototype mode">Share an update</Button></div>
          </Card>

          {posts.map((post) => {
            const Icon = post.icon
            return (
              <Card key={`${post.author}-${post.time}`}>
                <div className="flex items-start gap-3"><Avatar name={post.author} size="md" /><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><p className="text-sm font-semibold text-text-primary">{post.name}</p><Badge variant={post.badgeVariant}>{post.badge}</Badge></div><p className="mt-1 text-xs text-text-secondary">{post.role} · {post.time}</p></div><button type="button" disabled aria-label={`More options for ${post.name}`} className="rounded-md p-1 text-text-muted disabled:cursor-default"><MoreHorizontal aria-hidden="true" className="size-5" /></button></div>
                <div className="mt-5 flex items-start gap-3"><Icon aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-profieldy-blue" /><p className="text-sm leading-6 text-text-secondary">{post.content}</p></div>
                <div className="mt-5 flex items-center gap-5 border-t border-border pt-4 text-xs text-text-secondary"><span className="inline-flex items-center gap-1.5"><Heart aria-hidden="true" className="size-4" /> {post.likes}</span><span className="inline-flex items-center gap-1.5"><MessageCircle aria-hidden="true" className="size-4" /> {post.comments} comments</span></div>
              </Card>
            )
          })}
        </main>

        <aside className="space-y-4">
          <Card>
            <h2 className="font-semibold text-text-primary">Academy pulse</h2>
            <p className="mt-1 text-sm text-text-secondary">What is happening this week</p>
            <div className="mt-5 space-y-4"><div><p className="text-2xl font-bold text-profieldy-blue">128</p><p className="mt-1 text-xs text-text-secondary">active academy members</p></div><div className="border-t border-border pt-4"><p className="text-2xl font-bold text-profieldy-pink">6</p><p className="mt-1 text-xs text-text-secondary">training events this week</p></div></div>
          </Card>
          <Card className="bg-profieldy-blue-light"><h2 className="font-semibold text-text-primary">Community note</h2><p className="mt-2 text-sm leading-6 text-text-secondary">This feed is a read-only preview. Reactions, comments, and posting are unavailable for now.</p></Card>
        </aside>
      </div>
    </AppShell>
  )
}

export default StudentCommunityPage
