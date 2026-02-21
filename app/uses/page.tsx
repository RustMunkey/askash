const sections = [
  {
    category: "Hardware",
    items: [
      { name: "MacBook Pro 16\" M3 Max", detail: "Main machine. The battery life still surprises me." },
      { name: "LG 27UK850-W 4K", detail: "27\" 4K IPS. Color accurate enough for design work." },
      { name: "Keychron Q3 Pro", detail: "TKL, Gateron G Pro Browns, PBT keycaps. Daily driver." },
      { name: "Logitech MX Master 3S", detail: "The thumb wheel for horizontal scrolling is genuinely great." },
      { name: "Sony WH-1000XM5", detail: "ANC headphones. Get out of my way, I'm in the zone." },
    ],
  },
  {
    category: "Software",
    items: [
      { name: "Neovim", detail: "LazyVim base config, heavily customized. Fast and stays out of the way." },
      { name: "WezTerm", detail: "GPU-accelerated terminal, configured entirely in Lua." },
      { name: "Arc Browser", detail: "Spaces for project separation, command bar for navigation. Replaced Chrome." },
      { name: "Raycast", detail: "Launcher, clipboard history, window management, custom scripts." },
      { name: "Figma", detail: "UI design and prototyping. I live here when working on product." },
      { name: "Linear", detail: "Issue tracking for personal projects. Fast and has sane keyboard shortcuts." },
      { name: "Obsidian", detail: "Notes and thinking. Plain markdown, local-first, just works." },
    ],
  },
  {
    category: "Services",
    items: [
      { name: "Vercel", detail: "Frontend deployments. Zero-config Next.js deploys are still impressive." },
      { name: "Neon", detail: "Serverless PostgreSQL. Branching databases per-PR is a genuine workflow improvement." },
      { name: "Cloudflare", detail: "DNS, CDN, Workers, R2. Gradually becoming the backbone of my infra." },
      { name: "GitHub", detail: "Code hosting, CI/CD, code review. Still the best despite everything." },
      { name: "Doppler", detail: "Secrets management across environments. Never .env files in repos again." },
    ],
  },
]

export default function UsesPage() {
  return (
    <div className="px-4 py-10 sm:px-10 sm:py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Uses</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Uses</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Hardware, software, and services that make up my daily work environment. Opinionated and always being tweaked.
        </p>
      </div>

      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.category}>
            <p className="text-muted-foreground text-xs tracking-widest uppercase mb-3">{section.category}</p>
            <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
              {section.items.map((item) => (
                <div key={item.name} className="bg-card px-6 py-4 flex flex-col gap-1">
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-muted-foreground text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
