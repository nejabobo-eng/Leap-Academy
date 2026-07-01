import Link from "next/link";
import { Globe, Link2, Camera, PlayCircle } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Programmes" },
  { href: "/resources", label: "Resources" },
  { href: "/consulting", label: "Services" },
  { href: "/speaking", label: "Speaking" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
	<footer className="border-t bg-white">
	  <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-4">
		<div>
		  <h3 className="text-lg font-semibold text-primary">The Leap Academy</h3>
		  <p className="mt-3 text-sm text-foreground/70">
			Equipping people and organisations for purposeful growth, leadership, and practical impact.
		  </p>
		  <p className="mt-4 text-xs font-medium">Learn. Lead. Leap.</p>
		</div>
		<div>
		  <h4 className="text-sm font-semibold">Quick Links</h4>
		  <ul className="mt-3 space-y-2 text-sm">
			{quickLinks.map((l) => (
			  <li key={l.href}>
				<Link href={l.href} className="text-foreground/80 hover:text-primary">{l.label}</Link>
			  </li>
			))}
		  </ul>
		</div>
		<div>
		  <h4 className="text-sm font-semibold">Contact</h4>
		  <ul className="mt-3 space-y-2 text-sm text-foreground/80">
			<li>Email: <a className="text-primary hover:underline" href="mailto:info@theleapacademy.org">info@theleapacademy.org</a></li>
			<li>Phone: <a className="text-primary hover:underline" href="tel:+27000000000">+27 00 000 0000</a></li>
			<li>WhatsApp: <a className="text-primary hover:underline" href="https://wa.me/27xxxxxxxxx" target="_blank" rel="noreferrer">+27 xx xxx xxxx</a></li>
			<li>Location: South Africa</li>
		  </ul>
		</div>
		<div>
			<h4 className="text-sm font-semibold">Follow Us</h4>
		  <div className="mt-3 flex gap-3 text-foreground/80">
			<a aria-label="Facebook" href="#" className="grid h-9 w-9 place-items-center rounded-full bg-[#F1F5F9] ring-1 ring-black/5 hover:text-primary"><Globe size={18} /></a>
			<a aria-label="LinkedIn" href="#" className="grid h-9 w-9 place-items-center rounded-full bg-[#F1F5F9] ring-1 ring-black/5 hover:text-primary"><Link2 size={18} /></a>
			<a aria-label="Instagram" href="#" className="grid h-9 w-9 place-items-center rounded-full bg-[#F1F5F9] ring-1 ring-black/5 hover:text-primary"><Camera size={18} /></a>
			<a aria-label="YouTube" href="#" className="grid h-9 w-9 place-items-center rounded-full bg-[#F1F5F9] ring-1 ring-black/5 hover:text-primary"><PlayCircle size={18} /></a>
		  </div>
		</div>
	  </div>
	  <div className="border-t">
		<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-xs text-foreground/70">
		  <p>&copy; {new Date().getFullYear()} The Leap Academy. All rights reserved.</p>
		  <p>Learn. Lead. Leap.</p>
		</div>
	  </div>
	</footer>
  );
}
