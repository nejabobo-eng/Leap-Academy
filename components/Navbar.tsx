"use client";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Programmes" },
  { href: "/resources", label: "Resources" },
  { href: "/speaking", label: "Speaking" },
  { href: "/consulting", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
	<header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur dark:bg-black/60">
	  <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
		<Link href="/" className="text-base font-semibold">Leap Academy</Link>
		<nav className="hidden gap-4 text-sm sm:flex">
		  {links.map((l) => (
			<Link key={l.href} href={l.href} className="text-foreground/80 hover:text-foreground">
			  {l.label}
			</Link>
		  ))}
		</nav>
	  </div>
	</header>
  );
}
