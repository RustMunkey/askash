const stats = [
  { label: "Monthly Visitors", value: "3,240", sub: "unique visitors" },
  { label: "Page Views", value: "11,800", sub: "last 30 days" },
  { label: "Avg. Session", value: "2m 14s", sub: "time on site" },
  { label: "Bounce Rate", value: "38%", sub: "below industry avg" },
]

const topPages = [
  { path: "/", label: "Home", views: "4,210" },
  { path: "/work", label: "Work", views: "2,140" },
  { path: "/about", label: "About", views: "1,890" },
  { path: "/blog", label: "Blog", views: "1,340" },
  { path: "/contact", label: "Contact", views: "980" },
  { path: "/stack", label: "Stack", views: "720" },
]

const sources = [
  { name: "Direct", percent: 42 },
  { name: "GitHub", percent: 28 },
  { name: "Search", percent: 18 },
  { name: "Social", percent: 12 },
]

export default function SiteStatsPage() {
  return (
    <div className="px-4 py-10 sm:px-10 sm:py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Stats</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Site</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Traffic and visitor data for this site. Tracked with privacy-first analytics — no cookies, no fingerprinting.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px border rounded-xl overflow-hidden mb-10">
        {stats.map((s) => (
          <div key={s.label} className="bg-card p-6 flex flex-col gap-1">
            <p className="font-display font-bold text-3xl">{s.value}</p>
            <p className="font-medium text-sm">{s.label}</p>
            <p className="text-muted-foreground text-xs">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="mb-10">
        <p className="text-muted-foreground text-xs tracking-widest uppercase mb-4">Top pages</p>
        <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
          {topPages.map((p) => (
            <div key={p.path} className="bg-card px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground font-mono text-xs">{p.path}</span>
                <span className="text-sm">{p.label}</span>
              </div>
              <span className="text-muted-foreground text-sm">{p.views}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-muted-foreground text-xs tracking-widest uppercase mb-4">Traffic sources</p>
        <div className="flex flex-col gap-3">
          {sources.map((s) => (
            <div key={s.name} className="flex flex-col gap-1.5">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{s.name}</span>
                <span className="text-muted-foreground">{s.percent}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${s.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
