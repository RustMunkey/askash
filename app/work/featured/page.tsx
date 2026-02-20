import Link from "next/link"

const featured = [
  { name: "QuickDash", description: "A backend-as-a-service platform built for developers who want to move fast without sacrificing control. Auth, database, storage and APIs out of the box.", tags: ["Next.js", "PostgreSQL", "TypeScript", "Docker"], year: "2024", url: "/work/quickdash" },
  { name: "Project Two", description: "Short description of what this project is, what problem it solves, and who it's for. Keep it punchy and scannable.", tags: ["React", "Node.js", "Redis"], year: "2024", url: "/work/project-two" },
  { name: "Project Three", description: "Short description of what this project is, what problem it solves, and who it's for. Keep it punchy and scannable.", tags: ["Rust", "WebAssembly", "TypeScript"], year: "2023", url: "/work/project-three" },
]

export default function FeaturedPage() {
  return (
    <div className="px-10 py-16 max-w-4xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Work</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Featured</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">Hand-picked projects that best represent my range — from product design to infrastructure.</p>
      </div>
      <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
        {featured.map((p) => (
          <Link key={p.name} href={p.url} className="bg-card hover:bg-muted/50 transition-colors p-6 flex flex-col gap-3 group">
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-medium">{p.name}</h2>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-muted-foreground text-xs">{p.year}</span>
                <span className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
            <div className="flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="bg-muted text-muted-foreground text-xs px-2 py-0.5 rounded">{t}</span>)}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
