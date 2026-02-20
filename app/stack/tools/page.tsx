const categories = [
  {
    category: "Editor",
    tools: [
      { name: "Neovim", description: "Main editor. LazyVim config, fast as hell, never going back." },
      { name: "VS Code", description: "For pair programming and when someone needs screen share." },
    ],
  },
  {
    category: "Terminal",
    tools: [
      { name: "WezTerm", description: "GPU-accelerated, configured in Lua. Replaced iTerm2 and never looked back." },
      { name: "Zsh + Starship", description: "Minimal prompt, fast startup. Starship handles the git context display." },
    ],
  },
  {
    category: "Dev Tools",
    tools: [
      { name: "Docker", description: "Containers for local dev environments and production deployments." },
      { name: "Bun", description: "Package manager, runtime, bundler. Replacing Node in most of my projects." },
      { name: "pnpm", description: "For monorepos and projects still on Node. Workspace support is excellent." },
    ],
  },
  {
    category: "Design",
    tools: [
      { name: "Figma", description: "Wireframes to high-fidelity. Great for component libraries and handoff." },
      { name: "Excalidraw", description: "Whiteboarding, architecture diagrams, quick sketches." },
    ],
  },
  {
    category: "Productivity",
    tools: [
      { name: "Raycast", description: "Launcher, clipboard history, snippets. Alfred replacement that actually keeps up." },
      { name: "Linear", description: "Issue tracking. Opinionated and fast — exactly what project management should be." },
    ],
  },
]

export default function ToolsPage() {
  return (
    <div className="px-10 py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Stack</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Tools</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Software and utilities in my daily workflow. Curated over years of trying things, hating some, and keeping what actually helps.
        </p>
      </div>

      <div className="space-y-6">
        {categories.map((cat) => (
          <div key={cat.category}>
            <p className="text-muted-foreground text-xs tracking-widest uppercase mb-3">{cat.category}</p>
            <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
              {cat.tools.map((tool) => (
                <div key={tool.name} className="bg-card p-6 flex flex-col gap-1.5">
                  <p className="font-medium">{tool.name}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
