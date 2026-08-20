import { CalendarDays, Heart, MessageCircle, MoreHorizontal, Users } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import { roleNavigation } from '../app/navigation'
import Avatar from '../components/ui/Avatar'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'

const posts = [
  { author: 'Northstar Academy', role: 'Academy office', time: '1 hour ago', badge: 'Announcement', variant: 'info' as const, content: 'All coaching staff are invited to the monthly development meeting on Monday at 9:00 AM in the staff room.', likes: 16, comments: 5 },
  { author: 'Maya Rao', role: 'Football performance coach', time: 'Yesterday', badge: 'Staff update', variant: 'success' as const, content: 'The U16 group will work on scanning and decision making this week. Please reinforce the same language across each training block.', likes: 12, comments: 3 },
  { author: 'Daniel Thomas', role: 'Technical coach', time: '2 days ago', badge: 'Training reminder', variant: 'warning' as const, content: 'Equipment reminder: agility ladders and reaction cones are set up in the equipment bay before Thursday evening sessions.', likes: 9, comments: 2 },
  { author: 'Northstar Academy', role: 'Academy office', time: '4 days ago', badge: 'Event notice', variant: 'neutral' as const, content: 'Family fitness morning takes place on 30 August. Coaches supporting the event should confirm their arrival by Friday.', likes: 21, comments: 6 },
]

function CoachCommunityPage() {
  return (
    <AppShell navigationItems={roleNavigation.coach.items} topbarTitle="Coach">
      <PageHeader title="Community" description="Stay connected with the academy coaching community." />

      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.34fr]">
        <main aria-label="Coach academy community feed" className="min-w-0 space-y-4">
          <Card className="border-dashed"><div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-sm font-semibold text-text-primary">Share an update</p><p className="mt-1 text-sm text-text-secondary">Posting is not available in prototype mode.</p></div><Button disabled variant="outline" aria-label="Share an update unavailable in prototype mode">Share update</Button></div></Card>
          {posts.map((post) => <Card key={`${post.author}-${post.time}`}><div className="flex items-start gap-3"><Avatar name={post.author} size="md" /><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><p className="text-sm font-semibold text-text-primary">{post.author}</p><Badge variant={post.variant}>{post.badge}</Badge></div><p className="mt-1 text-xs text-text-secondary">{post.role} · {post.time}</p></div><button type="button" disabled aria-label={`More options for ${post.author}`} className="rounded-md p-1 text-text-muted disabled:cursor-default"><MoreHorizontal aria-hidden="true" className="size-5" /></button></div><p className="mt-5 text-sm leading-6 text-text-secondary">{post.content}</p><div className="mt-5 flex items-center gap-5 border-t border-border pt-4 text-xs text-text-secondary"><span className="inline-flex items-center gap-1.5"><Heart aria-hidden="true" className="size-4" /> {post.likes}</span><span className="inline-flex items-center gap-1.5"><MessageCircle aria-hidden="true" className="size-4" /> {post.comments} comments</span></div></Card>)}
        </main>

        <aside className="space-y-4"><Card><div className="flex items-start gap-3"><Users aria-hidden="true" className="size-5 text-profieldy-blue" /><div><h2 className="font-semibold text-text-primary">Staff pulse</h2><p className="mt-1 text-sm text-text-secondary">This week at the academy</p></div></div><div className="mt-5 space-y-4"><div><p className="text-2xl font-bold text-profieldy-blue">18</p><p className="mt-1 text-xs text-text-secondary">active coaching staff</p></div><div className="border-t border-border pt-4"><p className="text-2xl font-bold text-profieldy-pink">7</p><p className="mt-1 text-xs text-text-secondary">academy updates shared</p></div></div></Card><Card className="bg-profieldy-blue-light"><div className="flex items-start gap-3"><CalendarDays aria-hidden="true" className="size-4 text-profieldy-blue" /><div><h2 className="font-semibold text-text-primary">Community note</h2><p className="mt-2 text-sm leading-6 text-text-secondary">This feed is a read-only preview. Posting, reactions, and comments are unavailable for now.</p></div></div></Card></aside>
      </div>
    </AppShell>
  )
}

export default CoachCommunityPage
