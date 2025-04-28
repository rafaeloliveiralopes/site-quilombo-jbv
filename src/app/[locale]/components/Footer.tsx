import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  const t = useTranslations('navigation');

  return (
    <footer className="px-auto bg-dark text-snow mt-6 py-9">
      <div className="container mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {/* Coluna 1: Logo e Links */}
        <div className="pl-3 md:pl-0">
          <Link href="/">
            <Image
              src="/logo-white-text.png"
              alt="Logo Associação Comunidade Quilombola"
              width={120}
              height={120}
              style={{ width: 'auto', height: 'auto' }}
              className="mb-4"
            />
          </Link>
          <h3 className="mb-1 text-lg font-semibold">{t('siteMap')}</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/nossa-historia" className="hover:text-orange">
                {t('ourHistory')}
              </Link>
            </li>
            <li>
              <Link href="/nosso-trabalho" className="hover:text-orange">
                {t('ourWork')}
              </Link>
            </li>
            <li>
              <Link href="/nossa-equipe" className="hover:text-orange">
                {t('ourTeam')}
              </Link>
            </li>
            <li>
              <Link href="/acervo-galeria" className="hover:text-orange">
                {t('gallery')}
              </Link>
            </li>
            <li>
              <Link href="/acervo-videos" className="hover:text-orange">
                {t('videos')}
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-orange">
                {t('contact')}
              </Link>
            </li>
            <li>
              <Link href="/como-apoiar" className="hover:text-orange">
                {t('donate')}
              </Link>
            </li>
            <li>
              <Link href="#politica" className="hover:text-orange">
                {t('privacyPolicy')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Coluna 2: Redes Sociais */}
        <div className="pl-3 md:pt-6 md:pl-0">
          <h3 className="mb-1 text-lg font-semibold">{t('followUs')}</h3>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram text-orange text-2xl"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook text-orange text-2xl"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube text-orange text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Coluna 3: Endereço e Mapa */}
        <div>
          <div className="pl-4 md:pt-6 md:pl-0">
            <h3 className="mb-1 text-lg font-semibold">{t('addressTitle')}</h3>
            <p className="mb-2">{t('addressContent')}</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d-49.140498197458946!3d-14.526053996876804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDMxJzMzLjgiUyA0OcKwMDgnMjQuMSJX!5e0!3m2!1sen!2sbr!4v1610000000000!5m2!1sen!2sbr"
            width="99%"
            height="250"
            style={{ border: 0, padding: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-scripts allow-same-origin allow-popups"
          ></iframe>
        </div>
      </div>

      {/* Rodapé */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        <p>
          {t('rightsReserved')}{' '}
          <a href="https://rafaellopes.dev" className="text-orange hover:underline">
            rafaellopes.dev
          </a>
        </p>
      </div>
    </footer>
  );
}
