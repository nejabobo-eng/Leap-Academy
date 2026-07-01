export default function ResourcesPage() {
  const items = [
	{ title: "Book: Sample Title", description: "A practical guide for growth." },
	{ title: "Article: Principles of Leadership", description: "Foundational ideas for leaders." },
	{ title: "Worksheet: Personal Vision", description: "Clarify goals and next steps." },
  ];
  return (
	<section className="mx-auto max-w-5xl px-4 py-20">
	  <h1 className="heading text-4xl font-semibold tracking-tight">Learning Resources</h1>
	  <p className="mt-4 text-foreground/80">Explore books, articles, and materials developed to support continuous learning and personal growth.</p>
		<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{items.map((r, i) => (
			<div key={i} className="card p-6">
			<h3 className="font-medium">{r.title}</h3>
			<p className="text-sm text-foreground/70">{r.description}</p>
		  </div>
		))}
	  </div>
	</section>
  );
}
