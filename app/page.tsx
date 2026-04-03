import Image from "next/image";

export default function HomePage() {
  return (
    <section className="space-y-16">
      {/* Hero */}
      <header className="grid items-center gap-8 md:grid-cols-[1fr_auto] md:max-w-4xl md:mx-auto">
        <div className="space-y-5">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-foreground/50">
            Baixista · Contrabaixista
          </p>
          <h1 className="font-serif text-4xl italic leading-tight md:text-5xl">
            Manuel Krapovickas
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-foreground/70">
            {/* Copy a definir — placeholder fins tenir el text final */}
            Més de vint-i-cinc anys sobre els escenaris, entre el jazz,
            el pop, el folk i l'experimentació. Baix elèctric i contrabaix
            com a eines per explorar i construir música de veritat.
          </p>
        </div>

        <div className="relative h-72 w-56 shrink-0 overflow-hidden rounded-md
             border border-black/5 bg-white/80 shadow-sm
             md:h-80 md:w-64 md:mt-6">
          <Image
            src="/images/foto-hero.jpg"
            alt="Manuel Krapovickas"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </header>

      {/* Sous-sections */}
      <div className="grid gap-10 md:grid-cols-2 md:max-w-4xl md:mx-auto">
        <div className="space-y-3">
          <h2 className="font-sans text-xs uppercase tracking-[0.2em] text-foreground/50">
            Pròxims concerts
          </h2>
          <p className="text-sm text-foreground/70">
            Aviat afegirem aquí les properes dates.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="font-sans text-xs uppercase tracking-[0.2em] text-foreground/50">
            Darrers llançaments
          </h2>
          <p className="text-sm text-foreground/70">
            Secció per destacar discos, singles o vídeos recents.
          </p>
        </div>
      </div>
    </section>
  );
}