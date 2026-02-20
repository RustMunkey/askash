"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

const pages = [
  { label: "Home",            url: "/" },
  { label: "Work",            url: "/work" },
  { label: "Featured Work",   url: "/work/featured" },
  { label: "All Projects",    url: "/work/all" },
  { label: "Case Studies",    url: "/work/case-studies" },
  { label: "About",           url: "/about" },
  { label: "Bio",             url: "/about/bio" },
  { label: "Experience",      url: "/about/experience" },
  { label: "Education",       url: "/about/education" },
  { label: "Blog",            url: "/blog" },
  { label: "Stack",           url: "/stack" },
  { label: "Contact",         url: "/contact" },
  { label: "Hire Me",         url: "/contact/hire" },
  { label: "Uses",            url: "/uses" },
  { label: "Timeline",        url: "/timeline" },
  { label: "Open Source",     url: "/oss" },
  { label: "Playground",      url: "/playground" },
  { label: "Stats",           url: "/stats" },
]

const services = [
  { label: "Web Development", url: "/services/web" },
  { label: "Frontend",        url: "/services/web/frontend" },
  { label: "Backend",         url: "/services/web/backend" },
  { label: "Full Stack",      url: "/services/web/fullstack" },
  { label: "UI / UX Design",  url: "/services/design" },
  { label: "Infrastructure",  url: "/services/infra" },
  { label: "Security",        url: "/services/security" },
  { label: "Database",        url: "/services/database" },
]

const projects = [
  { label: "QuickDash",    url: "/work/quickdash" },
  { label: "Project Two",  url: "/work/project-two" },
  { label: "Project Three",url: "/work/project-three" },
]

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const router = useRouter()

  const navigate = (url: string) => {
    onOpenChange(false)
    router.push(url)
  }

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange} title="Search" description="Search pages, projects, and more.">
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            {pages.map((item) => (
              <CommandItem key={item.url} value={item.label} onSelect={() => navigate(item.url)}>
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Projects">
            {projects.map((item) => (
              <CommandItem key={item.url} value={item.label} onSelect={() => navigate(item.url)}>
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Services">
            {services.map((item) => (
              <CommandItem key={item.url} value={item.label} onSelect={() => navigate(item.url)}>
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  )
}
