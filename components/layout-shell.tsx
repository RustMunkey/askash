"use client"

import React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SecondaryHeader } from "@/components/secondary-header"
import { SiteHeader } from "@/components/site-header"
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
            {children}
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
