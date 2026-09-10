export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-display text-3xl text-ink mb-8">About</h1>
      <div className="grid sm:grid-cols-[200px_1fr] gap-10">
        <img
          src="/your-portrait.jpg"
          alt="Portrait of the artist"
          className="w-full aspect-square object-cover"
        />
        <div className="space-y-4 text-ink leading-relaxed">
          <p>
            Write a couple of paragraphs here about who you are, how you started working with
            clay, and what draws you to the material. Visitors want to hear it in your own voice.
          </p>
          <p>
            A second paragraph on your process, or the themes and forms you keep returning to,
            gives helpful context to the pieces in your gallery.
          </p>
        </div>
      </div>
    </main>
  );
}