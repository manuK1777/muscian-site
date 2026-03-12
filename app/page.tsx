export default function HomePage() {
  return (
    <section className="space-y-10">
      <header className="space-y-4">
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-foreground/60">
          Músico 
        </p>
        <h1 className="font-serif text-4xl italic md:text-5xl">Manuel K</h1>
        <p className="max-w-2xl text-base leading-relaxed text-foreground/80">
          Texto introductorio corto sobre tu proyecto musical. Podemos ajustar este copy más tarde.
        </p>
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="font-sans text-sm uppercase tracking-[0.2em] text-foreground/70">
            Próximos conciertos
          </h2>
          <p className="text-sm text-foreground/80">
            Pronto añadiremos aquí tus próximas fechas a partir del archivo JSON.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="font-sans text-sm uppercase tracking-[0.2em] text-foreground/70">
            Últimos lanzamientos
          </h2>
          <p className="text-sm text-foreground/80">
            Sección para destacar discos, singles o vídeos recientes.
          </p>
        </div>
      </div>
    </section>
  );
}
