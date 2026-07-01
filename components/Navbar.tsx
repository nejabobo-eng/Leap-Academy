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

function NavLink({ href, label }: { href: string; label: string }) {
  const isActive = typeof window !== 'undefined' && window.location.pathname === href;
  return (
	<Link
	  href={href}
	  className={`text-sm px-2 py-1 rounded-md transition-colors ${
		isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'
	  }`}
	>
	  {label}
	</Link>
  );
}

export default function Navbar() {
  return (
	<header className="sticky top-0 z-50 w-full bg-white/95 shadow-sm backdrop-blur">
	  <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20">
		<Link href="/" className="text-lg font-semibold text-primary">The Leap Academy</Link>
		<nav className="hidden items-center gap-1 sm:flex md:gap-2">
		  {links.map((l) => (
			<NavLink key={l.href} href={l.href} label={l.label} />
		  ))}
		</nav>
	  </div>
	</header>
  );
}
