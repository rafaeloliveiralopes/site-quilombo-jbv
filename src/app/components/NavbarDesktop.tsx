import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NavbarDesktopProps {
  isSubMenuOpen: boolean;
  setIsSubMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isAcervoSubMenuOpen: boolean;
  setIsAcervoSubMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarDesktop: React.FC<NavbarDesktopProps> = ({
  isSubMenuOpen,
  setIsSubMenuOpen,
  isAcervoSubMenuOpen,
  setIsAcervoSubMenuOpen,
}) => {
  const [submenuTimer, setSubmenuTimer] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (setOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (submenuTimer) {
      clearTimeout(submenuTimer); // Limpa o timer se o mouse entrar novamente antes do atraso
    }
    setOpen(true);
  };

  const handleMouseLeave = (setOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
    const timer = setTimeout(() => {
      setOpen(false); // Fecha o submenu após o atraso
    }, 300); // Atraso de 300ms
    setSubmenuTimer(timer);
  };

  return (
    <div className="hidden items-center space-x-6 md:flex xl:text-2xl">
      <Link href="/" className="text-dark hover:text-light-chocolate">
        Home
      </Link>
      <div
        className="group relative"
        onMouseEnter={() => handleMouseEnter(setIsSubMenuOpen)}
        onMouseLeave={() => handleMouseLeave(setIsSubMenuOpen)}
      >
        <button
          type="button"
          className="text-dark hover:text-light-chocolate flex items-center focus:outline-none"
        >
          Sobre Nós
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`ml-2 h-4 w-4 transform transition-transform ${
              isSubMenuOpen ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {/* Submenu Sobre Nós */}
        <div
          className={`absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg ${
            isSubMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <Link
            href="/nossa-historia"
            className="text-dark hover:bg-light-chocolate block px-4 py-2 hover:text-black xl:text-2xl"
          >
            Nossa História
          </Link>
          <Link
            href="/nosso-trabalho"
            className="text-dark hover:bg-orange block px-4 py-2 hover:text-black xl:text-2xl"
          >
            Nosso Trabalho
          </Link>
          <Link
            href="/nossa-equipe"
            className="text-dark hover:bg-chocolate block px-4 py-2 hover:text-black xl:text-2xl"
          >
            Nossa Equipe
          </Link>
        </div>
      </div>
      <div
        className="group relative"
        onMouseEnter={() => handleMouseEnter(setIsAcervoSubMenuOpen)}
        onMouseLeave={() => handleMouseLeave(setIsAcervoSubMenuOpen)}
      >
        <button
          type="button"
          className="text-dark hover:text-light-chocolate flex items-center focus:outline-none"
        >
          Acervo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`ml-2 h-4 w-4 transform transition-transform ${
              isAcervoSubMenuOpen ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {/* Submenu Acervo */}
        <div
          className={`absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg ${
            isAcervoSubMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <Link
            href="/acervo-galeria"
            className="text-dark hover:bg-light-chocolate block px-4 py-2 hover:text-black xl:text-2xl"
          >
            Galeria de Imagens
          </Link>
          <Link
            href="/acervo-videos"
            className="text-dark hover:bg-chocolate block px-4 py-2 hover:text-black xl:text-2xl"
          >
            Vídeos
          </Link>
        </div>
      </div>
      <Link href="/como-apoiar" className="text-dark hover:text-light-chocolate">
        Como Apoiar
      </Link>
      <Link href="/contato" className="text-dark hover:text-light-chocolate">
        Contato
      </Link>
      <Link href="/como-apoiar" className="flex items-center justify-center">
        <Image
          src="/icons/donation-icon-line-black.svg"
          alt="Doação"
          width={46}
          height={46}
          className="w-8 md:h-8"
        />
      </Link>
    </div>
  );
};

export default NavbarDesktop;
