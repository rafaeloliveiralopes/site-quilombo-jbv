'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isAcervoSubMenuOpen, setIsAcervoSubMenuOpen] = useState(false);

  return (
    <nav className="bg-snow border-b border-gray-200">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pt-3 xl:pl-14 2xl:pl-40">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo-associacao-quilombola-joao-borges-vieira.png"
              alt="Logo Associação Comunidade Quilombola"
              className="mb-3"
              width={120}
              height={120}
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>
          {/* Botão de menu para dispositivos móveis */}
          <button
            type="button"
            className="hover:text-dark flex justify-around text-gray-700 focus:outline-none xl:hidden"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Menu para dispositivos maiores */}
          <NavbarDesktop
            isSubMenuOpen={isSubMenuOpen}
            setIsSubMenuOpen={setIsSubMenuOpen}
            isAcervoSubMenuOpen={isAcervoSubMenuOpen}
            setIsAcervoSubMenuOpen={setIsAcervoSubMenuOpen}
          />
        </div>

        {/* Menu para dispositivos móveis */}
        {isMenuOpen && (
          <NavbarMobile
            isSubMenuOpen={isSubMenuOpen}
            setIsSubMenuOpen={setIsSubMenuOpen}
            isAcervoSubMenuOpen={isAcervoSubMenuOpen}
            setIsAcervoSubMenuOpen={setIsAcervoSubMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
