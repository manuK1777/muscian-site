import Image from "next/image";
import galleryImages from "@/data/gallery.json";

export default function HomePage() {
  const shuffledImages = [...galleryImages].sort(() => Math.random() - 0.5);

  return (
    <section className="space-y-16">
      {/* Hero */}
      <main className="grid items-top gap-8 md:grid-cols-[1fr_auto] md:max-w-4xl md:mx-auto">
        <div className="space-y-5">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-foreground/50">
            Bienvenidos a la página de Manuel Krapovickas
          </p>
          <h1 className="font-serif text-4xl italic leading-tight md:text-3xl">
            Benvinguts,
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-foreground/70">
            {/* Copy a definir — placeholder fins tenir el text final */}
            Més de vint-i-cinc anys sobre els escenaris, entre el jazz, el pop,
            el folk i l'experimentació. Baix elèctric i contrabaix com a eines
            per explorar i construir música de veritat. <br/><br/>Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris.<br/><br/> Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Curabitur
            pretium tincidunt lacus. Nulla gravida orci a odio. <br/><br/>Nullam varius,
            turpis et commodo pharetra, est eros bibendum elit, nec luctus magna
            felis sollicitudin mauris.
          </p>
        </div>

        <div
          className="relative w-64 shrink-0 self-stretch overflow-hidden bg-white/80 p-0.5
             md:w-72"
        >
          <div className="h-full w-full columns-3 gap-0.5">
            {shuffledImages.map((image) => (
              <div
                key={image.src}
                className="mb-1 break-inside-avoid overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt="Foto de Manuel Krapovickas en directe o estudi"
                  width={image.width}
                  height={image.height}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Sous-sections */}
      {/* <div className="grid gap-10 md:grid-cols-2 md:max-w-4xl md:mx-auto">
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
      </div> */}
    </section>
  );
}
