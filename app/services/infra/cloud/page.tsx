const offerings = [
  {
    title: "AWS Architecture",
    description: "VPCs, ECS, RDS, S3, CloudFront, Lambda — whatever the workload needs. I design for the right level of complexity, not the most impressive diagram.",
  },
  {
    title: "Container Orchestration",
    description: "Docker-based deployments on ECS Fargate, Fly.io, or Railway. Kubernetes when the scale actually justifies it.",
  },
  {
    title: "Infrastructure as Code",
    description: "Terraform or Pulumi for reproducible, version-controlled infrastructure. No more clicking around the console hoping you remember what you did.",
  },
  {
    title: "Cost Optimization",
    description: "Auditing cloud spend and rightsizing resources. Most early-stage teams overspend by 40-60% on infrastructure they haven't needed yet.",
  },
  {
    title: "Multi-environment Setup",
    description: "Development, staging, and production environments that are actually isolated, with promotion workflows that don't break things.",
  },
]

const tech = ["AWS", "Terraform", "Docker", "ECS Fargate", "Fly.io", "Cloudflare", "Railway", "Pulumi"]

export default function CloudPage() {
  return (
    <div className="px-10 py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Infrastructure</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Cloud</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Cloud infrastructure that matches your actual scale — not the architecture you&apos;ll need in five years if everything goes right.
        </p>
      </div>

      <div className="flex flex-col gap-px border rounded-xl overflow-hidden mb-10">
        {offerings.map((o) => (
          <div key={o.title} className="bg-card p-6 flex flex-col gap-2">
            <p className="font-medium">{o.title}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{o.description}</p>
          </div>
        ))}
      </div>

      <div>
        <p className="text-muted-foreground text-xs tracking-widest uppercase mb-4">Tech I use</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-lg">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
