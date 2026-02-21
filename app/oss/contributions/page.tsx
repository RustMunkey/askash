const contributions = [
  {
    repo: "vercel/next.js",
    description: "Fixed a bug in the App Router where dynamic route segments were incorrectly typed when using generateStaticParams with TypeScript strict mode.",
    pr: "#58234",
    merged: true,
    date: "Jan 2025",
  },
  {
    repo: "shadcn-ui/ui",
    description: "Added accessible keyboard navigation to the Command component — tab and shift+tab now cycle through groups correctly.",
    pr: "#4821",
    merged: true,
    date: "Nov 2024",
  },
  {
    repo: "drizzle-team/drizzle-orm",
    description: "Contributed a fix for incorrect SQL generated when using .where() with multiple OR conditions on joined tables in PostgreSQL.",
    pr: "#2103",
    merged: true,
    date: "Oct 2024",
  },
  {
    repo: "biomejs/biome",
    description: "Added a lint rule for detecting unintentional floating promises in async event handlers. Currently in review.",
    pr: "#3847",
    merged: false,
    date: "Dec 2024",
  },
  {
    repo: "colinhacks/zod",
    description: "Documentation fix: corrected the example for z.discriminatedUnion() which had an incorrect type assertion.",
    pr: "#3291",
    merged: true,
    date: "Sep 2024",
  },
]

export default function ContributionsPage() {
  return (
    <div className="px-4 py-10 sm:px-10 sm:py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Open Source</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Contributions</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          PRs to open source projects I depend on. Bug fixes, accessibility improvements, and the occasional documentation correction.
        </p>
      </div>

      <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
        {contributions.map((c) => (
          <div key={c.pr} className="bg-card p-6 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="font-medium font-mono text-sm">{c.repo}</p>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-xs">{c.date}</span>
                <span className={`text-xs px-2 py-0.5 rounded ${c.merged ? "bg-primary/10 text-primary" : "bg-amber-500/10 text-amber-500"}`}>
                  {c.merged ? "Merged" : "Open"}
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{c.description}</p>
            <p className="text-muted-foreground/50 text-xs font-mono">{c.pr}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
