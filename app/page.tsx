export default function HomePage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center space-y-8 text-center">
      <div className="space-y-3">
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-foreground/60">
          Web de Manuel Krapovickas
        </p>
        <h1 className="font-serif text-4xl italic md:text-5xl">En construcció</h1>
        <p className="mx-auto max-w-xl text-sm text-foreground/80">
          Mentrestant, pots seguir-me a les meves xarxes socials:
        </p>
      </div>
      <nav className="flex items-center justify-center gap-6 text-foreground/70">
        <a
          href="https://www.youtube.com/@manuelkrapovickas310"
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground"
          aria-label="YouTube"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="3" ry="3" />
            <polygon points="10,9 16,12 10,15" fill="white" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/manuelkrapovickas"
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground"
          aria-label="Instagram"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <rect x="4" y="4" width="16" height="16" rx="4" ry="4" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/manuel.krapovickas"
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground"
          aria-label="Facebook"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M13.5 21v-7h2.3l.4-3h-2.7V9.1c0-.9.3-1.5 1.6-1.5H16V5.1C15.7 5 14.9 5 13.9 5 11.7 5 10.2 6.3 10.2 8.8V11H8v3h2.2v7h3.3z" />
          </svg>
        </a>
        <a
          href="https://soundcloud.com/manuel-krapovickas"
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground"
          aria-label="SoundCloud"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M9 17H6.5A3.5 3.5 0 0 1 6.5 10 4 4 0 0 1 9 8a4.5 4.5 0 0 1 4.2-3.5A4.5 4.5 0 0 1 17.6 9H18a3 3 0 0 1 0 6H9z" />
          </svg>
        </a>
      </nav>
    </section>
  );
}
