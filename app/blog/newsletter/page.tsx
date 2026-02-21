export default function NewsletterPage() {
  return (
    <div className="px-4 py-10 sm:px-10 sm:py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Blog</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Newsletter</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">Occasional emails on software, design, and what I'm building. No spam, unsubscribe any time.</p>
      </div>
      <form className="flex flex-col gap-3 max-w-md">
        <input type="email" placeholder="your@email.com" className="bg-muted border border-border rounded-lg px-4 py-2.5 text-sm outline-none focus:border-foreground/30 transition-colors" />
        <button type="submit" className="bg-primary text-primary-foreground hover:opacity-90 transition-opacity px-5 py-2.5 rounded-lg text-sm font-medium">Subscribe</button>
      </form>
    </div>
  )
}
