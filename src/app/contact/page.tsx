export default function ContactPage() {
  return (
    <main className="max-w-xl mx-auto px-6 py-24 text-center">
      <h1 className="font-display text-3xl text-ink mb-6">Get in Touch</h1>
      <p className="text-muted mb-8">For commissions, exhibitions, or just to say hello.</p>
      <div className="flex justify-center gap-6 text-ink">
        <a href="mailto:you@example.com" className="hover:text-accent transition-colors">Email</a>
        <a href="https://instagram.com/yourhandle" className="hover:text-accent transition-colors">Instagram</a>
      </div>
    </main>
  );
}