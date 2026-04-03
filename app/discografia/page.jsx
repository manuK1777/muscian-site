import DiscografiaCard from "@/components/DiscografiaCard";
import discografia from "@/data/discografia.json";

export const metadata = {
  title: "Discografia — Manuel Krapovickas",
};

export default function DiscografiaPage() {
  const ordenada = [...discografia].sort((a, b) => b.any - a.any);

  return (
    <section className="space-y-10">
      <header className="space-y-2">
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-foreground/50">
          Discografia
        </p>
        <h1 className="font-serif text-3xl italic md:text-4xl">
          Treballs discogràfics
        </h1>
        <p className="max-w-lg text-sm text-foreground/60 leading-relaxed">
          Una selecció dels àlbums i projectes on he participat com a
          baixista, contrabaixista o productor.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {ordenada.map((disc) => (
          <DiscografiaCard key={disc.id} disc={disc} />
        ))}
      </div>
    </section>
  );
}
