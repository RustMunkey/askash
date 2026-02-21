import Link from "next/link"

const links = [
  { label: "GitHub", href: "/stats/github", description: "Commit activity and contribution data" },
  { label: "Site", href: "/stats/site", description: "Traffic, page views, and visitor data" },
]

export default function StatsPage() {
  return (
    <div className="px-4 py-10 sm:px-10 sm:py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Stats</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-6">Stats</h1>
        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed max-w-xl">
          <p>Numbers about my work and this site. I like transparency — here&apos;s what the data looks like.</p>
          <p>Updated automatically. No massaging, no cherry-picking.</p>
        </div>
      </div>
      <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="bg-card hover:bg-muted/50 transition-colors p-6 flex items-center justify-between group">
            <div>
              <p className="font-medium mb-1">{l.label}</p>
              <p className="text-muted-foreground text-sm">{l.description}</p>
            </div>
            <span className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
