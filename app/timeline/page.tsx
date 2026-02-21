const events = [
  {
    year: "2025",
    items: [
      { date: "Jan 2025", title: "Launched QuickDash", description: "Shipped the first public beta of QuickDash — a backend-as-a-service platform I'd been building for 8 months." },
      { date: "Mar 2025", title: "1,000 GitHub Stars", description: "hono-rpc-client crossed 1k stars. First project to hit that milestone." },
    ],
  },
  {
    year: "2024",
    items: [
      { date: "Jun 2024", title: "Went Independent", description: "Left full-time employment to freelance and work on my own products. Terrifying and absolutely worth it." },
      { date: "Sep 2024", title: "First OSS Contribution Merged", description: "Got a PR merged into Next.js. Small bug fix but felt huge at the time." },
      { date: "Nov 2024", title: "Started Learning Rust", description: "Committed to learning Rust properly. Read the book, built a CLI, cried about the borrow checker." },
    ],
  },
  {
    year: "2023",
    items: [
      { date: "Feb 2023", title: "Senior Engineer", description: "Promoted to Senior Software Engineer. Started owning architecture decisions and mentoring junior engineers." },
      { date: "Aug 2023", title: "Shipped Design System", description: "Led the migration from a brittle CSS codebase to a token-based design system. 6 months of work." },
    ],
  },
  {
    year: "2022",
    items: [
      { date: "Apr 2022", title: "Joined Startup", description: "Joined a Series A startup as engineer #4. First time being embedded in a product team from day one." },
      { date: "Dec 2022", title: "First Public Project", description: "Published dotfiles on GitHub. Shocked when people actually starred them." },
    ],
  },
  {
    year: "2020",
    items: [
      { date: "Jun 2020", title: "First Engineering Role", description: "Landed my first software engineering job. Spent the first month convinced I was about to be found out." },
    ],
  },
]

export default function TimelinePage() {
  return (
    <div className="px-4 py-10 sm:px-10 sm:py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Timeline</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Timeline</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Notable milestones, career moves, and things I shipped. The professional highlight reel.
        </p>
      </div>

      <div className="space-y-10">
        {events.map((group) => (
          <div key={group.year} className="flex gap-8">
            <div className="shrink-0 w-12">
              <p className="font-display font-bold text-muted-foreground/40 text-xl">{group.year}</p>
            </div>
            <div className="flex flex-col gap-px border rounded-xl overflow-hidden flex-1">
              {group.items.map((item) => (
                <div key={item.title} className="bg-card p-6 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{item.title}</p>
                    <span className="text-muted-foreground text-xs shrink-0">{item.date}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
