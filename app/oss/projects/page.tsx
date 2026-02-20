const projects = [
  {
    name: "hono-rpc-client",
    description: "A fully type-safe RPC client for Hono APIs. Infers request/response types directly from your Hono app definition — no codegen step.",
    stars: "1.2k",
    tags: ["TypeScript", "Hono", "RPC"],
    active: true,
  },
  {
    name: "pg-schema-diff",
    description: "A CLI tool that diffs two PostgreSQL schemas and generates a migration SQL file. Useful for comparing staging and production drift.",
    stars: "340",
    tags: ["Go", "PostgreSQL", "CLI"],
    active: true,
  },
  {
    name: "react-use-signals",
    description: "A tiny React hook library for reactive state using the Signals pattern. Zero dependencies, 800 bytes gzipped.",
    stars: "890",
    tags: ["React", "TypeScript", "Signals"],
    active: false,
  },
  {
    name: "dotfiles",
    description: "My personal dotfiles — Neovim config, Zsh setup, Starship prompt, and WezTerm config. Managed with GNU Stow.",
    stars: "210",
    tags: ["Neovim", "Lua", "Shell"],
    active: true,
  },
]

export default function OssProjectsPage() {
  return (
    <div className="px-10 py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Open Source</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Projects</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Open source tools and libraries I built and maintain. Usually scratching my own itch and sharing in case it scratches yours.
        </p>
      </div>

      <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
        {projects.map((p) => (
          <div key={p.name} className="bg-card p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="font-medium font-mono">{p.name}</h2>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-xs">{p.stars} stars</span>
                {p.active && (
                  <span className="bg-green-500/10 text-green-500 text-xs px-2 py-0.5 rounded">Active</span>
                )}
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span key={tag} className="bg-muted text-muted-foreground text-xs px-2 py-0.5 rounded">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
