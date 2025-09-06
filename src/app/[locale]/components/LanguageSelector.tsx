'use client';
import React, { useState } from 'react';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

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

  const handleLanguageChange = (langCode: string) => {
    router.push(pathname, { locale: langCode });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="text-dark hover:text-light-chocolate flex items-center space-x-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Selecionar idioma"
      >
        <div className="h-4 w-6 overflow-hidden rounded-sm">
          <Image
            src={currentLanguage.flag}
            alt={currentLanguage.name}
            width={24}
            height={16}
            className="object-cover"
          />
        </div>
        <span className="hidden text-sm font-medium md:inline">
          {currentLanguage.code.toUpperCase()}
        </span>
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
              <div className="h-3 w-5 flex-shrink-0 overflow-hidden rounded-sm">
                <Image
                  src={language.flag}
                  alt={language.name}
                  width={20}
                  height={12}
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-medium">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
