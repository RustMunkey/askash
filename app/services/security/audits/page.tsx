const offerings = [
  {
    title: "Application Security Review",
    description: "Manual code review looking for injection vulnerabilities, broken auth, insecure deserialization, and OWASP Top 10 issues in your codebase.",
  },
  {
    title: "Dependency Auditing",
    description: "Scanning and triaging vulnerable dependencies — not just running npm audit, but understanding which CVEs actually matter for your threat model.",
  },
  {
    title: "API Security Testing",
    description: "Auth bypass, IDOR, rate limiting gaps, and over-permissive endpoints. Testing the API the way an attacker would, not the way the docs say it works.",
  },
  {
    title: "Infrastructure Review",
    description: "Reviewing cloud configs for public S3 buckets, overly permissive IAM roles, exposed ports, and missing encryption at rest and in transit.",
  },
  {
    title: "Security Report & Remediation",
    description: "A clear, prioritized report with severity ratings, reproduction steps, and specific remediation guidance — not vague recommendations.",
  },
]

export default function AuditsPage() {
  return (
    <div className="px-4 py-10 sm:px-10 sm:py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Security</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Audits</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Security reviews that find real vulnerabilities in real applications — done by someone who builds the kind of software being audited.
        </p>
      </div>

      <div className="flex flex-col gap-px border rounded-xl overflow-hidden">
        {offerings.map((o) => (
          <div key={o.title} className="bg-card p-6 flex flex-col gap-2">
            <p className="font-medium">{o.title}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{o.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
