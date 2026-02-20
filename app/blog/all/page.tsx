import Link from "next/link"

const posts = [
  { title: "Building a BaaS from Scratch", date: "Feb 2024", readTime: "12 min", url: "#" },
  { title: "Why I Switched from REST to tRPC", date: "Jan 2024", readTime: "8 min", url: "#" },
  { title: "Tailwind v4 First Impressions", date: "Dec 2023", readTime: "5 min", url: "#" },
  { title: "Deploying on Fly.io vs Railway", date: "Nov 2023", readTime: "6 min", url: "#" },
  { title: "The Case for Boring Tech", date: "Oct 2023", readTime: "4 min", url: "#" },
]

export default function AllPostsPage() {
  return (
    <div className="px-10 py-16 max-w-4xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Blog</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">All Posts</h1>
      </div>
      <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
        {posts.map((p) => (
          <Link key={p.title} href={p.url} className="bg-card hover:bg-muted/50 transition-colors p-4 flex items-center justify-between group">
            <p className="font-medium text-sm">{p.title}</p>
            <div className="flex items-center gap-4 shrink-0">
              <span className="text-muted-foreground text-xs">{p.readTime}</span>
              <span className="text-muted-foreground text-xs">{p.date}</span>
              <span className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
