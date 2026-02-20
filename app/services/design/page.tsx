import Link from "next/link"

const links = [
  { label: "Prototyping", href: "/services/design/prototyping", description: "Interactive prototypes and concept validation" },
  { label: "Design Systems", href: "/services/design/systems", description: "Scalable component libraries and token-based systems" },
]

export default function DesignServicesPage() {
  return (
    <div className="px-10 py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Services</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-6">Design</h1>
        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed max-w-xl">
          <p>Design work that bridges the gap between idea and implementation — because I&apos;m the one writing the code too.</p>
          <p>No handoff friction. What I design, I can build.</p>
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
