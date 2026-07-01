export default function EmbedForm({ url, title }: { url: string; title?: string }) {
  return (
	<div className="mt-6">
	  <iframe
		src={url}
		title={title || "Form"}
		className="h-[900px] w-full rounded-md border"
		loading="lazy"
	  />
	</div>
  );
}
