export const metadata = {
  title: 'Press | Manuel K',
};

export default function PressPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-foreground/60">
          Press
        </p>
        <h1 className="font-serif text-3xl italic md:text-4xl">Press kit</h1>
        <p className="max-w-2xl text-sm text-foreground/70">
          Espacio para citas de prensa, notas oficiales, fotos descargables y dossier.
        </p>
      </header>
      <div className="space-y-4 text-sm text-foreground/80">
        <p>
          Aquí podrás añadir más adelante enlaces a carpetas con fotos en alta resolución,
          biografía corta para medios y PDFs con tu dossier.
        </p>
      </div>
    </section>
  );
}
