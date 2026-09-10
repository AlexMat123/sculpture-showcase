import { connectDB } from "@/lib/mongodb";
import Sculpture from "@/models/Sculpture";
import Link from "next/link";

export default async function HomePage() {
  let sculptures: any[] = [];

  if (process.env.MONGODB_URI) {
    try {
      await connectDB();
      sculptures = await Sculpture.find().sort({ createdAt: -1 }).lean();
    } catch (error) {
      console.error("[v0] Unable to load sculptures:", error);
    }
  }

  const featured = sculptures[0];
  const rest = sculptures.slice(1);

  if (!featured) {
    return (
      <main className="max-w-5xl mx-auto px-6 py-24 text-center text-muted">
        No sculptures yet — check back soon.
      </main>
    );
  }

  return (
    <main>
      <section className="relative h-[80vh] w-full overflow-hidden">
        <img
          src={featured.images[0]}
          alt={featured.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-6 left-6 bg-background/85 px-4 py-2">
          <p className="font-display text-lg text-ink">{featured.title}</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="font-display text-2xl text-ink mb-10">Selected Work</h1>

        {rest.length === 0 ? (
          <p className="text-muted">More work coming soon.</p>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
            {rest.map((sculpture: any) => (
              <Link
                key={sculpture._id.toString()}
                href={`/sculpture/${sculpture._id}`}
                className="group mb-6 block break-inside-avoid"
              >
                <img src={sculpture.images[0]} alt={sculpture.title} className="w-full" />
                <p className="mt-2 text-sm text-muted group-hover:text-ink transition-colors">
                  {sculpture.title}
                </p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
