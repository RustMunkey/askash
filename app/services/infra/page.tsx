import Link from "next/link"

const links = [
  { label: "Cloud", href: "/services/infra/cloud", description: "AWS, GCP, and cloud-native architecture" },
  { label: "CI/CD", href: "/services/infra/cicd", description: "Automated pipelines and deployment workflows" },
  { label: "Monitoring", href: "/services/infra/monitoring", description: "Observability, alerting, and incident response" },
]

export default function InfraPage() {
  return (
    <div className="px-10 py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Services</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-6">Infrastructure</h1>
        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed max-w-xl">
          <p>Infrastructure that runs quietly in the background — until something goes wrong, at which point you want someone who set it up right.</p>
          <p>I build for reliability, cost-efficiency, and your team&apos;s ability to operate it without me.</p>
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
