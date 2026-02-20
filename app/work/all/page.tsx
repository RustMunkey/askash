import Link from "next/link"

const projects = [
  { name: "QuickDash", description: "A backend-as-a-service platform built for developers who want to move fast without sacrificing control.", tags: ["Next.js", "PostgreSQL", "TypeScript", "Docker"], year: "2024", url: "/work/quickdash" },
  { name: "Project Two", description: "Short description of what this project is, what problem it solves, and who it's for.", tags: ["React", "Node.js", "Redis"], year: "2024", url: "/work/project-two" },
  { name: "Project Three", description: "Short description of what this project is, what problem it solves, and who it's for.", tags: ["Rust", "WebAssembly", "TypeScript"], year: "2023", url: "/work/project-three" },
  { name: "Project Four", description: "Short description of what this project is, what problem it solves, and who it's for.", tags: ["Go", "Docker", "Kubernetes"], year: "2023", url: "/work/project-four" },
  { name: "Project Five", description: "Short description of what this project is, what problem it solves, and who it's for.", tags: ["Figma", "React", "Tailwind"], year: "2022", url: "/work/project-five" },
  { name: "Project Six", description: "Short description of what this project is, what problem it solves, and who it's for.", tags: ["Python", "FastAPI", "PostgreSQL"], year: "2022", url: "/work/project-six" },
]

const byYear = projects.reduce<Record<string, typeof projects>>((acc, p) => { ;(acc[p.year] ??= []).push(p); return acc }, {})
const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a))

export default function AllProjectsPage() {
  return (
    <div className="px-10 py-16 max-w-4xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Work</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">All Projects</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">Everything I've shipped, grouped by year.</p>
      </div>
      <div className="flex flex-col gap-12">
        {years.map((year) => (
          <div key={year}>
            <p className="text-muted-foreground text-xs font-semibold tracking-widest uppercase mb-4">{year}</p>
            <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
              {byYear[year].map((p) => (
                <Link key={p.name} href={p.url} className="bg-card hover:bg-muted/50 transition-colors p-6 flex flex-col gap-3 group">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-medium">{p.name}</h2>
                    <span className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity shrink-0">→</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="bg-muted text-muted-foreground text-xs px-2 py-0.5 rounded">{t}</span>)}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
