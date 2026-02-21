"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

interface Heading {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const pathname = usePathname()
  const [headings, setHeadings] = useState<Heading[]>([])
  const [active, setActive] = useState<string>("")

  useEffect(() => {
    const root = document.querySelector("[data-toc-content]")
    const elements = Array.from(root?.querySelectorAll("h2, h3") ?? [])
    if (elements.length === 0) {
      setHeadings([])
      return
    }

    elements.forEach((el) => {
      if (!el.id) {
        el.id =
          el.textContent
            ?.toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "") ?? ""
      }
    })

    setHeadings(
      elements.map((el) => ({
        id: el.id,
        text: el.textContent ?? "",
        level: parseInt(el.tagName[1]),
      })),
    )
  }, [pathname])

  useEffect(() => {
    if (headings.length === 0) return

    const onScroll = () => {
      const { scrollY, innerHeight } = window
      const atBottom =
        scrollY + innerHeight >= document.documentElement.scrollHeight - 50

      if (atBottom) {
        let last = headings[0].id
        for (const { id } of headings) {
          const el = document.getElementById(id)
          if (!el) continue
          if (el.getBoundingClientRect().top < innerHeight) last = id
        }
        setActive(last)
        return
      }

      // Find whichever heading's card has the most overlap with the viewport.
      // Falls back to the heading element itself for text-only pages (blogs etc).
      let current = headings[0].id
      let maxOverlap = -1

      for (const { id } of headings) {
        const el = document.getElementById(id)
        if (!el) continue
        const container =
          (el.closest("a[href], article, section") as HTMLElement) ?? el
        const { top, bottom } = container.getBoundingClientRect()
        const overlap = Math.max(0, Math.min(innerHeight, bottom) - Math.max(0, top))
        if (overlap > maxOverlap) {
          maxOverlap = overlap
          current = id
        }
      }

      setActive(current)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [headings])

  if (headings.length === 0) return null

  return (
    <aside className="hidden xl:block w-48 shrink-0">
      <div className="sticky top-24 py-16 pr-6">
        <p className="text-muted-foreground mb-3 text-xs font-medium uppercase tracking-widest">
          On this page
        </p>

        <nav className="relative flex flex-col">
          {/* Track line — only as tall as the nav */}
          <div className="absolute left-0 inset-y-0 w-px bg-border" />

          {headings.map((h) => (
            <a
              key={h.id}
              href={`#${h.id}`}
              className={`relative py-1 text-sm transition-colors hover:text-foreground ${
                h.level === 3 ? "pl-7" : "pl-4"
              } ${active === h.id ? "text-foreground" : "text-muted-foreground"}`}
            >
              {/* Sliding indicator */}
              {active === h.id && (
                <motion.div
                  layoutId="toc-indicator"
                  className="absolute left-0 inset-y-0 w-px bg-foreground"
                  transition={{ type: "spring", stiffness: 350, damping: 35 }}
                />
              )}
              <span className="block truncate">{h.text}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}
