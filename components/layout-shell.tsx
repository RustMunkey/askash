"use client"

import React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { AvailabilityBadge } from "@/components/availability-badge"
import { SecondaryHeader } from "@/components/secondary-header"
import { SiteHeader } from "@/components/site-header"
import { TableOfContents } from "@/components/table-of-contents"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export function LayoutShell({ children }: { children?: React.ReactNode }) {
  return (
    <div className="[--header-height:calc(--spacing(24))]">
      <SidebarProvider
        className="flex flex-col min-h-svh"
        style={{ "--sidebar-width-icon": "0rem" } as React.CSSProperties}
      >
        <SiteHeader />
        <SecondaryHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex min-h-full">
              <div className="flex-1 min-w-0" data-toc-content>
                {children}
              </div>
              <TableOfContents />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
      <AvailabilityBadge />
    </div>
  )
}
