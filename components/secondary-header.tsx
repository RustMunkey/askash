"use client"

import { useSidebar } from "@/components/ui/sidebar"
import { HugeiconsIcon } from "@hugeicons/react"
import { PanelLeftIcon } from "@hugeicons/core-free-icons"

export function SecondaryHeader() {
  const { toggleSidebar } = useSidebar()

  return (
    <div className="bg-background/80 backdrop-blur-md sticky top-14 z-40 flex h-10 w-full items-center border-b px-4">
      <button
        type="button"
        onClick={toggleSidebar}
        className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        <HugeiconsIcon icon={PanelLeftIcon} strokeWidth={1.5} />
      </button>
    </div>
  )
}
