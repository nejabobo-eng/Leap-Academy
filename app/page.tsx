export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4">
      {/* Hero */}
      <section className="py-16">
        <p className="text-xs uppercase tracking-wide text-foreground/70">
          Empowering Leaders • Equipping Communities • Inspiring Transformation
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
          Developing People. Strengthening Leadership. Transforming Communities.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-foreground/80">
          The Leap Academy exists to equip individuals, leaders, entrepreneurs, and organisations with
          practical knowledge, values, and skills that inspire lasting personal and professional growth.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/courses" className="rounded-md border px-4 py-2 text-sm">Explore Our Programmes</a>
          <a href="/contact" className="rounded-md border px-4 py-2 text-sm">Contact the Academy</a>
        </div>
      </section>

      {/* About Preview */}
      <section className="border-t py-12">
        <h2 className="text-xl font-semibold">About The Leap Academy</h2>
        <p className="mt-3 max-w-3xl text-foreground/80">
          The Leap Academy is a leadership and development institution committed to helping people reach their
          full potential through practical learning, mentoring, and meaningful engagement. Founded on the belief
          that growth begins with knowledge applied, the academy creates opportunities for individuals and
          organisations to develop with purpose and confidence.
        </p>
        <div className="mt-5">
          <a href="/about" className="rounded-md border px-4 py-2 text-sm">Learn More About Us</a>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="border-t py-12">
        <h2 className="text-xl font-semibold">What We Do</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h3 className="font-medium">Leadership Development</h3>
            <p className="text-sm text-foreground/70">
              Develop confident, ethical, and effective leaders equipped to influence their communities and organisations.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="font-medium">Training & Workshops</h3>
            <p className="text-sm text-foreground/70">
              Interactive learning experiences designed to build practical knowledge and real-world skills.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="font-medium">Speaking Engagements</h3>
            <p className="text-sm text-foreground/70">
              Inspirational and educational presentations tailored for schools, churches, businesses, and community organisations.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="font-medium">Consulting</h3>
            <p className="text-sm text-foreground/70">
              Professional guidance that helps individuals and organisations identify challenges, develop strategies, and achieve meaningful results.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="border-t py-12">
        <h2 className="text-xl font-semibold">Our Approach</h2>
        <p className="mt-3 max-w-3xl text-foreground/80">
          We believe that education should produce transformation, not just information. Every programme, workshop, and
          engagement is designed to provide practical insights that can be applied immediately in everyday life, leadership, and work.
          Our commitment is to inspire growth, encourage excellence, and help people become effective leaders in every sphere of society.
        </p>
      </section>

      {/* Featured Resources */}
      <section className="border-t py-12">
        <h2 className="text-xl font-semibold">Learning Resources</h2>
        <p className="mt-3 max-w-3xl text-foreground/80">
          Explore books, articles, and educational materials developed to support continuous learning and personal growth.
        </p>
        <div className="mt-5">
          <a href="/resources" className="rounded-md border px-4 py-2 text-sm">View Resources</a>
        </div>
      </section>

      {/* Speaking Invitation */}
      <section className="border-t py-12">
        <h2 className="text-xl font-semibold">Invite the Founder to Speak</h2>
        <p className="mt-3 max-w-3xl text-foreground/80">
          The founder of The Leap Academy is available to speak at conferences, schools, churches, businesses, leadership events,
          and community programmes. Every presentation is tailored to encourage, educate, and equip audiences for lasting impact.
        </p>
        <div className="mt-5">
          <a href="/speaking" className="rounded-md border px-4 py-2 text-sm">Request a Speaking Engagement</a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t py-12">
        <h2 className="text-xl font-semibold">Begin Your Journey</h2>
        <p className="mt-3 max-w-3xl text-foreground/80">
          Whether you are seeking leadership development, professional guidance, training, or an inspiring speaker, The Leap Academy is ready to partner with you.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href="/contact" className="rounded-md border px-4 py-2 text-sm">Contact the Academy</a>
          <a href="/consulting" className="rounded-md border px-4 py-2 text-sm">Explore Our Services</a>
        </div>
      </section>

      {/* Footer Motto */}
      <section className="border-t py-12">
        <p className="text-center text-sm font-medium">Learn. Lead. Leap.</p>
      </section>
    </div>
  );
}
