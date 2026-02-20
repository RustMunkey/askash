const offerings = [
  {
    title: "REST & GraphQL APIs",
    description: "Well-structured APIs with clear contracts, proper error handling, versioning, and documentation. Built with Hono, Express, or Fastify depending on the needs.",
  },
  {
    title: "Authentication & Authorization",
    description: "Session-based or JWT auth, OAuth providers, RBAC, and row-level security. I implement auth correctly so you don't have to think about it.",
  },
  {
    title: "Database Design & Optimization",
    description: "Schema design, migrations, indexing strategies, and query optimization for PostgreSQL, MySQL, and SQLite. I write SQL that performs at scale.",
  },
  {
    title: "Serverless & Edge Functions",
    description: "Functions that run at the edge with Cloudflare Workers or Vercel Edge Runtime. Low latency, globally distributed, zero infrastructure management.",
  },
  {
    title: "Background Jobs & Queues",
    description: "Reliable job queues with BullMQ or Inngest, cron scheduling, webhooks, and event-driven workflows that don't drop messages.",
  },
]

const tech = ["Node.js", "Hono", "PostgreSQL", "Redis", "Prisma", "Drizzle", "BullMQ", "Inngest", "Cloudflare Workers"]

export default function BackendPage() {
  return (
    <div className="px-10 py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Web Development</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Backend</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          APIs and server-side systems built to be reliable, maintainable, and fast enough to stop being a concern.
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
