import Image from "next/image";

export default function DiscografiaCard({ disc }) {
  return (
    <a
      href={disc.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3"
    >
      {/* Portada */}
      <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-foreground/5">
        <Image
          src={disc.portada}
          alt={`${disc.titol} — ${disc.artista}`}
          fill
          className="object-cover transition-opacity duration-300 group-hover:opacity-80"
        />
      </div>

      {/* Info */}
      <div className="space-y-0.5">
        <p className="text-sm font-medium leading-snug text-foreground">
          {disc.titol}
        </p>
        <p className="text-xs text-foreground/60">
          {disc.artista} · {disc.any} · {disc.tipus}
        </p>
        <p className="text-xs text-foreground/40 italic">
          {disc.rol}
        </p>
      </div>
    </a>
  );
}
