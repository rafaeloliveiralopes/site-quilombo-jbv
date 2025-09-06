'use client';
import React, { useState } from 'react';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';

interface LanguageSelectorProps {
  variant?: 'default' | 'mobile';
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ variant = 'default' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  // Configuração dos idiomas disponíveis
  const languages = [
    {
      code: 'pt',
      name: 'Português',
      flag: '/flags/brazil.svg',
    },
    {
      code: 'en',
      name: 'English',
      flag: '/flags/usa.svg',
    },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  // Configurações de tamanho baseadas na variante
  const sizeConfig = {
    default: {
      // Para navbar desktop e dropdown padrão
      buttonFlag: { containerClass: 'h-6 w-9', width: 25, height: 17 },
      dropdownFlag: { containerClass: 'h-5 w-7', width: 30, height: 22 },
    },
    mobile: {
      // Para menu hambúrguer mobile - bandeiras maiores
      buttonFlag: { containerClass: 'h-10 w-14', width: 34, height: 26 },
      dropdownFlag: { containerClass: 'h-6 w-9', width: 36, height: 27 },
    },
  };

  const sizes = sizeConfig[variant];

  const handleLanguageChange = (langCode: string) => {
    router.push(pathname, { locale: langCode });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* ========== BOTÃO PRINCIPAL DO SELETOR ========== */}
      {/* MOBILE: Apenas bandeira + seta (sem texto do código) */}
      {/* DESKTOP: Bandeira + código do idioma + seta */}
      <button
        type="button"
        className="text-dark hover:text-light-chocolate flex items-center space-x-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Selecionar idioma"
      >
        {/* Bandeira do idioma atual - Botão principal */}
        <div className={`${sizes.buttonFlag.containerClass} overflow-hidden rounded-sm`}>
          <Image
            src={currentLanguage.flag}
            alt={currentLanguage.name}
            width={sizes.buttonFlag.width}
            height={sizes.buttonFlag.height}
            className="object-cover"
          />
        </div>
        {/* Código do idioma (PT, EN) - APENAS DESKTOP (hidden em mobile) */}
        <span className="hidden text-sm font-medium md:inline">
          {currentLanguage.code.toUpperCase()}
        </span>
        {/* Ícone de seta para indicar dropdown */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-3 w-3 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* ========== DROPDOWN DOS IDIOMAS ========== */}
      {/* MOBILE & DESKTOP: Menu suspenso idêntico em todos os dispositivos */}
      {/* Mostra: Bandeira + Nome completo do idioma */}
      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-32 rounded-md border border-gray-200 bg-white shadow-lg">
          {languages.map((language) => (
            <button
              key={language.code}
              type="button"
              className={`hover:bg-light-chocolate flex w-full items-center space-x-2 px-3 py-2 text-left transition-colors hover:text-black ${
                locale === language.code ? 'bg-gray-100' : ''
              }`}
              onClick={() => handleLanguageChange(language.code)}
            >
              {/* Bandeira de cada idioma - Dropdown */}
              <div
                className={`${sizes.dropdownFlag.containerClass} flex-shrink-0 overflow-hidden rounded-sm`}
              >
                <Image
                  src={language.flag}
                  alt={language.name}
                  width={sizes.dropdownFlag.width}
                  height={sizes.dropdownFlag.height}
                  className="object-cover"
                />
              </div>
              {/* Nome completo do idioma */}
              <span className="text-sm font-medium">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
