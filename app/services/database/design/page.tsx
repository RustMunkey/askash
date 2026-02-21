const offerings = [
  {
    title: "Schema Architecture",
    description: "Normalized schemas designed for the queries your app actually runs. I model data around access patterns, not just entity relationships.",
  },
  {
    title: "Multi-tenancy Patterns",
    description: "Row-level, schema-level, and database-level multi-tenancy — each with real tradeoffs. I help you pick the right one for your scale and isolation needs.",
  },
  {
    title: "Relational Modeling",
    description: "Junction tables, polymorphic associations, hierarchies, and audit trails. Getting associations right before you have millions of rows is much cheaper.",
  },
  {
    title: "NoSQL & Hybrid Designs",
    description: "When relational isn't the right fit — JSONB columns in PostgreSQL, Redis for ephemeral state, and knowing when to reach for each.",
  },
  {
    title: "Data Migration Planning",
    description: "Planning large-scale data model changes without downtime. Backfills, dual-write patterns, and the sequencing to make it safe.",
  },
]

export default function DbDesignPage() {
  return (
    <div className="px-4 py-10 sm:px-10 sm:py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Database</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Design</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Schema design that makes your application fast today and maintainable as it grows. Getting this right early saves enormous pain later.
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
