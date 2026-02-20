"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  ArrowUpDoubleIcon,
} from "@hugeicons/core-free-icons"

const navGroups = [
  {
    label: "Menu",
    items: [
      {
        title: "Work",
        url: "/work",
        items: [
          { title: "Featured",     url: "/work/featured" },
          { title: "All Projects", url: "/work/all" },
          { title: "Case Studies", url: "/work/case-studies" },
        ],
      },
      {
        title: "About",
        url: "/about",
        items: [
          { title: "Bio",        url: "/about/bio" },
          { title: "Experience", url: "/about/experience" },
          { title: "Education",  url: "/about/education" },
        ],
      },
      {
        title: "Blog",
        url: "/blog",
        items: [
          { title: "All Posts",   url: "/blog/all" },
          { title: "Categories",  url: "/blog/categories" },
          { title: "Newsletter",  url: "/blog/newsletter" },
        ],
      },
      {
        title: "Stack",
        url: "/stack",
        items: [
          { title: "Languages",          url: "/stack/languages" },
          { title: "Tools",              url: "/stack/tools" },
          { title: "Currently Learning", url: "/stack/learning" },
        ],
      },
      {
        title: "Contact",
        url: "/contact",
        items: [
          { title: "Get in Touch", url: "/contact" },
          { title: "Hire Me",      url: "/contact/hire" },
        ],
      },
    ],
  },
  {
    label: "Services",
    items: [
      {
        title: "Web Development",
        url: "/services/web",
        items: [
          { title: "Frontend",   url: "/services/web/frontend" },
          { title: "Backend",    url: "/services/web/backend" },
          { title: "Full Stack", url: "/services/web/fullstack" },
        ],
      },
      {
        title: "UI / UX Design",
        url: "/services/design",
        items: [
          { title: "Prototyping",    url: "/services/design/prototyping" },
          { title: "Design Systems", url: "/services/design/systems" },
        ],
      },
      {
        title: "Infrastructure",
        url: "/services/infra",
        items: [
          { title: "Cloud Setup", url: "/services/infra/cloud" },
          { title: "CI / CD",     url: "/services/infra/cicd" },
          { title: "Monitoring",  url: "/services/infra/monitoring" },
        ],
      },
      {
        title: "Security",
        url: "/services/security",
        items: [
          { title: "Audits",    url: "/services/security/audits" },
          { title: "Hardening", url: "/services/security/hardening" },
        ],
      },
      {
        title: "Database",
        url: "/services/database",
        items: [
          { title: "Design",      url: "/services/database/design" },
          { title: "Migrations",  url: "/services/database/migrations" },
          { title: "Performance", url: "/services/database/performance" },
        ],
      },
    ],
  },
  {
    label: "Explore",
    items: [
      {
        title: "Playground",
        url: "/playground",
        items: [
          { title: "Experiments", url: "/playground/experiments" },
          { title: "Demos",       url: "/playground/demos" },
        ],
      },
      {
        title: "Open Source",
        url: "/oss",
        items: [
          { title: "Contributions", url: "/oss/contributions" },
          { title: "My Projects",   url: "/oss/projects" },
        ],
      },
      {
        title: "Stats",
        url: "/stats",
        items: [
          { title: "GitHub Activity", url: "/stats/github" },
          { title: "This Site",       url: "/stats/site" },
        ],
      },
      { title: "Uses",     url: "/uses",     items: [] },
      { title: "Timeline", url: "/timeline", items: [] },
      { title: "Featured", url: "/featured", items: [] },
    ],
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [openItems, setOpenItems] = React.useState<Record<string, boolean>>({})
  const { state } = useSidebar()
  const router = useRouter()

  const toggle = (title: string) =>
    setOpenItems((prev) => ({ ...prev, [title]: !prev[title] }))

  return (
    <Sidebar
      collapsible="icon"
      className="sticky top-(--header-height) h-[calc(100svh-var(--header-height))]"
      {...props}
    >
      <SidebarHeader>
        <button
          type="button"
          onClick={() => setOpenItems({})}
          className="text-muted-foreground hover:text-foreground flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-xs transition-colors cursor-pointer"
        >
          <HugeiconsIcon icon={ArrowUpDoubleIcon} strokeWidth={1.5} className="size-4" />
          <span>Collapse all</span>
        </button>
      </SidebarHeader>
      <SidebarContent>
        {navGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarMenu>
              {group.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => {
                      if (item.items.length) {
                        router.push(item.url)
                        toggle(item.title)
                      }
                    }}
                    asChild={!item.items.length}
                  >
                    {item.items.length ? (
                      <>
                        <span>{item.title}</span>
                        <motion.span
                          className="ms-auto shrink-0"
                          animate={{ rotate: openItems[item.title] && state === "expanded" ? 90 : 0 }}
                          transition={{ duration: 0.1, ease: "easeInOut" }}
                        >
                          <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={1.5} className="size-5!" />
                        </motion.span>
                      </>
                    ) : (
                      <Link href={item.url}>
                        <span>{item.title}</span>
                      </Link>
                    )}
                  </SidebarMenuButton>

                  {item.items.length > 0 && (
                    <div
                      className="grid group-data-[state=expanded]:transition-[grid-template-rows] duration-100 ease-in-out"
                      style={{ gridTemplateRows: openItems[item.title] ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <SidebarMenuSub>
                          {item.items.map((sub) => (
                            <SidebarMenuSubItem key={sub.title}>
                              <SidebarMenuSubButton asChild>
                                <Link href={sub.url}>{sub.title}</Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </div>
                    </div>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="border-t">
        <Link
          href="/profile"
          className="hover:bg-sidebar-accent flex items-center gap-3 rounded-lg p-2 transition-colors"
        >
          <Avatar>
            <AvatarImage src="/avatar.jpg" alt="Asher Wilson" />
            <AvatarFallback>AW</AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-col">
            <span className="text-sm font-medium leading-none">Asher Wilson</span>
            <span className="text-muted-foreground mt-1 truncate text-xs">Software Engineer</span>
          </div>
        </Link>
      </SidebarFooter>
    </Sidebar>
  )
}
