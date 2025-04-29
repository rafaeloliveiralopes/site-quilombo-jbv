import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('navigation');
  const [submenuTimer, setSubmenuTimer] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (setOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (submenuTimer) {
      clearTimeout(submenuTimer);
    }
    setOpen(true);
  };

  const handleMouseLeave = (setOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 300);
    setSubmenuTimer(timer);
  };

  return (
    <div className="hidden items-center space-x-6 py-8 xl:flex xl:text-2xl">
      <Link href="/" className="text-dark hover:text-light-chocolate">
        {t('home')}
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
          {t('about')}
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
            {t('ourHistory')}
          </Link>
          <Link
            href="/nosso-trabalho"
            className="text-dark hover:bg-orange block px-4 py-2 hover:text-black xl:text-2xl"
          >
            {t('ourWork')}
          </Link>
          <Link
            href="/nossa-equipe"
            className="text-dark hover:bg-chocolate block px-4 py-2 hover:text-black xl:text-2xl"
          >
            {t('ourTeam')}
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
          {t('collection')}
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
            {t('gallery')}
          </Link>
          <Link
            href="/acervo-videos"
            className="text-dark hover:bg-chocolate block px-4 py-2 hover:text-black xl:text-2xl"
          >
            {t('videos')}
          </Link>
        </div>
      </div>
      <Link href="/como-apoiar" className="text-dark hover:text-light-chocolate">
        {t('howToSupport')}
      </Link>
      <Link href="/contato" className="text-dark hover:text-light-chocolate">
        {t('contact')}
      </Link>
      <Link href="/como-apoiar" className="flex items-center justify-center">
        <Image
          src="/icons/donation-icon-line-black.svg"
          alt={t('donate')}
          width={46}
          height={46}
          className="w-8 md:h-8"
        />
      </Link>
    </div>
  );
};

export default NavbarDesktop;
