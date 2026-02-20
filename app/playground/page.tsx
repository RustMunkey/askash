import Link from "next/link"

const links = [
  { label: "Experiments", href: "/playground/experiments", description: "Unfinished ideas and technical explorations" },
  { label: "Demos", href: "/playground/demos", description: "Interactive demos of specific concepts" },
]

export default function PlaygroundPage() {
  return (
    <div className="px-10 py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Playground</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-6">Playground</h1>
        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed max-w-xl">
          <p>Where I mess around with ideas that might go nowhere. Not everything needs to ship.</p>
          <p>Some of these are finished enough to show, some are barely holding together. That&apos;s the point.</p>
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
