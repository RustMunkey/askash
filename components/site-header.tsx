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
      <div className="flex h-14 w-full items-center gap-2 px-4 sm:px-10">
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
            className="hidden sm:flex w-48 has-[[data-slot=input-group-control]:focus-visible]:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-input cursor-pointer"
            onClick={() => setSearchOpen(true)}
          >
            <InputGroupAddon>
              <HugeiconsIcon icon={SearchIcon} strokeWidth={1.5} />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search..." readOnly className="cursor-pointer" />
          </InputGroup>
          <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
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
