const languages = [
  {
    name: "TypeScript",
    level: "Expert",
    years: "5 yrs",
    description: "Primary language for everything. Frontend, backend, scripts — if TS can do it, that's what I'm reaching for.",
  },
  {
    name: "Python",
    level: "Proficient",
    years: "4 yrs",
    description: "Data pipelines, scripting, and quick backend services. Great ecosystem, bad packaging story.",
  },
  {
    name: "Rust",
    level: "Intermediate",
    years: "2 yrs",
    description: "CLIs, performance-critical tooling, and WebAssembly. The borrow checker is brutal but the output is worth it.",
  },
  {
    name: "Go",
    level: "Intermediate",
    years: "2 yrs",
    description: "Microservices and network utilities. Love the simplicity. Miss generics sometimes, but they're here now.",
  },
  {
    name: "SQL",
    level: "Proficient",
    years: "5 yrs",
    description: "PostgreSQL is my database of choice. Window functions, CTEs, explain analyze — I actually enjoy writing SQL.",
  },
  {
    name: "Bash",
    level: "Proficient",
    years: "5 yrs",
    description: "Glue for CI scripts, dotfiles, and deployment pipelines. Not elegant, but it works everywhere.",
  },
]

const levelColors: Record<string, string> = {
  Expert: "bg-primary/10 text-primary",
  Proficient: "bg-blue-500/10 text-blue-500",
  Intermediate: "bg-amber-500/10 text-amber-500",
}

export default function LanguagesPage() {
  return (
    <div className="px-10 py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Stack</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Languages</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Programming languages I use regularly — not every language I&apos;ve touched, just the ones that show up in my actual work.
        </p>
      </div>

      <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
        {languages.map((lang) => (
          <div key={lang.name} className="bg-card p-6 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{lang.name}</h2>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-xs">{lang.years}</span>
                <span className={`text-xs px-2 py-0.5 rounded ${levelColors[lang.level]}`}>
                  {lang.level}
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{lang.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
