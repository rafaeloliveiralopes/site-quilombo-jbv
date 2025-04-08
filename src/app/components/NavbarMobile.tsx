import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
interface NavbarMobileProps {
  isSubMenuOpen: boolean;
  setIsSubMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isAcervoSubMenuOpen: boolean;
  setIsAcervoSubMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({
  isSubMenuOpen,
  setIsSubMenuOpen,
  isAcervoSubMenuOpen,
  setIsAcervoSubMenuOpen,
  setIsMenuOpen,
}) => {
  const handleSubMenuToggle = () => {
    setIsSubMenuOpen((prev) => {
      if (!prev) setIsAcervoSubMenuOpen(false);
      return !prev;
    });
  };

  const handleAcervoSubMenuToggle = () => {
    setIsAcervoSubMenuOpen((prev) => {
      if (!prev) setIsSubMenuOpen(false);
      return !prev;
    });
  };

  return (
    <div
      className="bg-light-chocolate absolute top-0 left-0 z-50 w-full space-y-4 p-16 pt-8 text-3xl font-[300] shadow-lg max-[740px]:pt-16 max-[600px]:text-2xl"
      style={{ height: '100vh' }}
    >
      {/* Logo da associação */}
      <Link href="/" className="flex justify-center max-[640px]:pb-8">
        <Image
          src="/logo-associacao-quilombola-joao-borges-vieira.png"
          alt="Logo"
          width={96}
          height={96}
          style={{ width: 'auto', height: 'auto' }}
          priority
          onClick={() => setIsMenuOpen(false)}
        />
      </Link>

      {/* Botão de fechar */}
      <button
        type="button"
        className="absolute top-4 right-4 text-gray-700 focus:ring-2 focus:ring-gray-300 focus:outline-none active:text-black"
        aria-label="Close menu"
        onClick={() => setIsMenuOpen(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Links do menu */}
      <Link
        href="/"
        className="text-dark block transition-all duration-300 focus:outline-none active:scale-105 active:text-white"
        onClick={() => setIsMenuOpen(false)}
      >
        Home
      </Link>
      <div>
        <button
          type="button"
          className="text-dark flex w-full items-center justify-between text-left transition-all duration-300 focus:outline-none active:scale-105 active:text-white"
          onClick={handleSubMenuToggle}
        >
          Sobre Nós
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`mr-[3rem] h-4 w-4 transform transition-transform ${
              isSubMenuOpen ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isSubMenuOpen && (
          <div className="ml-4 space-y-2">
            <Link
              href="/nossa-historia"
              className="text-dark block transition-all duration-300 focus:outline-none active:scale-105 active:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Nossa História
            </Link>
            <Link
              href="/nosso-trabalho"
              className="text-dark block transition-all duration-300 focus:outline-none active:scale-105 active:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosso Trabalho
            </Link>
            <Link
              href="/nossa-equipe"
              className="text-dark block transition-all duration-300 focus:outline-none active:scale-105 active:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Nossa Equipe
            </Link>
          </div>
        )}
      </div>
      <div>
        <button
          type="button"
          className="text-dark flex w-full items-center justify-between text-left transition-all duration-300 focus:outline-none active:scale-105 active:text-white"
          onClick={handleAcervoSubMenuToggle}
        >
          Acervo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`mr-[5rem] h-4 w-4 transform transition-transform ${
              isAcervoSubMenuOpen ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isAcervoSubMenuOpen && (
          <div className="ml-4 space-y-2">
            <Link
              href="/acervo-galeria"
              className="text-dark block transition-all duration-300 focus:outline-none active:scale-105 active:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Galeria de Imagens
            </Link>
            <Link
              href="/acervo-videos"
              className="text-dark block transition-all duration-300 focus:outline-none active:scale-105 active:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Vídeos
            </Link>
          </div>
        )}
      </div>
      <Link
        href="/contato"
        className="text-dark block transition-all duration-300 focus:outline-none active:scale-105 active:text-white"
        onClick={() => setIsMenuOpen(false)}
      >
        Contato
      </Link>
      <Link
        href="/como-apoiar"
        className="bg-green mt-8 flex w-full items-center justify-center rounded-full py-4 text-2xl font-[400] text-white transition-all duration-300 focus:outline-none active:scale-105 active:bg-green-600"
        aria-label="Quero Doar"
        onClick={() => setIsMenuOpen(false)}
      >
        Quero Doar!
      </Link>
    </div>
  );
};

export default NavbarMobile;
