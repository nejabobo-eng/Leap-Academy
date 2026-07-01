export default function AboutPage() {
  return (
	<section className="mx-auto max-w-3xl px-4 py-20">
	  <h1 className="heading text-4xl font-semibold tracking-tight">About the Founder & The Leap Academy</h1>
	  <div className="mt-8 grid gap-10">
		<section className="card p-6">
		  <h2 className="text-xl font-semibold">About the Founder</h2>
		  <p className="mt-2 text-foreground/80">
			Mlu is a developer and farmer with a passion for transformation, leadership, and practical wisdom.
			His focus is helping people apply knowledge in real life, not just theory.
		  </p>
		</section>
		<section className="card p-6">
		  <h2 className="text-xl font-semibold">About The Leap Academy</h2>
		  <p className="mt-2 text-foreground/80">
			The Leap Academy is a leadership and personal development platform designed to equip individuals
			with practical leadership, mindset, and life skills that enable real-world progress.
		  </p>
		</section>
		<section className="card p-6">
		  <h2 className="text-xl font-semibold">Focus Areas</h2>
		  <ul className="mt-2 list-disc space-y-1 pl-6 text-foreground/80">
			<li>Leadership development</li>
			<li>Personal discipline and mindset</li>
			<li>Practical life and work skills</li>
			<li>Communication and influence</li>
		  </ul>
		</section>
		<section className="card p-6">
		  <h2 className="text-xl font-semibold">Our Approach</h2>
		  <ul className="mt-2 list-disc space-y-1 pl-6 text-foreground/80">
			<li>Simple teaching</li>
			<li>Practical application</li>
			<li>Focus on results, not theory</li>
		  </ul>
		</section>
		<div className="pt-2">
		  <a href="/contact" className="btn btn-primary">Contact the Academy</a>
		</div>
	  </div>
	</section>
  );
}
