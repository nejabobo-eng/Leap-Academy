import EmbedForm from "@/components/EmbedForm";

export default function ContactPage() {
  return (
	<section className="mx-auto max-w-3xl px-4 py-20">
	  <h1 className="heading text-4xl font-semibold tracking-tight">Contact</h1>
	  <p className="mt-4 text-foreground/80">Use the form below or WhatsApp to reach out.</p>
	  {/* Replace the URL with your Tally/Formspree/Google Form link */}
	  <EmbedForm url="https://tally.so/r/your-form-id" title="Contact Form" />
		<div className="mt-6 text-sm">
		<a
		  href="https://wa.me/27xxxxxxxxx"
			className="text-primary underline hover:opacity-80"
		  target="_blank"
		  rel="noreferrer"
		>
		  WhatsApp us
		</a>
	  </div>
	</section>
  );
}
