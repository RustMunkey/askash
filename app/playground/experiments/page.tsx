const experiments = [
  {
    name: "Reactive Query Engine",
    status: "In Progress",
    description: "A toy reactive query engine in TypeScript. Inspired by TanStack Query internals — building it from scratch to understand how it works.",
    tags: ["TypeScript", "Signals", "Reactive"],
  },
  {
    name: "Terminal UI Framework",
    status: "Paused",
    description: "Ink-inspired TUI framework for Bun. Building the layout engine first — flexbox in the terminal is weirder than you'd expect.",
    tags: ["Bun", "Rust", "TUI"],
  },
  {
    name: "CRDT Text Editor",
    status: "In Progress",
    description: "A collaborative text editor using CRDTs for conflict resolution. Currently implementing the Yjs CRDT model from scratch.",
    tags: ["TypeScript", "CRDT", "WebSockets"],
  },
  {
    name: "GPU Particle System",
    status: "Paused",
    description: "WebGPU compute shaders for 1M+ particles. Most of the time was spent fighting the shader language, not the physics.",
    tags: ["WebGPU", "WGSL", "TypeScript"],
  },
  {
    name: "Zero-dependency HTTP Server",
    status: "Done",
    description: "Writing an HTTP/1.1 server using only Node.js net module. No frameworks, no middleware — just sockets and RFC reading.",
    tags: ["Node.js", "HTTP", "TypeScript"],
  },
]

const statusColors: Record<string, string> = {
  "In Progress": "bg-green-500/10 text-green-500",
  Paused: "bg-amber-500/10 text-amber-500",
  Done: "bg-blue-500/10 text-blue-500",
}

export default function ExperimentsPage() {
  return (
    <div className="px-4 py-10 sm:px-10 sm:py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Playground</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Experiments</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Technical explorations and half-built ideas. Mostly for learning — the process matters more than shipping something polished.
        </p>
      </div>

      <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
        {experiments.map((exp) => (
          <div key={exp.name} className="bg-card p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{exp.name}</h2>
              <span className={`text-xs px-2 py-0.5 rounded ${statusColors[exp.status]}`}>
                {exp.status}
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span key={tag} className="bg-muted text-muted-foreground text-xs px-2 py-0.5 rounded">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
