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
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo-associacao-quilombola-joao-borges-vieira.png"
              alt="Logo"
              width={65}
              height={65}
              style={{ width: 'auto', height: 'auto' }}
              className="min-[1280px]:min-h-26 min-[1280px]:min-w-26"
              priority
            />
          </Link>

          {/* Menu para dispositivos maiores */}
          <NavbarDesktop
            isSubMenuOpen={isSubMenuOpen}
            setIsSubMenuOpen={setIsSubMenuOpen}
            isAcervoSubMenuOpen={isAcervoSubMenuOpen}
            setIsAcervoSubMenuOpen={setIsAcervoSubMenuOpen}
          />

          {/* Botão de menu para dispositivos móveis */}
          <button
            type="button"
            className="text-gray-700 hover:text-black focus:outline-none md:hidden"
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
