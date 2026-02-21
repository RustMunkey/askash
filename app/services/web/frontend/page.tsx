const offerings = [
  {
    title: "React & Next.js Applications",
    description: "Full-featured web apps with server components, streaming, and optimal performance out of the box. RSC, suspense, and the App Router are my daily drivers.",
  },
  {
    title: "Component Libraries & Design Systems",
    description: "Reusable component libraries built with Radix, shadcn/ui, or from scratch. Accessible by default, themeable, and documented.",
  },
  {
    title: "Performance Optimization",
    description: "Auditing and improving Core Web Vitals — LCP, CLS, INP. Bundle analysis, lazy loading, image optimization, and edge rendering.",
  },
  {
    title: "Landing Pages & Marketing Sites",
    description: "High-converting landing pages built with attention to animation, copy structure, and load time. Deployed to Vercel or Cloudflare Pages.",
  },
  {
    title: "Figma to Code",
    description: "Pixel-accurate implementation from Figma designs. I work with design tokens, variants, and handoff specs — no back-and-forth needed.",
  },
]

const tech = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "Framer Motion", "Zustand", "React Query"]

export default function FrontendPage() {
  return (
    <div className="px-4 py-10 sm:px-10 sm:py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Web Development</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Frontend</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Interfaces that feel fast, look sharp, and work correctly across browsers and devices. I build for real users, not just Lighthouse scores.
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
