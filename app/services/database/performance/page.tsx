const offerings = [
  {
    title: "Query Optimization",
    description: "EXPLAIN ANALYZE, index selection, join rewriting, and N+1 elimination. Finding the queries that are hurting you and fixing them with proof.",
  },
  {
    title: "Index Strategy",
    description: "B-tree, GIN, GiST, partial, and composite indexes — chosen based on actual query patterns. Adding the right index, not every index.",
  },
  {
    title: "Connection Pooling",
    description: "PgBouncer or Supabase Pooler configuration to stop running out of connections under load. Session, transaction, and statement mode explained.",
  },
  {
    title: "Read Replicas & Caching",
    description: "Offloading reads to replicas, Redis caching layers, and materialized views for expensive aggregations that don't need to run on every request.",
  },
  {
    title: "Performance Monitoring",
    description: "pg_stat_statements, slow query logging, and dashboards that show you what's getting slower over time before users notice.",
  },
]

export default function DbPerformancePage() {
  return (
    <div className="px-10 py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Database</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Performance</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Database performance work grounded in measurement, not guessing. Find the actual bottleneck, fix it, verify the fix.
        </p>
      </div>

      <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
        {offerings.map((o) => (
          <div key={o.title} className="bg-card p-6 flex flex-col gap-2">
            <p className="font-medium">{o.title}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{o.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
