import { connectDB } from "@/lib/mongodb";
import Sculpture from "@/models/Sculpture";
import Link from "next/link";

export default async function HomePage() {
  await connectDB();
  const sculptures = await Sculpture.find().sort({ createdAt: -1 }).lean();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Sculptures</h1>
      {sculptures.length === 0 ? (
        <p>No sculptures yet — check back soon!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sculptures.map((sculpture: any) => (
            <Link key={sculpture._id.toString()} href={`/sculpture/${sculpture._id}`}>
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <img
                  src={sculpture.images[0]}
                  alt={sculpture.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{sculpture.title}</h2>
                  <p className="text-gray-600">{sculpture.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}