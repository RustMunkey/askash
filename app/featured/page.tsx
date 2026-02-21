import Link from "next/link"

const featured = [
  {
    name: "QuickDash",
    description: "A backend-as-a-service platform built for developers who want to move fast without sacrificing control. Auth, database, storage, and APIs out of the box. Used by 200+ developers in beta.",
    tags: ["Next.js", "PostgreSQL", "TypeScript", "Docker"],
    year: "2024",
    url: "/work/quickdash",
    type: "Product",
  },
  {
    name: "hono-rpc-client",
    description: "A fully type-safe RPC client for Hono APIs. Infers request and response types directly from your Hono app definition — no codegen step. 1.2k GitHub stars.",
    tags: ["TypeScript", "Hono", "Open Source"],
    year: "2024",
    url: "/oss/projects",
    type: "OSS",
  },
  {
    name: "Enterprise Design System",
    description: "Led the design and implementation of a component library for a Series B SaaS company. 80+ components, token-based theming, Storybook documentation, and a zero-breaking-change migration path.",
    tags: ["React", "Radix UI", "Storybook", "Tailwind"],
    year: "2023",
    url: "/work",
    type: "Client Work",
  },
]

const typeColors: Record<string, string> = {
  Product: "bg-primary/10 text-primary",
  OSS: "bg-green-500/10 text-green-500",
  "Client Work": "bg-blue-500/10 text-blue-500",
}

export default function FeaturedPage() {
  return (
    <div className="px-4 py-10 sm:px-10 sm:py-16 max-w-4xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Featured</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Featured Work</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          The projects I&apos;m most proud of — products shipped, open source released, and client work that made a real difference.
        </p>
      </div>

      <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
        {featured.map((item) => (
          <Link
            key={item.name}
            href={item.url}
            className="bg-card hover:bg-muted/50 transition-colors p-6 flex flex-col gap-3 group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <h2 className="font-medium">{item.name}</h2>
                <span className={`text-xs px-2 py-0.5 rounded shrink-0 ${typeColors[item.type]}`}>
                  {item.type}
                </span>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-muted-foreground text-xs">{item.year}</span>
                <span className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="bg-muted text-muted-foreground text-xs px-2 py-0.5 rounded">{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
