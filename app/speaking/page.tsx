import EmbedForm from "@/components/EmbedForm";

export default function SpeakingPage() {
  return (
	<section className="mx-auto max-w-3xl px-4 py-16">
	  <h1 className="text-3xl font-semibold tracking-tight">Public Speaking</h1>
	  <p className="mt-4 text-foreground/80">Topics, videos, past events, and booking form.</p>
	  <EmbedForm url="https://tally.so/r/your-speaking-form" title="Speaking Request" />
	</section>
  );
}
