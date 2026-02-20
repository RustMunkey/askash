const jobs = [
  { role: "Senior Software Engineer", company: "Company Name", period: "2023 — Present", description: "Placeholder description of what you did, what you built, and the impact you had.", tags: ["Next.js", "TypeScript", "AWS"] },
  { role: "Software Engineer", company: "Company Name", period: "2021 — 2023", description: "Placeholder description of what you did, what you built, and the impact you had.", tags: ["React", "Node.js", "PostgreSQL"] },
  { role: "Junior Developer", company: "Company Name", period: "2020 — 2021", description: "Placeholder description of what you did, what you built, and the impact you had.", tags: ["JavaScript", "Vue", "MySQL"] },
]

export default function ExperiencePage() {
  return (
    <div className="px-10 py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">About</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Experience</h1>
      </div>
      <div className="flex flex-col gap-8">
        {jobs.map((job) => (
          <div key={job.company + job.period} className="border-l-2 border-border pl-6">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <p className="font-medium">{job.role}</p>
                <p className="text-muted-foreground text-sm">{job.company}</p>
              </div>
              <span className="text-muted-foreground text-xs shrink-0">{job.period}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">{job.description}</p>
            <div className="flex flex-wrap gap-2">{job.tags.map((t) => <span key={t} className="bg-muted text-muted-foreground text-xs px-2 py-0.5 rounded">{t}</span>)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
