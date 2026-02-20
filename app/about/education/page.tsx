const education = [
  { degree: "B.S. Computer Science", school: "University Name", period: "2016 — 2020", description: "Placeholder — your major, minor, relevant coursework, clubs, or anything worth mentioning." },
  { degree: "Certification Name", school: "Issuing Organization", period: "2022", description: "Placeholder — what the cert covers and why you got it." },
]

export default function EducationPage() {
  return (
    <div className="px-10 py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">About</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Education</h1>
      </div>
      <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
        {education.map((e) => (
          <div key={e.degree} className="bg-card p-6 flex flex-col gap-2">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium">{e.degree}</p>
                <p className="text-muted-foreground text-sm">{e.school}</p>
              </div>
              <span className="text-muted-foreground text-xs shrink-0">{e.period}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
