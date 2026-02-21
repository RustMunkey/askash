import Link from "next/link"

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Shipped", value: "40+" },
  { label: "Technologies",     value: "20+" },
  { label: "Cups of Coffee",   value: "∞"  },
]

const featured = [
  {
    name: "QuickDash",
    description:
      "A backend-as-a-service platform built for developers who want to move fast without sacrificing control. Auth, database, storage and APIs out of the box.",
    tags: ["Next.js", "PostgreSQL", "TypeScript", "Docker"],
    url: "/work/quickdash",
  },
  {
    name: "Project Two",
    description:
      "Short description of what this project is, what problem it solves, and who it's for. Keep it punchy and scannable.",
    tags: ["React", "Node.js", "Redis"],
    url: "/work/project-two",
  },
  {
    name: "Project Three",
    description:
      "Short description of what this project is, what problem it solves, and who it's for. Keep it punchy and scannable.",
    tags: ["Rust", "WebAssembly", "TypeScript"],
    url: "/work/project-three",
  },
]

export default function Page() {
  return (
    <>
      <section className="flex min-h-[calc(100svh-var(--header-height))] flex-col justify-center px-4 py-14 sm:px-10 sm:py-20 max-w-3xl">
        <p className="text-muted-foreground mb-4 text-sm tracking-widest uppercase">
          Software Engineer
        </p>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Asher Wilson
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl">
          I design and build web applications — from product interfaces to
          backend infrastructure. Available for freelance, contract, and
          full-time opportunities.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/work"
            className="bg-primary text-primary-foreground hover:opacity-90 transition-opacity px-5 py-2.5 rounded-lg text-sm font-medium"
          >
            View Work
          </Link>
          <Link
            href="/contact"
            className="text-foreground border hover:bg-muted transition-colors px-5 py-2.5 rounded-lg text-sm font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <section className="border-t px-4 py-10 sm:px-10 sm:py-16">
        <div className="grid grid-cols-2 gap-8 max-w-3xl md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t px-4 py-10 sm:px-10 sm:py-16">
        <div className="max-w-3xl">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-display text-2xl font-bold">Featured Work</h2>
            <Link
              href="/work"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              All projects →
            </Link>
          </div>
          <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
            {featured.map((project) => (
              <Link
                key={project.name}
                href={project.url}
                className="bg-card hover:bg-muted/50 transition-colors p-6 flex flex-col gap-3 group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{project.name}</h3>
                  <span className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-muted text-muted-foreground text-xs px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
