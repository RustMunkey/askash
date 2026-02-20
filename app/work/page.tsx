"use client"

import { useState } from "react"
import Link from "next/link"

const filters = ["All", "Web App", "Infrastructure", "Open Source", "Design"]

const projects = [
  {
    name: "QuickDash",
    description:
      "A backend-as-a-service platform built for developers who want to move fast without sacrificing control. Auth, database, storage and APIs out of the box.",
    tags: ["Next.js", "PostgreSQL", "TypeScript", "Docker"],
    category: "Web App",
    year: "2024",
    url: "/work/quickdash",
    featured: true,
  },
  {
    name: "Project Two",
    description:
      "Short description of what this project is, what problem it solves, and who it's for. Keep it punchy and scannable.",
    tags: ["React", "Node.js", "Redis"],
    category: "Web App",
    year: "2024",
    url: "/work/project-two",
    featured: false,
  },
  {
    name: "Project Three",
    description:
      "Short description of what this project is, what problem it solves, and who it's for. Keep it punchy and scannable.",
    tags: ["Rust", "WebAssembly", "TypeScript"],
    category: "Open Source",
    year: "2023",
    url: "/work/project-three",
    featured: false,
  },
  {
    name: "Project Four",
    description:
      "Short description of what this project is, what problem it solves, and who it's for. Keep it punchy and scannable.",
    tags: ["Go", "Docker", "Kubernetes"],
    category: "Infrastructure",
    year: "2023",
    url: "/work/project-four",
    featured: false,
  },
  {
    name: "Project Five",
    description:
      "Short description of what this project is, what problem it solves, and who it's for. Keep it punchy and scannable.",
    tags: ["Figma", "React", "Tailwind"],
    category: "Design",
    year: "2022",
    url: "/work/project-five",
    featured: false,
  },
  {
    name: "Project Six",
    description:
      "Short description of what this project is, what problem it solves, and who it's for. Keep it punchy and scannable.",
    tags: ["Python", "FastAPI", "PostgreSQL"],
    category: "Web App",
    year: "2022",
    url: "/work/project-six",
    featured: false,
  },
]

export default function WorkPage() {
  const [active, setActive] = useState("All")

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active)

  return (
    <div className="px-10 py-16 max-w-4xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">
          Portfolio
        </p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">
          Work
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          A selection of projects I&apos;ve designed, built, and shipped — ranging
          from product interfaces to backend infrastructure.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
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

      <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
        {filtered.map((project) => (
          <Link
            key={project.name}
            href={project.url}
            className="bg-card hover:bg-muted/50 transition-colors p-6 flex flex-col gap-3 group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <h2 className="font-medium">{project.name}</h2>
                {project.featured && (
                  <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded shrink-0">
                    Featured
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-muted-foreground text-xs">{project.year}</span>
                <span className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
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
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-muted-foreground text-sm py-12 text-center">
          No projects in this category yet.
        </p>
      )}
    </div>
  )
}
