import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider, hasLocale } from 'next-intl';

import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'Associação da Comunidade Quilombola Urbana João Borges Vieira',
  description: 'Site institucional da Comunidade Quilombola Urbana João Borges Vieira',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <head>{/* <link rel="icon" href="/favicon.ico" type="image/ico" /> */}</head>
      <body className="bg-snow antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="mx-auto w-full flex-1 overflow-x-hidden">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
