export const metadata = {
  title: 'Contacto | Manuel K',
};

export default function ContactoPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-foreground/60">
          Contacto
        </p>
        <h1 className="font-serif text-3xl italic md:text-4xl">Contacto</h1>
        <p className="max-w-2xl text-sm text-foreground/70">
          Información para booking, prensa y otros contactos profesionales.
        </p>
      </header>
      <div className="space-y-4 text-sm text-foreground/80">
        <p>
          Para conciertos, prensa u otras consultas, puedes escribir a:
        </p>
        <p className="font-sans text-base">
          Email:{' '}
          <a
            href="mailto:tu-email@example.com"
            className="border-b border-black/30 pb-0.5 text-foreground hover:text-brand"
          >
            tu-email@example.com
          </a>
        </p>
        <p>
          También puedes incluir aquí enlaces a redes sociales o a un formulario externo si lo deseas.
        </p>
      </div>
    </section>
  );
}
