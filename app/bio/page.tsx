import { getMarkdownPage } from '@/lib/markdown';

export const metadata = {
  title: 'Bio | Manuel K',
};

export default async function BioPage() {
  const bio = await getMarkdownPage('bio');

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-foreground/60">
          Bio
        </p>
        <h1 className="font-serif text-3xl italic md:text-4xl">{bio.data.title}</h1>
      </header>
      <article
        className="rich-text prose max-w-none font-sans text-base leading-relaxed text-foreground/80 prose-p:mb-4 prose-headings:font-serif prose-headings:italic"
        dangerouslySetInnerHTML={{ __html: bio.contentHtml }}
      />
    </section>
  );
}
