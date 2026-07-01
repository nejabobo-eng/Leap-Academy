import Link from "next/link";

export default function NotFound() {
  return (
	<section className="mx-auto max-w-3xl px-4 py-24 text-center">
	  <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
	  <p className="mt-3 text-foreground/80">The page you’re looking for doesn’t exist or has moved.</p>
	  <div className="mt-6">
		<Link href="/" className="rounded-md border px-4 py-2 text-sm">Back to Home</Link>
	  </div>
	</section>
  );
}
