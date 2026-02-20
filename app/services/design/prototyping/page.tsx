const offerings = [
  {
    title: "Figma Prototypes",
    description: "Interactive, high-fidelity prototypes ready for user testing. Component-based, with realistic flows and micro-interactions baked in.",
  },
  {
    title: "Concept Validation",
    description: "Low-fidelity wireframes and click-through prototypes to test ideas before committing to implementation. Fail fast, learn early.",
  },
  {
    title: "Coded Prototypes",
    description: "When Figma isn't enough, I build working prototypes in Next.js with real data. Lets you test actual interactions, not simulated ones.",
  },
  {
    title: "User Flow Mapping",
    description: "End-to-end user journey mapping, happy paths, edge cases, and error states before a single component is built.",
  },
]

export default function PrototypingPage() {
  return (
    <div className="px-10 py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Design</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Prototyping</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Interactive prototypes that answer questions before engineering time is spent. From lo-fi sketches to coded demos.
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
