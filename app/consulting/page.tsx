import EmbedForm from "@/components/EmbedForm";

export default function ConsultingPage() {
  return (
	<section className="mx-auto max-w-3xl px-4 py-20">
	  <h1 className="heading text-4xl font-semibold tracking-tight">Services</h1>
	  <p className="mt-4 text-foreground/80">Services, process, and enquiry form.</p>
	  <EmbedForm url="https://tally.so/r/your-consulting-form" title="Consulting Enquiry" />
	</section>
  );
}
