'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/bio', label: 'Bio' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/discografia', label: 'Discografia' }, 
  { href: '/media', label: 'Media' },
  { href: '/proximos-conciertos', label: 'Próximos Conciertos' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/press', label: 'Press' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 items-center px-4 md:px-8">
        <Link href="/" className="font-display text-xl tracking-[0.15em]">
          Manuel Krapovickas
        </Link>
        <nav className="ml-auto hidden items-center gap-10 text-xs uppercase tracking-[0.2em] md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === '/' ? pathname === item.href : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  'transition-colors ' +
                  (isActive
                    ? 'text-brand'
                    : 'text-foreground/60 hover:text-foreground')
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded border border-black/10 px-2 py-1 text-xs uppercase tracking-[0.2em] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          Menu
        </button>
      </div>
      {open && (
        <nav className="border-t border-black/5 bg-white px-4 py-3 text-xs uppercase tracking-[0.2em] md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col gap-3">
            {navItems.map((item) => {
              const isActive =
                item.href === '/' ? pathname === item.href : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    'transition-colors ' +
                    (isActive
                      ? 'text-brand'
                      : 'text-foreground/70 hover:text-foreground')
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
