import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';

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
      <body className={`bg-snow antialiased`}>
        <Navbar />
        <main className="mx-auto w-full flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
