import Link from "next/link"

const links = [
  { label: "Bio", href: "/about/bio", description: "Background and full story" },
  { label: "Experience", href: "/about/experience", description: "Work history and roles" },
  { label: "Education", href: "/about/education", description: "Degrees and certifications" },
]

export default function AboutPage() {
  return (
    <div className="px-10 py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">About</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-6">Asher Wilson</h1>
        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed max-w-xl">
          <p>I'm a software engineer with 5+ years building web applications — from pixel-perfect interfaces to the infrastructure that runs them.</p>
          <p>I care deeply about developer experience, clean APIs, and shipping things that actually work. Currently available for freelance, contract, and full-time opportunities.</p>
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
