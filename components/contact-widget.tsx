"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { HugeiconsIcon } from "@hugeicons/react"
import { Cancel01Icon, Mail01Icon, Calendar03Icon, MessageQuestionIcon } from "@hugeicons/core-free-icons"

const options = [
  {
    label: "Send a message",
    description: "Contact form",
    href: "/contact",
    icon: MessageQuestionIcon,
  },
  {
    label: "Email directly",
    description: "ash@askash.dev",
    href: "mailto:ash@askash.dev",
    icon: Mail01Icon,
    external: true,
  },
  {
    label: "Book a call",
    description: "Schedule 30 min",
    href: "https://cal.com/asherwilson",
    icon: Calendar03Icon,
    external: true,
  },
]

export function ContactWidget() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="fixed bottom-14 right-5 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="flex flex-col gap-px rounded-xl border bg-background/95 backdrop-blur-md shadow-lg overflow-hidden w-52"
          >
            {options.map((opt) => {
              const Comp = opt.external ? "a" : Link
              const extraProps = opt.external
                ? { href: opt.href, target: "_blank", rel: "noopener noreferrer" }
                : { href: opt.href }
              return (
                <Comp
                  key={opt.label}
                  {...(extraProps as React.ComponentProps<"a">)}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors group"
                >
                  <HugeiconsIcon icon={opt.icon} strokeWidth={1.5} className="size-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium leading-none mb-0.5">{opt.label}</p>
                    <p className="text-muted-foreground text-xs truncate">{opt.description}</p>
                  </div>
                </Comp>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full border bg-background/90 backdrop-blur-md px-3.5 py-2 text-xs font-medium shadow-lg hover:bg-muted transition-colors"
      >
        <HugeiconsIcon
          icon={open ? Cancel01Icon : Mail01Icon}
          strokeWidth={1.5}
          className="size-3.5"
        />
        {open ? "Close" : "Contact me"}
      </button>
    </div>
  )
}
