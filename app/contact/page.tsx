export default function ContactPage() {
  return (
    <div className="px-4 py-10 sm:px-10 sm:py-16 max-w-3xl">
      <div className="mb-12">
        <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">Contact</p>
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">Get in Touch</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">Have a project in mind or just want to talk shop? I'd love to hear from you.</p>
      </div>
      <form className="flex flex-col gap-4 max-w-lg">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium">Name</label>
          <input type="text" placeholder="Your name" className="bg-muted border border-border rounded-lg px-4 py-2.5 text-sm outline-none focus:border-foreground/30 transition-colors" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium">Email</label>
          <input type="email" placeholder="your@email.com" className="bg-muted border border-border rounded-lg px-4 py-2.5 text-sm outline-none focus:border-foreground/30 transition-colors" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium">Message</label>
          <textarea rows={5} placeholder="What's on your mind?" className="bg-muted border border-border rounded-lg px-4 py-2.5 text-sm outline-none focus:border-foreground/30 transition-colors resize-none" />
        </div>
        <button type="submit" className="bg-primary text-primary-foreground hover:opacity-90 transition-opacity px-5 py-2.5 rounded-lg text-sm font-medium self-start">Send Message</button>
      </form>
    </div>
  )
}
