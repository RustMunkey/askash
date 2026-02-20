const offerings = [
  {
    title: "Authentication Hardening",
    description: "Secure session management, CSRF protection, rate limiting on auth endpoints, account lockout policies, and MFA implementation.",
  },
  {
    title: "HTTP Security Headers",
    description: "CSP, HSTS, X-Frame-Options, referrer policy, and permissions policy — configured correctly for your specific application, not just copied from a template.",
  },
  {
    title: "Secrets Management",
    description: "Rotating exposed secrets, migrating from hardcoded env vars to proper vaults (AWS Secrets Manager, Doppler), and auditing secret sprawl.",
  },
  {
    title: "Database Security",
    description: "Row-level security policies, principle of least privilege on DB roles, encryption at rest, and connection security configuration.",
  },
  {
    title: "Container & Runtime Security",
    description: "Non-root containers, read-only filesystems, resource limits, network policies, and image scanning in CI to stop vulnerable images from deploying.",
  },
]

export default function HardeningPage() {
  return (
    <div className="px-10 py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Security</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Hardening</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Reducing attack surface and making the most likely vulnerabilities significantly harder to exploit. Defense in depth, not security theater.
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
