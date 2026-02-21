"use client"

import { useState } from "react"
import Link from "next/link"

const filters = ["All", "Web App", "Infrastructure", "Web3", "Design"]

const projects = [
  {
    name: "Quickdash",
    description:
      "A backend-as-a-service platform that lets frontend ecommerce developers connect their storefronts to managed APIs, auth, and data layers — without standing up infrastructure from scratch. Built for speed and scale.",
    tags: ["Next.js", "PostgreSQL", "TypeScript", "Docker"],
    category: "Web App",
    year: "2024",
    url: "/work/quickdash",
    image: "/quickdash.png",
    featured: true,
  },
  {
    name: "Gemsutopia",
    description:
      "A web3 marketplace for rare and collector-grade gems. Users connect their Solana wallet to browse, bid, and purchase directly on-chain — with trait rarity scores, provenance tracking, and a custom minting pipeline.",
    tags: ["Next.js", "Solana", "Web3.js", "TypeScript"],
    category: "Web3",
    year: "2023",
    url: "/work/gemsutopia",
    image: "/gemsutopia.png",
    featured: false,
  },
  {
    name: "Angeldust",
    description:
      "A premium ecommerce experience for a makeup and stationery brand. Custom storefront with editorial layouts, a product configurator, and a fully branded checkout flow — designed and built end to end.",
    tags: ["Next.js", "Shopify", "Tailwind", "Figma"],
    category: "Design",
    year: "2024",
    url: "/work/angeldust",
    image: "/angeldust.png",
    featured: true,
  },
  {
    name: "JetBeans",
    description:
      "A personal coffee brand built to sit alongside my dev services — because development and coffee go hand in hand. Brand identity, storefront, and packaging designed and built from scratch.",
    tags: ["Next.js", "Shopify", "Figma", "Branding"],
    category: "Design",
    year: "2025",
    url: "/work/jetbeans",
    image: "/jetbeans.png",
    featured: true,
  },
  {
    name: "NeoEngine",
    description:
      "A decentralized hosting service built on the Solana blockchain. Deployments are distributed across a node network, paid via SOL, and verifiable on-chain — censorship-resistant infrastructure for the open web.",
    tags: ["Rust", "Solana", "TypeScript", "Docker"],
    category: "Infrastructure",
    year: "2023",
    url: "/work/neoengine",
    image: "/neoengine.png",
    featured: false,
  },
]

const toAnchor = (name: string) =>
  name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")

export default function WorkPage() {
  const [active, setActive] = useState("All")
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active)

  return (
    <div className="px-4 py-10 sm:px-10 sm:py-16 max-w-4xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">
          Portfolio
        </p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-4">
          Work
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          A selection of projects I&apos;ve designed, built, and shipped —
          ranging from product interfaces to backend infrastructure.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-12">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              active === f
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted-foreground text-sm py-12 text-center">
          No projects in this category yet.
        </p>
      ) : (
        <div className="flex flex-col gap-8">
          {filtered.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-2xl border overflow-hidden hover:border-foreground/30 transition-colors"
            >
              <div className="aspect-video bg-muted" />

              <div className="flex flex-col gap-4 p-6 border-t">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2 min-w-0">
                    <h2
                      id={toAnchor(project.name)}
                      className="font-display text-xl font-semibold"
                    >
                      {project.name}
                    </h2>
                    {project.featured && (
                      <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded shrink-0">
                        Featured
                      </span>
                    )}
                    <a
                      href={`#${toAnchor(project.name)}`}
                      className="font-display text-xl font-semibold text-muted-foreground opacity-0 group-hover:opacity-60 hover:opacity-100! transition-opacity shrink-0"
                      aria-label={`Link to ${project.name}`}
                    >
                      #
                    </a>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-muted-foreground text-xs">
                      {project.year}
                    </span>
                    <Link
                      href={project.url}
                      className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      →
                    </Link>
                  </div>
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
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
