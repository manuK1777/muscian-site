export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-white/80">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-2 px-4 py-4 text-xs text-foreground/60 md:flex-row md:px-8">
        <p>&copy; {year} Manuel K. Todos los derechos reservados.</p>
        <p className="uppercase tracking-[0.2em]">
          Sitio construido con Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
