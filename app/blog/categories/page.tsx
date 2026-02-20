import Link from "next/link"

const categories = [
  { name: "Engineering", count: 12, url: "#" },
  { name: "Design", count: 5, url: "#" },
  { name: "DevOps", count: 4, url: "#" },
  { name: "Career", count: 3, url: "#" },
  { name: "Tools", count: 7, url: "#" },
]

export default function CategoriesPage() {
  return (
    <div className="px-10 py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Blog</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Categories</h1>
      </div>
      <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
        {categories.map((c) => (
          <Link key={c.name} href={c.url} className="bg-card hover:bg-muted/50 transition-colors p-5 flex items-center justify-between group">
            <p className="font-medium">{c.name}</p>
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground text-sm">{c.count} posts</span>
              <span className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
