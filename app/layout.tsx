import './globals.css';
import type { Metadata } from 'next';
import { Alfa_Slab_One, Work_Sans, Playfair_Display } from 'next/font/google';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const sans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const serif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const display = Alfa_Slab_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Manuel Krapovickas | Músico',
  description: 'Sitio oficial de Manuel Krapovickas - músico, bajista, contrabajista, compositor y productor.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${sans.variable} ${serif.variable} ${display.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 px-4 py-8 md:px-8">
            <div className="mx-auto w-full max-w-5xl">{children}</div>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
