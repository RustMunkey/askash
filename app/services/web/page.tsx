import Link from "next/link"

const links = [
  { label: "Frontend", href: "/services/web/frontend", description: "React, Next.js, and pixel-perfect interfaces" },
  { label: "Backend", href: "/services/web/backend", description: "APIs, databases, and server-side logic" },
  { label: "Full-stack", href: "/services/web/fullstack", description: "End-to-end product development" },
]

export default function WebServicesPage() {
  return (
    <div className="px-4 py-10 sm:px-10 sm:py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Services</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-6">Web Development</h1>
        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed max-w-xl">
          <p>Web applications built to ship — from landing pages that convert to complex SaaS platforms that scale.</p>
          <p>I work across the full web stack and can own an entire product or slot into an existing team.</p>
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
