"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSidebar } from "@/components/ui/sidebar"
import { HugeiconsIcon } from "@hugeicons/react"
import { PanelLeftIcon } from "@hugeicons/core-free-icons"

const labels: Record<string, string> = {
  work:          "Work",
  featured:      "Featured",
  all:           "All Projects",
  "case-studies":"Case Studies",
  about:         "About",
  bio:           "Bio",
  experience:    "Experience",
  education:     "Education",
  blog:          "Blog",
  newsletter:    "Newsletter",
  categories:    "Categories",
  contact:       "Contact",
  hire:          "Hire Me",
  stack:         "Stack",
  languages:     "Languages",
  tools:         "Tools",
  learning:      "Learning",
  services:      "Services",
  web:           "Web Dev",
  frontend:      "Frontend",
  backend:       "Backend",
  fullstack:     "Full Stack",
  design:        "Design",
  prototyping:   "Prototyping",
  systems:       "Design Systems",
  infra:         "Infrastructure",
  cloud:         "Cloud",
  cicd:          "CI/CD",
  monitoring:    "Monitoring",
  security:      "Security",
  audits:        "Audits",
  hardening:     "Hardening",
  database:      "Database",
  migrations:    "Migrations",
  performance:   "Performance",
  playground:    "Playground",
  experiments:   "Experiments",
  demos:         "Demos",
  oss:           "Open Source",
  contributions: "Contributions",
  projects:      "Projects",
  stats:         "Stats",
  github:        "GitHub",
  site:          "This Site",
  uses:          "Uses",
  timeline:      "Timeline",
  profile:       "Profile",
}

const socials = [
  { label: "GitHub", href: "https://github.com/asherwilson", icon: (
    <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
  )},
  { label: "Twitter", href: "https://twitter.com/asherwilson", icon: (
    <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  )},
  { label: "LinkedIn", href: "https://linkedin.com/in/asherwilson", icon: (
    <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  )},
  { label: "Discord", href: "https://discord.com/users/asherwilson", icon: (
    <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.033.055a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
  )},
  { label: "Email", href: "mailto:ash@askash.dev", icon: (
    <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/></svg>
  )},
]

export function SecondaryHeader() {
  const { toggleSidebar } = useSidebar()
  const pathname = usePathname()

  const segments = pathname.split("/").filter(Boolean)
  const crumbs = segments.map((seg, i) => ({
    label: labels[seg] ?? seg,
    href: "/" + segments.slice(0, i + 1).join("/"),
    isLast: i === segments.length - 1,
  }))

  return (
    <div className="bg-background/80 backdrop-blur-md sticky top-14 z-40 flex h-10 w-full items-center border-b px-4 sm:px-10 gap-3">
      <button
        type="button"
        onClick={toggleSidebar}
        className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer shrink-0"
      >
        <HugeiconsIcon icon={PanelLeftIcon} strokeWidth={1.5} />
      </button>

      {/* Breadcrumbs — left */}
      {crumbs.length > 0 ? (
        <nav className="flex items-center gap-1.5 text-sm min-w-0">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors shrink-0">
            Home
          </Link>
          {crumbs.map((crumb) => (
            <span key={crumb.href} className="flex items-center gap-1.5 min-w-0">
              <span className="text-muted-foreground/40 shrink-0">/</span>
              {crumb.isLast ? (
                <span className="text-foreground truncate">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="text-muted-foreground hover:text-foreground transition-colors shrink-0">
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      ) : (
        <span className="text-sm text-foreground">Home</span>
      )}

      {/* Socials — right */}
      <div className="ms-auto flex items-center gap-0.5">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={s.label}
            className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-md"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  )
}
