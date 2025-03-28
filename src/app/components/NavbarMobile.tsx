import React from 'react';

interface NavbarMobileProps {
  isSubMenuOpen: boolean;
  setIsSubMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isAcervoSubMenuOpen: boolean;
  setIsAcervoSubMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({
  isSubMenuOpen,
  setIsSubMenuOpen,
  isAcervoSubMenuOpen,
  setIsAcervoSubMenuOpen,
}) => {
  return (
    <div className="space-y-2">
      <a href="#home" className="block text-gray-700 hover:text-black">
        Home
      </a>
      <div>
        <button
          type="button"
          className="flex w-full items-center justify-between text-left text-gray-700 hover:text-black focus:outline-none"
          onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
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
        {isSubMenuOpen && (
          <div className="ml-4 space-y-2">
            <a href="#our-history" className="block text-gray-700 hover:text-black">
              Nossa História
            </a>
            <a href="#our-work" className="block text-gray-700 hover:text-black">
              Nosso Trabalho
            </a>
            <a href="#our-team" className="block text-gray-700 hover:text-black">
              Nossa Equipe
            </a>
          </div>
        )}
      </div>
      <div>
        <button
          type="button"
          className="flex w-full items-center justify-between text-left text-gray-700 hover:text-black focus:outline-none"
          onClick={() => setIsAcervoSubMenuOpen(!isAcervoSubMenuOpen)}
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
        {isAcervoSubMenuOpen && (
          <div className="ml-4 space-y-2">
            <a href="#gallery" className="block text-gray-700 hover:text-black">
              Galeria de Imagens
            </a>
            <a href="#videos" className="block text-gray-700 hover:text-black">
              Vídeos
            </a>
          </div>
        )}
      </div>
      <a href="#support" className="block text-gray-700 hover:text-black">
        Como Apoiar
      </a>
      <a href="#contact" className="block text-gray-700 hover:text-black">
        Contato
      </a>
      <a
        href="#donate"
        className="block flex items-center justify-center rounded bg-black px-4 py-2 text-white hover:bg-gray-800"
      >
        <img src="/donation-icon-line-black.svg" alt="Doação" className="h-6 w-6" />
      </a>
    </div>
  );
};

export default NavbarMobile;
