import Link from "next/link"

const studies = [
  { name: "QuickDash", summary: "How I designed and built a full BaaS platform from scratch — architecture decisions, tradeoffs, and lessons learned shipping to production.", tags: ["Architecture", "Full Stack", "DevOps"], readTime: "12 min read", year: "2024", url: "/work/quickdash" },
  { name: "Rebuilding a Legacy API", summary: "Migrating a 5-year-old monolith to microservices without downtime. What worked, what didn't, and what I'd do differently.", tags: ["Backend", "Migration", "Node.js"], readTime: "8 min read", year: "2023", url: "#" },
  { name: "Design System from Zero", summary: "Building a company-wide design system from scratch — component library, documentation, and getting team buy-in.", tags: ["Design Systems", "React", "Storybook"], readTime: "10 min read", year: "2022", url: "#" },
]

export default function CaseStudiesPage() {
  return (
    <div className="px-10 py-16 max-w-4xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Work</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Case Studies</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">Deep dives into specific projects — the decisions, the tradeoffs, and what I'd do differently.</p>
      </div>
      <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
        {studies.map((s) => (
          <Link key={s.name} href={s.url} className="bg-card hover:bg-muted/50 transition-colors p-6 flex flex-col gap-3 group">
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-medium">{s.name}</h2>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-muted-foreground text-xs">{s.readTime}</span>
                <span className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.summary}</p>
            <div className="flex flex-wrap gap-2">{s.tags.map((t) => <span key={t} className="bg-muted text-muted-foreground text-xs px-2 py-0.5 rounded">{t}</span>)}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
