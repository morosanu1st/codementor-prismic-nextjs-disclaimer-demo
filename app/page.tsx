import { getDisclaimer } from "@/lib/get-disclaimer";
import { RichText } from "@/lib/rich-text";

export default async function HomePage() {
  const doc = await getDisclaimer();
  const severity = doc.data.severity ?? "info";

  return (
    <main>
      <h1>Prismic → Next.js disclaimer demo</h1>
      <p className="lead">
        Mock CMS document rendered with App Router. Swap{" "}
        <code>getDisclaimer()</code> for a real Prismic client when you connect a
        repository.
      </p>

      <article className={`disclaimer ${severity}`} aria-label="Site disclaimer">
        <span className="badge">{severity}</span>
        {doc.data.title ? <h2>{doc.data.title}</h2> : null}
        <RichText field={doc.data.body} />
        {doc.data.last_updated ? (
          <p className="meta">Last updated: {doc.data.last_updated}</p>
        ) : null}
      </article>

      <p className="footer-note">
        Teaching sample for Codementor (Prismic + Next.js). No API tokens in this
        repo.
      </p>
    </main>
  );
}
