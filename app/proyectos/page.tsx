import { getMarkdownPage } from '@/lib/markdown';

export const metadata = {
  title: 'Proyectos | Manuel K',
};

export default async function ProyectosPage() {
  const page = await getMarkdownPage('proyectos');

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-foreground/60">
          Proyectos
        </p>
        <h1 className="font-serif text-3xl italic md:text-4xl">{page.data.title}</h1>
        {page.data.subtitle && (
          <p className="max-w-2xl text-sm text-foreground/70">{page.data.subtitle}</p>
        )}
      </header>
      <article
        className="rich-text prose max-w-none font-sans text-base leading-relaxed text-foreground/80 prose-p:mb-4 prose-headings:font-serif prose-headings:italic"
        dangerouslySetInnerHTML={{ __html: page.contentHtml }}
      />
    </section>
  );
}
