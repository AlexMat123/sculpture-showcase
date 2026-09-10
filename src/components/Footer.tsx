export default function Footer() {
  return (
    <footer className="border-t border-line mt-24">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>Your Name · Based in Your City</p>
        <div className="flex gap-4">
          <a href="mailto:you@example.com" className="hover:text-ink transition-colors">Email</a>
          <a href="https://instagram.com/yourhandle" className="hover:text-ink transition-colors">Instagram</a>
        </div>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}