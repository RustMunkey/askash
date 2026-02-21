import Link from "next/link"

const links = [
  { label: "Languages", href: "/stack/languages", description: "Programming languages I work with daily" },
  { label: "Tools", href: "/stack/tools", description: "Software, editors, and utilities in my workflow" },
  { label: "Learning", href: "/stack/learning", description: "Technologies I'm actively picking up" },
]

export default function StackPage() {
  return (
    <div className="px-4 py-10 sm:px-10 sm:py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Tech Stack</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-6">Stack</h1>
        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed max-w-xl">
          <p>The languages, frameworks, and tools I reach for to build things. Picked up over years of shipping real products.</p>
          <p>I gravitate toward boring, reliable tech with a bias for TypeScript on both ends of the stack.</p>
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
