const demos = [
  {
    name: "Infinite Canvas",
    description: "A pannable, zoomable canvas built with React and raw pointer events. No canvas libraries — just math and event handling.",
    tags: ["React", "TypeScript", "Canvas"],
    live: true,
  },
  {
    name: "Typewriter Effect",
    description: "A configurable typewriter animation hook. Handles multiple strings, backspacing, variable speed, and pause states.",
    tags: ["React", "Hooks", "Animation"],
    live: true,
  },
  {
    name: "Virtual List",
    description: "Windowed list rendering for 100k+ items. Smooth scrolling, dynamic row heights, and no layout thrash.",
    tags: ["React", "Performance", "TypeScript"],
    live: true,
  },
  {
    name: "Drag and Drop Grid",
    description: "A drag-and-drop grid layout without using dnd-kit or react-beautiful-dnd. Just Pointer Events API and some math.",
    tags: ["React", "Drag & Drop", "TypeScript"],
    live: false,
  },
  {
    name: "Syntax Highlighter",
    description: "A minimal syntax highlighter using Shiki under the hood, wrapped in a component with copy support and line highlighting.",
    tags: ["React", "Shiki", "TypeScript"],
    live: true,
  },
]

export default function DemosPage() {
  return (
    <div className="px-4 py-10 sm:px-10 sm:py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Playground</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Demos</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Interactive demos of specific UI patterns and concepts. Built to understand how things work, not to be production-ready.
        </p>
      </div>

      <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
        {demos.map((demo) => (
          <div key={demo.name} className="bg-card p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{demo.name}</h2>
              {demo.live && (
                <span className="bg-green-500/10 text-green-500 text-xs px-2 py-0.5 rounded">Live</span>
              )}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{demo.description}</p>
            <div className="flex flex-wrap gap-2">
              {demo.tags.map((tag) => (
                <span key={tag} className="bg-muted text-muted-foreground text-xs px-2 py-0.5 rounded">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
