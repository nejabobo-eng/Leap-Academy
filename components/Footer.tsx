export default function Footer() {
  return (
	<footer className="border-t bg-zinc-50 dark:bg-black/40">
	  <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-foreground/70">
		<p>&copy; {new Date().getFullYear()} Leap Academy. All rights reserved.</p>
	  </div>
	</footer>
  );
}
