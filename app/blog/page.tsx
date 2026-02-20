import Link from "next/link"

const posts = [
  { title: "Building a BaaS from Scratch", excerpt: "Everything I learned designing and shipping QuickDash — from database schema to auth flows.", date: "Feb 2024", readTime: "12 min", url: "/blog/baas-from-scratch" },
  { title: "Why I Switched from REST to tRPC", excerpt: "End-to-end type safety changed how I think about APIs. Here's why and how.", date: "Jan 2024", readTime: "8 min", url: "/blog/trpc-switch" },
  { title: "Tailwind v4 First Impressions", excerpt: "The CSS-first config is a massive improvement. A few rough edges, but I'm not going back.", date: "Dec 2023", readTime: "5 min", url: "/blog/tailwind-v4" },
]

export default function BlogPage() {
  return (
    <div className="px-10 py-16 max-w-4xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Blog</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Writing</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">Thoughts on software, design, and building things on the internet.</p>
      </div>
      <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
        {posts.map((p) => (
          <Link key={p.title} href={p.url} className="bg-card hover:bg-muted/50 transition-colors p-6 flex flex-col gap-2 group">
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-medium">{p.title}</h2>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-muted-foreground text-xs">{p.readTime}</span>
                <span className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.excerpt}</p>
            <p className="text-muted-foreground text-xs">{p.date}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
