const offerings = [
  {
    title: "Product Development from Scratch",
    description: "Taking an idea from concept to deployed product. I handle the full stack — UI, API, database, auth, deployment — and can move fast without cutting corners.",
  },
  {
    title: "MVP in Weeks",
    description: "Opinionated tech choices, no over-engineering. A focused MVP that proves the concept and is actually extensible when you need to grow it.",
  },
  {
    title: "SaaS Platform Architecture",
    description: "Multi-tenancy, subscription billing, usage tracking, and the organizational structure to ship features without slowing down.",
  },
  {
    title: "Technical Consulting",
    description: "Architecture reviews, tech stack selection, team structure advice, and code audits. An outside perspective from someone who's built the thing you're trying to build.",
  },
  {
    title: "Team Augmentation",
    description: "Slot into an existing team as a senior full-stack contributor. I work well with product managers, designers, and other engineers.",
  },
]

const process = [
  { step: "01", label: "Scope", detail: "Define what we're building, what it's not, and what done looks like." },
  { step: "02", label: "Design", detail: "Wireframes, data models, and architecture before a line of code is written." },
  { step: "03", label: "Build", detail: "Iterative development with weekly demos. No disappearing for months." },
  { step: "04", label: "Ship", detail: "CI/CD, monitoring, and a deployment that you own." },
]

export default function FullstackPage() {
  return (
    <div className="px-10 py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Web Development</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Full-stack</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          End-to-end product development. One person who understands the whole system and can make tradeoffs that actually make sense.
        </p>
      </div>

      <div className="flex flex-col gap-px border rounded-xl overflow-hidden mb-12">
        {offerings.map((o) => (
          <div key={o.title} className="bg-card p-6 flex flex-col gap-2">
            <p className="font-medium">{o.title}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{o.description}</p>
          </div>
        ))}
      </div>

      <div>
        <p className="text-muted-foreground text-xs tracking-widest uppercase mb-4">How I work</p>
        <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
          {process.map((p) => (
            <div key={p.step} className="bg-card p-6 flex gap-6">
              <span className="text-muted-foreground/40 font-display font-bold text-2xl shrink-0">{p.step}</span>
              <div className="flex flex-col gap-1">
                <p className="font-medium">{p.label}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
