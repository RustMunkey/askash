const offerings = [
  {
    title: "Component Library",
    description: "A full set of reusable UI components built on Radix primitives or shadcn/ui. Accessible, themeable, and documented with Storybook.",
  },
  {
    title: "Design Token Architecture",
    description: "Color, spacing, typography, and shadow tokens structured for both Figma and code. One source of truth across design and engineering.",
  },
  {
    title: "Theming & Dark Mode",
    description: "CSS variable-based theming that supports light, dark, and custom brand themes without CSS duplication or runtime overhead.",
  },
  {
    title: "Documentation Site",
    description: "A living documentation site — component usage, props, accessibility notes, and copy-paste examples your team will actually use.",
  },
  {
    title: "Migration from Existing Systems",
    description: "Migrating from a legacy CSS codebase or inconsistent component library. I audit what exists, define the target state, and migrate incrementally.",
  },
]

export default function SystemsPage() {
  return (
    <div className="px-10 py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Design</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Design Systems</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Component libraries and token systems that make your product consistent, your team fast, and your codebase maintainable.
        </p>
      </div>

      <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
        {offerings.map((o) => (
          <div key={o.title} className="bg-card p-6 flex flex-col gap-2">
            <p className="font-medium">{o.title}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{o.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
