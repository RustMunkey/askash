const offerings = [
  {
    title: "Application Performance Monitoring",
    description: "Traces, spans, and error tracking with Sentry or Datadog. Know what's slow, what's broken, and who's affected before your users tell you.",
  },
  {
    title: "Structured Logging",
    description: "Log pipelines with Axiom or Loki — structured JSON logs, queryable by service, user, request ID, and anything else you need to debug at 2am.",
  },
  {
    title: "Uptime & Alerting",
    description: "Uptime monitoring, health checks, and PagerDuty/Slack alerts that fire on the right things and don't cry wolf on the rest.",
  },
  {
    title: "Infrastructure Metrics",
    description: "CPU, memory, disk, and network metrics from your containers and databases. Dashboards that tell a story, not just numbers.",
  },
  {
    title: "Incident Response Setup",
    description: "Runbooks, on-call rotations, and post-mortem templates. The boring operational work that pays off enormously when things go wrong.",
  },
]

const tech = ["Sentry", "Axiom", "Datadog", "Grafana", "Prometheus", "Better Stack", "Cloudflare Analytics"]

export default function MonitoringPage() {
  return (
    <div className="px-10 py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Infrastructure</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Monitoring</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Observability that tells you what&apos;s actually happening in production — before your users become your monitoring system.
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
