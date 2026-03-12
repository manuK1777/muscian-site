import concerts from '@/data/concerts.json';

export const metadata = {
  title: 'Próximos conciertos | Manuel K',
};

type Concert = {
  date: string;
  city: string;
  venue: string;
  link?: string;
};

export default function ProximosConciertosPage() {
  const items = concerts as Concert[];

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-foreground/60">
          Directo
        </p>
        <h1 className="font-serif text-3xl italic md:text-4xl">Próximos conciertos</h1>
        <p className="max-w-2xl text-sm text-foreground/70">
          Gestionados desde un archivo JSON local para que sea fácil de actualizar.
        </p>
      </header>
      <div className="space-y-3">
        {items.length === 0 && (
          <p className="text-sm text-foreground/70">Por ahora no hay fechas anunciadas.</p>
        )}
        {items.map((show) => (
          <div
            key={`${show.date}-${show.city}-${show.venue}`}
            className="flex flex-col justify-between gap-2 border-b border-black/5 pb-3 last:border-none md:flex-row md:items-center"
          >
            <div className="space-y-1">
              <p className="font-sans text-sm uppercase tracking-[0.18em] text-foreground/80">
                {show.date}
              </p>
              <p className="font-serif text-lg italic">
                {show.city} – {show.venue}
              </p>
            </div>
            {show.link && (
              <a
                href={show.link}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center justify-center border border-black/20 px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] text-foreground/80 hover:bg-black hover:text-white md:mt-0"
              >
                Entradas
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
