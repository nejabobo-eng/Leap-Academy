export default function CoursesPage() {
  const courses = [
	{ title: "Leadership Foundations", summary: "Basics of leadership." },
	{ title: "Business Principles", summary: "Core business frameworks." },
	{ title: "Communication & Influence", summary: "Practical communication skills." },
  ];
  return (
	<section className="mx-auto max-w-5xl px-4 py-16">
	  <h1 className="text-3xl font-semibold tracking-tight">Courses</h1>
	  <p className="mt-4 text-foreground/80">Explore public course offerings. For enrollment or bundles, use the contact form.</p>
	  <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{courses.map((c, i) => (
		  <div key={i} className="rounded-lg border p-6">
			<h3 className="font-medium">{c.title}</h3>
			<p className="text-sm text-foreground/70 line-clamp-2">{c.summary}</p>
		  </div>
		))}
	  </div>
	</section>
  );
}
