const links = [
  { label: "GitHub", url: "https://github.com/asherwilson", handle: "@asherwilson" },
  { label: "Twitter / X", url: "https://twitter.com/asherwilson", handle: "@asherwilson" },
  { label: "LinkedIn", url: "https://linkedin.com/in/asherwilson", handle: "asherwilson" },
  { label: "Email", url: "mailto:ash@askash.dev", handle: "ash@askash.dev" },
]

const quick = [
  { label: "Location", value: "Remote — EST" },
  { label: "Availability", value: "Open to work" },
  { label: "Pronouns", value: "he/him" },
  { label: "Languages", value: "English (native)" },
]

export default function ProfilePage() {
  return (
    <div className="px-4 py-10 sm:px-10 sm:py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Profile</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-6">Asher Wilson</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Software engineer. I build web applications, infrastructure, and open source tools. Currently available for freelance and contract work.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px border rounded-xl overflow-hidden mb-10">
        {quick.map((q) => (
          <div key={q.label} className="bg-card px-6 py-4 flex flex-col gap-1">
            <p className="text-muted-foreground text-xs">{q.label}</p>
            <p className="font-medium text-sm">{q.value}</p>
          </div>
        ))}
      </div>

      <div>
        <p className="text-muted-foreground text-xs tracking-widest uppercase mb-4">Links</p>
        <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card hover:bg-muted/50 transition-colors px-6 py-4 flex items-center justify-between group"
            >
              <p className="font-medium text-sm">{l.label}</p>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-sm">{l.handle}</span>
                <span className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
