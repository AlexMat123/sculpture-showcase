import { connectDB } from "@/lib/mongodb";
import Sculpture from "@/models/Sculpture";
import { notFound } from "next/navigation";

export default async function SculptureDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  await connectDB();
  const sculpture = await Sculpture.findById(id).lean();

  if (!sculpture) {
    notFound();
  }

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <img src={sculpture.images[0]} alt={sculpture.title} className="w-full rounded-lg mb-6" />
      <h1 className="text-3xl font-bold mb-2">{sculpture.title}</h1>
      <p className="text-gray-700 mb-4">{sculpture.description}</p>
      <div className="text-sm text-gray-500 space-y-1">
        {sculpture.materials && <p>Materials: {sculpture.materials}</p>}
        {sculpture.dimensions && <p>Dimensions: {sculpture.dimensions}</p>}
        {sculpture.dateCreated && (
          <p>Created: {new Date(sculpture.dateCreated).toLocaleDateString()}</p>
        )}
      </div>
    </main>
  );
}