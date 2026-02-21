const stats = [
  { label: "Total Commits", value: "4,821", sub: "across all repos" },
  { label: "Public Repos", value: "38", sub: "on GitHub" },
  { label: "Stars Earned", value: "2,640", sub: "across all projects" },
  { label: "PRs Merged", value: "312", sub: "open source + work" },
  { label: "Issues Closed", value: "589", sub: "opened or resolved" },
  { label: "Longest Streak", value: "94 days", sub: "consecutive commits" },
]

const languages = [
  { name: "TypeScript", percent: 58 },
  { name: "Go", percent: 16 },
  { name: "Python", percent: 12 },
  { name: "Rust", percent: 8 },
  { name: "Other", percent: 6 },
]

export default function GithubStatsPage() {
  return (
    <div className="px-4 py-10 sm:px-10 sm:py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Stats</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">GitHub</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Contribution data pulled from GitHub. Lifetime numbers across public and private repositories.
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

      <div>
        <p className="text-muted-foreground text-xs tracking-widest uppercase mb-4">Language breakdown</p>
        <div className="flex flex-col gap-3">
          {languages.map((l) => (
            <div key={l.name} className="flex flex-col gap-1.5">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{l.name}</span>
                <span className="text-muted-foreground">{l.percent}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${l.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
