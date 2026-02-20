const items = [
  {
    name: "Elixir / Phoenix",
    status: "Active",
    description: "Building a side project with LiveView. The actor model and fault tolerance story is genuinely compelling.",
    since: "Jan 2025",
  },
  {
    name: "Zig",
    status: "Active",
    description: "Learning systems programming the hard way. No hidden allocations, explicit error handling everywhere.",
    since: "Nov 2024",
  },
  {
    name: "Nix / NixOS",
    status: "Exploring",
    description: "Declarative system configs and reproducible dev environments. Steep curve but the payoff looks real.",
    since: "Dec 2024",
  },
  {
    name: "WebGPU",
    status: "Exploring",
    description: "GPU compute from the browser. Working through the spec and building small demos.",
    since: "Oct 2024",
  },
  {
    name: "Linear Types",
    status: "Theory",
    description: "Reading papers on type systems — affine types, ownership semantics, how Rust encodes this at the type level.",
    since: "Sep 2024",
  },
]

const statusColors: Record<string, string> = {
  Active: "bg-green-500/10 text-green-500",
  Exploring: "bg-blue-500/10 text-blue-500",
  Theory: "bg-purple-500/10 text-purple-500",
}

export default function LearningPage() {
  return (
    <div className="px-10 py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Stack</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Learning</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Technologies I&apos;m actively picking up, exploring, or thinking about. The list is always longer than the time available.
        </p>
      </div>

      <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
        {items.map((item) => (
          <div key={item.name} className="bg-card p-6 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{item.name}</h2>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-xs">{item.since}</span>
                <span className={`text-xs px-2 py-0.5 rounded ${statusColors[item.status]}`}>
                  {item.status}
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
