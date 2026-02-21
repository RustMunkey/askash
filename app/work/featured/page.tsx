import Link from "next/link"

const featured = [
  {
    name: "JetBeans",
    description: "A personal coffee brand built to sit alongside my dev services — because development and coffee go hand in hand. Brand identity, storefront, and packaging designed and built from scratch.",
    tags: ["Next.js", "Shopify", "Figma", "Branding"],
    year: "2025",
    url: "/work/jetbeans",
    image: "/jetbeans.png",
  },
  {
    name: "Quickdash",
    description: "A backend-as-a-service platform that lets frontend ecommerce developers connect their storefronts to managed APIs, auth, and data layers — without standing up infrastructure from scratch. Built for speed and scale.",
    tags: ["Next.js", "PostgreSQL", "TypeScript", "Docker"],
    year: "2024",
    url: "/work/quickdash",
    image: "/quickdash.png",
  },
  {
    name: "Angeldust",
    description: "A premium ecommerce experience for a makeup and stationery brand. Custom storefront with editorial layouts, a product configurator, and a fully branded checkout flow — designed and built end to end.",
    tags: ["Next.js", "Shopify", "Tailwind", "Figma"],
    year: "2024",
    url: "/work/angeldust",
    image: "/angeldust.png",
  },
]

const toAnchor = (name: string) =>
  name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")

export default function FeaturedPage() {
  return (
    <div className="px-4 py-10 sm:px-10 sm:py-16 max-w-4xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Work</p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-4">Featured</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Hand-picked projects that best represent my range — from product design to backend infrastructure.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {featured.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col rounded-2xl border overflow-hidden hover:border-foreground/30 transition-colors"
          >
            <div className="aspect-video bg-muted" />

            <div className="flex flex-col gap-4 p-6 border-t">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2 min-w-0">
                  <h2 id={toAnchor(p.name)} className="font-display text-xl font-semibold">
                    {p.name}
                  </h2>
                  <a
                    href={`#${toAnchor(p.name)}`}
                    className="font-display text-xl font-semibold text-muted-foreground opacity-0 group-hover:opacity-60 hover:opacity-100! transition-opacity shrink-0"
                    aria-label={`Link to ${p.name}`}
                  >
                    #
                  </a>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-muted-foreground text-xs">{p.year}</span>
                  <Link
                    href={p.url}
                    className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    →
                  </Link>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="bg-muted text-muted-foreground text-xs px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
