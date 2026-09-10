export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="page-shell flex flex-col gap-5 py-8 text-xs tracking-[0.04em] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Your Name · Based in Your City</p>
        <div className="flex gap-5">
          <a href="mailto:you@example.com" className="transition-colors hover:text-ink">Email</a>
          <a href="https://instagram.com/yourhandle" className="transition-colors hover:text-ink">Instagram</a>
        </div>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
