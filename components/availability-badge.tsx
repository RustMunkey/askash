"use client"

import Link from "next/link"

// Toggle this to reflect your actual availability
const AVAILABLE = true

export function AvailabilityBadge() {
  return (
    <Link
      href="/contact/hire"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border bg-background/90 backdrop-blur-md px-3.5 py-2 text-xs font-medium shadow-lg hover:bg-muted transition-colors"
    >
      <span className="relative flex size-2">
        {AVAILABLE && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
        )}
        <span className={`relative inline-flex size-2 rounded-full ${AVAILABLE ? "bg-green-500" : "bg-muted-foreground"}`} />
      </span>
      {AVAILABLE ? "Available for work" : "Not taking projects"}
    </Link>
  )
}
