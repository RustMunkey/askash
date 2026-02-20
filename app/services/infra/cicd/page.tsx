const offerings = [
  {
    title: "GitHub Actions Pipelines",
    description: "Test, lint, build, and deploy — fully automated. Caching strategies, parallelization, and matrix builds that don't take 20 minutes.",
  },
  {
    title: "Deployment Workflows",
    description: "Blue-green deployments, canary releases, and rollback mechanisms. Shipping to production should be a non-event.",
  },
  {
    title: "Preview Environments",
    description: "Per-PR preview deployments with isolated databases and environment variables. Review apps that actually look like production.",
  },
  {
    title: "Release Automation",
    description: "Semantic versioning, changelog generation, and artifact publishing. From merged PR to released package without manual steps.",
  },
  {
    title: "Pipeline Optimization",
    description: "Auditing slow CI pipelines and cutting build times. Cache hits, parallelism, and removing redundant steps.",
  },
]

const tech = ["GitHub Actions", "Vercel", "Railway", "Docker", "Turborepo", "Changesets", "Semantic Release"]

export default function CicdPage() {
  return (
    <div className="px-10 py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Infrastructure</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">CI/CD</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Deployment pipelines that make shipping boring. Fast feedback, reliable deploys, and rollbacks you can do at 2am without panic.
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
