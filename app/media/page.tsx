export const metadata = {
  title: 'Media | Manuel K',
};

const YT_VIDEO_ID = 'dQw4w9WgXcQ'; // TODO: reemplaza por tu propio vídeo

export default function MediaPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-foreground/60">
          Media
        </p>
        <h1 className="font-serif text-3xl italic md:text-4xl">Vídeos &amp; Música</h1>
        <p className="max-w-2xl text-sm text-foreground/70">
          Puedes incrustar aquí vídeos de YouTube, playlists, Bandcamp, etc.
        </p>
      </header>
      <div className="aspect-video w-full overflow-hidden rounded border border-black/10 bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${YT_VIDEO_ID}`}
          title="YouTube video player"
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  );
}
