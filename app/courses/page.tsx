export default function CoursesPage() {
  const courses = [
	{ title: "Leadership Foundations", summary: "Basics of leadership." },
	{ title: "Business Principles", summary: "Core business frameworks." },
	{ title: "Communication & Influence", summary: "Practical communication skills." },
  ];
  return (
	<section className="mx-auto max-w-5xl px-4 py-20">
	  <h1 className="heading text-4xl font-semibold tracking-tight">Programmes</h1>
	  <p className="mt-4 text-foreground/80">Explore public programme offerings. For enrollment or bundles, use the contact form.</p>
	  <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{courses.map((c, i) => (
		  <div key={i} className="card p-6">
			<h3 className="font-medium">{c.title}</h3>
			<p className="text-sm text-foreground/70 line-clamp-2">{c.summary}</p>
		  </div>
		))}
	  </div>
	</section>
  );
}
