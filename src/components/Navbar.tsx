import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-line">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-5">
        <Link href="/" className="font-display text-xl text-ink">
          Your Name
        </Link>
        <nav className="flex gap-6 text-sm text-muted">
          <Link href="/" className="hover:text-ink transition-colors">Work</Link>
          <Link href="/about" className="hover:text-ink transition-colors">About</Link>
          <Link href="/contact" className="hover:text-ink transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}