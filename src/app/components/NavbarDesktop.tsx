import React from 'react';

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
  return (
    <div className="hidden space-x-6 md:flex xl:text-3xl">
      <a href="#home" className="text-dark hover:text-black">
        Home
      </a>
      <div
        className="group relative"
        onMouseEnter={() => setIsSubMenuOpen(true)}
        onMouseLeave={() => setIsSubMenuOpen(false)}
      >
        <button
          type="button"
          className="text-dark flex items-center hover:text-black focus:outline-none"
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
          <a
            href="#our-history"
            className="text-dark block px-4 py-2 hover:bg-gray-100 hover:text-black xl:text-2xl"
          >
            Nossa História
          </a>
          <a
            href="#our-work"
            className="text-dark block px-4 py-2 hover:bg-gray-100 hover:text-black xl:text-2xl"
          >
            Nosso Trabalho
          </a>
          <a
            href="#our-team"
            className="text-dark block px-4 py-2 hover:bg-gray-100 hover:text-black xl:text-2xl"
          >
            Nossa Equipe
          </a>
        </div>
      </div>
      <div
        className="group relative"
        onMouseEnter={() => setIsAcervoSubMenuOpen(true)}
        onMouseLeave={() => setIsAcervoSubMenuOpen(false)}
      >
        <button
          type="button"
          className="text-dark flex items-center hover:text-black focus:outline-none"
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
          <a
            href="#gallery"
            className="text-dark block px-4 py-2 hover:bg-gray-100 hover:text-black xl:text-2xl"
          >
            Galeria de Imagens
          </a>
          <a
            href="#videos"
            className="text-dark block px-4 py-2 hover:bg-gray-100 hover:text-black xl:text-2xl"
          >
            Vídeos
          </a>
        </div>
      </div>
      <a href="#support" className="text-dark hover:text-black">
        Como Apoiar
      </a>
      <a href="#contact" className="text-dark hover:text-black">
        Contato
      </a>
      <a
        href="#donate"
        className="hover:bg-text-dark flex items-center justify-center rounded px-4 py-2 text-white"
      >
        <img src="/donation-icon-line-black.svg" alt="Doação" className="h-6 w-6" />
      </a>
    </div>
  );
};

export default NavbarDesktop;
