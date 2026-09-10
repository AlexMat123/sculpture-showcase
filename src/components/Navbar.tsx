import Link from "next/link";

const links = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-line">
      <div className="page-shell flex items-baseline justify-between gap-6 py-6 sm:py-8">
        <Link href="/" className="font-display text-xl tracking-[-0.02em] text-ink transition-opacity hover:opacity-65 sm:text-2xl">
          Your Name
        </Link>
        <nav aria-label="Primary navigation" className="flex gap-4 text-xs font-medium tracking-[0.08em] text-muted uppercase sm:gap-7">
          {links.map((link) => <Link key={link.href} href={link.href} className="transition-colors hover:text-ink">{link.label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
