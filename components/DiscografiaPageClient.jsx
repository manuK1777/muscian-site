"use client";

import { useMemo, useState } from "react";
import DiscografiaCard from "@/components/DiscografiaCard";

export default function DiscografiaPageClient({ discs }) {
  const ordenada = useMemo(
    () => [...discs].sort((a, b) => b.any - a.any),
    [discs]
  );

  const [estilActiu, setEstilActiu] = useState(null);

  const estilsDisponibles = useMemo(() => {
    const set = new Set();
    for (const disc of discs) {
      if (Array.isArray(disc.estils)) {
        disc.estils.forEach((e) => set.add(e));
      }
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [discs]);

  const llistaFiltrada = useMemo(() => {
    if (!estilActiu) return ordenada;
    return ordenada.filter((disc) =>
      Array.isArray(disc.estils) ? disc.estils.includes(estilActiu) : false
    );
  }, [ordenada, estilActiu]);

  return (
    <section className="space-y-10">
      <header className="space-y-2">
        <h1 className="font-serif text-3xl italic md:text-4xl">Discografia</h1>
        <p className="max-w-lg text-sm text-foreground/60 leading-relaxed">
          Una selecció dels àlbums i projectes on he participat com a
          baixista, contrabaixista o productor.
        </p>
        {estilsDisponibles.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setEstilActiu(null)}
              className={`rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide transition-colors ${
                !estilActiu
                  ? "border-foreground bg-foreground text-background"
                  : "border-foreground/20 text-foreground/70 hover:border-foreground/40"
              }`}
            >
              Tots
            </button>
            {estilsDisponibles.map((estil) => {
              const actiu = estilActiu === estil;
              return (
                <button
                  key={estil}
                  type="button"
                  onClick={() => setEstilActiu(actiu ? null : estil)}
                  className={`rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide transition-colors ${
                    actiu
                      ? "border-foreground bg-foreground text-background"
                      : "border-foreground/20 text-foreground/70 hover:border-foreground/40"
                  }`}
                >
                  {estil}
                </button>
              );
            })}
          </div>
        )}
      </header>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {llistaFiltrada.map((disc) => (
          <DiscografiaCard key={disc.id} disc={disc} />
        ))}
      </div>
    </section>
  );
}
