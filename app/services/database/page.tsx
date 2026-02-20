import Link from "next/link"

const links = [
  { label: "Design", href: "/services/database/design", description: "Schema architecture and data modeling" },
  { label: "Migrations", href: "/services/database/migrations", description: "Safe schema migrations and version control" },
  { label: "Performance", href: "/services/database/performance", description: "Query optimization and scaling strategies" },
]

export default function DatabasePage() {
  return (
    <div className="px-10 py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Services</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-6">Database</h1>
        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed max-w-xl">
          <p>Database work that goes beyond just getting data in and out — design, migrations, and performance that scale with your product.</p>
          <p>PostgreSQL is my primary, but I work across the modern database landscape.</p>
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
