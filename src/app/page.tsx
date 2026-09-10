import { connectDB } from "@/lib/mongodb";
import Sculpture from "@/models/Sculpture";
import Link from "next/link";

export default async function HomePage() {
  let sculptures: any[] = [];
  if (process.env.MONGODB_URI) {
    try { await connectDB(); sculptures = await Sculpture.find().sort({ createdAt: -1 }).lean(); }
    catch (error) { console.error("[v0] Unable to load sculptures:", error); }
  }
  const featured = sculptures[0];
  const rest = sculptures.slice(1);

  if (!featured) return <main className="page-shell flex min-h-[60vh] flex-col justify-center py-24"><p className="eyebrow mb-5">The studio archive</p><h1 className="max-w-xl font-display text-4xl leading-tight tracking-[-0.03em] sm:text-6xl">Clay, form, and a little patience.</h1><p className="mt-6 max-w-sm text-muted">No sculptures yet — check back soon.</p></main>;

  return (
    <main>
      <section className="page-shell grid gap-8 py-12 sm:py-16 md:grid-cols-[0.7fr_1.3fr] md:items-end md:gap-16">
        <div className="reveal pb-2"><p className="eyebrow mb-6">Selected work · 2024—25</p><h1 className="max-w-md font-display text-5xl leading-[0.98] tracking-[-0.04em] sm:text-7xl">Objects for a slower gaze.</h1><p className="mt-7 max-w-xs text-muted">Hand-built clay sculptures exploring softness, weight, and the quiet comedy of the human form.</p></div>
        <Link href={`/sculpture/${featured._id}`} className="group reveal" style={{ animationDelay: "120ms" }}><div className="hero-image overflow-hidden bg-surface"><img src={featured.images[0]} alt={featured.title} /></div><div className="flex justify-between gap-4 border-b border-line py-3 text-sm"><span className="font-display text-lg">{featured.title}</span><span className="text-muted transition-colors group-hover:text-ink">View piece ↗</span></div></Link>
      </section>
      <section className="page-shell pb-12 pt-16 sm:pb-20 sm:pt-24"><div className="mb-8 flex items-end justify-between border-b border-line pb-4"><div><p className="eyebrow mb-2">The archive</p><h2 className="font-display text-3xl tracking-[-0.02em]">Selected work</h2></div><span className="text-xs text-muted">{String(sculptures.length).padStart(2, "0")} pieces</span></div>{rest.length === 0 ? <p className="text-muted">More work coming soon.</p> : <div className="gallery-grid grid gap-x-5 gap-y-10 sm:gap-x-8 sm:gap-y-14">{rest.map((sculpture: any) => <Link key={sculpture._id.toString()} href={`/sculpture/${sculpture._id}`} className="group"><img src={sculpture.images[0]} alt={sculpture.title} className="gallery-image w-full bg-surface" /><div className="flex justify-between gap-3 pt-3 text-sm"><span>{sculpture.title}</span><span className="text-muted transition-colors group-hover:text-ink">↗</span></div></Link>)}</div>}</section>
    </main>
  );
}
