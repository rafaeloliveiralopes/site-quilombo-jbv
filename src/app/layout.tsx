import type { Metadata } from 'next';
import { Merriweather, Source_Code_Pro } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const merryWeather = Merriweather({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-title',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-text',
});

export const metadata: Metadata = {
  title: 'Associação da Comunidade Quilombola Urbana João Borges Vieira',
  description: 'Site institucional da Comunidade Quilombola Urbana João Borges Vieira',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${merryWeather.className} ${sourceCodePro.className} bg-snow antialiased`}>
        <Navbar />
        <main className="mx-auto w-full flex-1">{children}</main>
      </body>
    </html>
  );
}
