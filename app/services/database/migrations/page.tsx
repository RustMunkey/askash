const offerings = [
  {
    title: "Migration Strategy",
    description: "Expanding/contracting migrations, zero-downtime column changes, and the rollout sequence that keeps your app alive during schema changes.",
  },
  {
    title: "ORM Migration Setup",
    description: "Drizzle, Prisma, or raw SQL migrations — configured with CI checks, version control, and dev/prod parity that doesn't bite you.",
  },
  {
    title: "Backfills",
    description: "Safely populating new columns on large tables without locking your database or timing out. Batched writes, progress tracking, and rollback plans.",
  },
  {
    title: "Large Table Migrations",
    description: "pg_repack, online schema changes, and CONCURRENTLY indexes for tables that can't afford downtime. Tested on staging before production.",
  },
  {
    title: "Migration Auditing",
    description: "Reviewing existing migrations for risky patterns — locking operations, missing rollbacks, and sequences that could fail mid-run.",
  },
]

export default function MigrationsPage() {
  return (
    <div className="px-4 py-10 sm:px-10 sm:py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Database</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Migrations</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Schema changes that don&apos;t take your app down. Migrations are the riskiest part of database work — they deserve real planning.
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
