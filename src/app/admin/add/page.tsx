"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ImageUploader from "@/components/ImageUploader";

export default function AddSculpturePage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
    materials: "",
    dimensions: "",
    secret: "",
  });
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/sculptures", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, images: [imageUrl] }),
    });

    setLoading(false);
    if (res.ok) {
      router.push("/");
    } else {
      alert("Something went wrong — check your password and try again.");
    }
  }

  return (
    <main className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add a Sculpture</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input placeholder="Title" required className="w-full border p-2 rounded"
          value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <textarea placeholder="Description" required className="w-full border p-2 rounded"
          value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <input placeholder="Materials" className="w-full border p-2 rounded"
          value={form.materials} onChange={(e) => setForm({ ...form, materials: e.target.value })} />
        <input placeholder="Dimensions" className="w-full border p-2 rounded"
          value={form.dimensions} onChange={(e) => setForm({ ...form, dimensions: e.target.value })} />
        <ImageUploader onUpload={setImageUrl} />
        <input type="password" placeholder="Admin password" required className="w-full border p-2 rounded"
          value={form.secret} onChange={(e) => setForm({ ...form, secret: e.target.value })} />
        <button type="submit" disabled={loading || !imageUrl}
          className="bg-black text-white px-4 py-2 rounded disabled:opacity-50">
          {loading ? "Saving..." : "Save Sculpture"}
        </button>
      </form>
    </main>
  );
}