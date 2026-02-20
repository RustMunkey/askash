const services = [
  { name: "Full Stack Development", description: "End-to-end web application development — from database schema to polished UI." },
  { name: "Backend & API Design", description: "REST, tRPC, or GraphQL APIs built to scale. PostgreSQL, Redis, and everything in between." },
  { name: "Frontend Engineering", description: "React / Next.js apps with clean architecture, great performance, and attention to detail." },
  { name: "Technical Consulting", description: "Architecture reviews, code audits, or just a second opinion on a tricky decision." },
]

export default function HirePage() {
  return (
    <div className="px-10 py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Contact</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Hire Me</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">Available for freelance, contract, and full-time work. Here's what I can help with.</p>
      </div>
      <div className="flex flex-col gap-px border rounded-xl overflow-hidden mb-8">
        {services.map((s) => (
          <div key={s.name} className="bg-card p-6">
            <p className="font-medium mb-1">{s.name}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
      <a href="/contact" className="bg-primary text-primary-foreground hover:opacity-90 transition-opacity px-5 py-2.5 rounded-lg text-sm font-medium inline-block">Get in Touch</a>
    </div>
  )
}
