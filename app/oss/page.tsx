import Link from "next/link"

const links = [
  { label: "Contributions", href: "/oss/contributions", description: "PRs and fixes to open source projects" },
  { label: "Projects", href: "/oss/projects", description: "Open source tools and libraries I maintain" },
]

export default function OssPage() {
  return (
    <div className="px-10 py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Open Source</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-6">OSS</h1>
        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed max-w-xl">
          <p>Open source work — both the projects I maintain and the contributions I&apos;ve made to things I use.</p>
          <p>I believe in paying back into the tools that make the job possible.</p>
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
