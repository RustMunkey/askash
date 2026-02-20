"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { HugeiconsIcon } from "@hugeicons/react"
import { BulbIcon, Moon01Icon, SearchIcon } from "@hugeicons/core-free-icons"
import { SearchDialog } from "@/components/search-dialog"

const LOGO = "ASKASH.DEV"

export function SiteHeader() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [displayed, setDisplayed] = useState("")
  const [typed, setTyped] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setSearchOpen((prev) => !prev)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (displayed.length < LOGO.length) {
      const t = setTimeout(
        () => setDisplayed(LOGO.slice(0, displayed.length + 1)),
        80,
      )
      return () => clearTimeout(t)
    } else {
      setTyped(true)
    }
  }, [displayed])

  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-14 w-full items-center gap-2 px-4">
        <Link
          href="/"
          className="font-display text-2xl font-bold tracking-widest transition-opacity hover:opacity-60 flex items-center"
        >
          <span>{displayed}</span>
          <motion.span
            className="inline-block w-[0.55em] h-[0.85em] bg-current ml-[3px] self-center"
            animate={{ opacity: typed ? [1, 0] : 1 }}
            transition={
              typed
                ? { duration: 0.8, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }
                : { duration: 0 }
            }
          />
        </Link>
        <div className="ms-auto flex items-center gap-3">
          <InputGroup
            className="w-48 has-[[data-slot=input-group-control]:focus-visible]:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-input cursor-pointer"
            onClick={() => setSearchOpen(true)}
          >
            <InputGroupAddon>
              <HugeiconsIcon icon={SearchIcon} strokeWidth={1.5} />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search..." readOnly className="cursor-pointer" />
          </InputGroup>
          <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
          <a
            href="https://github.com/RustMunkey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5.5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <HugeiconsIcon
                icon={theme === "dark" ? BulbIcon : Moon01Icon}
                strokeWidth={1.5}
              />
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
