'use client';

import { useEffect, useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import HowToSupport from './components/HowToSupport';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ContentType {
  hero: {
    title: string;
    description: string;
    image: { src: string; alt: string };
  };
  actions: {
    title: string;
    cards: { icon: string; alt: string; text: string }[];
  };
  news: {
    title: string;
    cards: { title: string; text: string; link: string }[];
  };
}

export default function Home() {
  //------------ Animações (Início) -------------//

  // Home
  const imageRef = useRef<HTMLImageElement>(null);

  // Cards 'FRENTES DE ATUAÇÃO'
  const actionsTitleRef = useRef<HTMLHeadingElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  // Cards 'ÚLTIMAS NOTÍCIAS'
  const newsTitleRef = useRef<HTMLHeadingElement>(null);
  const newsCard1Ref = useRef<HTMLDivElement>(null);
  const newsCard2Ref = useRef<HTMLDivElement>(null);
  const newsCard3Ref = useRef<HTMLDivElement>(null);

  const [marginBottom, setMarginBottom] = useState('-130px');
  const t = useTranslations('home');

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: imageRef.current, start: 'top 80%' },
        }
      );
    }

    if (actionsTitleRef.current) {
      gsap.fromTo(
        actionsTitleRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: { trigger: actionsTitleRef.current, start: 'top 95%' },
        }
      );
    }

    [card1Ref, card2Ref, card3Ref].forEach((ref, index) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { x: -250 - index * 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 2.0,
            ease: 'power3.out',
            scrollTrigger: { trigger: ref.current, start: 'top 60%' },
          }
        );
      }
    });

    if (newsTitleRef.current) {
      gsap.fromTo(
        newsTitleRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: { trigger: newsTitleRef.current, start: 'top 85%' },
        }
      );
    }

    [newsCard1Ref, newsCard2Ref, newsCard3Ref].forEach((ref, index) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { x: 150, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2 + index * 0.2,
            ease: 'power3.out',
            scrollTrigger: { trigger: ref.current, start: 'top 90%' },
          }
        );
      }
    });
  }, []);

  //------------ Animações (Fim) -------------//

  useEffect(() => {
    const updateMargin = () => {
      setMarginBottom(window.innerWidth >= 640 ? '-220px' : '-130px');
    };
    updateMargin();
    window.addEventListener('resize', updateMargin);
    return () => {
      window.removeEventListener('resize', updateMargin);
    };
  }, []);

  return (
    <div>
      {/* Seção 1: Luta por Direitos */}
      <section className="bg-light-chocolate px-4 py-16">
        <h1 className="text-dark mb-4 text-center text-2xl font-bold md:text-4xl">
          {t('hero.title')}
        </h1>
        <p className="text-dark mx-auto mb-8 max-w-3xl text-lg">{t('hero.description')}</p>
        <div className="relative flex justify-center">
          <Image
            ref={imageRef}
            src={t('hero.image.src')}
            alt={t('hero.image.alt')}
            width={800}
            height={600}
            className="relative z-10 w-full max-w-3xl rounded-lg shadow-lg"
            style={{ marginBottom }}
          />
        </div>
      </section>

      {/* Seção 2: Frentes de Atuação */}
      <section className="bg-snow px-4 py-36 md:pt-60">
        <h2
          ref={actionsTitleRef}
          className="text-dark mb-8 text-center text-2xl font-bold md:text-3xl"
        >
          {t('actions.title')}
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              ref={i === 0 ? card1Ref : i === 1 ? card2Ref : card3Ref}
              className="bg-yellow rounded-lg p-6 shadow-md"
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={t(`actions.cards.${i}.icon`)}
                  alt={t(`actions.cards.${i}.alt`)}
                  width={64}
                  height={64}
                  className="h-16 w-16"
                />
              </div>
              <p className="text-dark">{t(`actions.cards.${i}.text`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 3: Últimas Notícias */}
      <section className="text-snow bg-news-section relative mb-6 px-4 py-28 md:py-32">
        <div className="relative z-10">
          <h1 ref={newsTitleRef} className="mb-2 text-center text-2xl font-bold md:text-3xl">
            {t('news.title')}
          </h1>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                ref={i === 0 ? newsCard1Ref : i === 1 ? newsCard2Ref : newsCard3Ref}
                className="p-6"
              >
                <Link href={t(`news.cards.${i}.link`)}>
                  <h5 className="mb-2 text-2xl font-bold">{t(`news.cards.${i}.title`)}</h5>
                </Link>
                <p className="mb-4 md:mb-3">{t(`news.cards.${i}.text`)}</p>
                <Link
                  href={t(`news.cards.${i}.link`)}
                  className="bg-orange text-dark rounded-full px-7 py-3 text-base font-medium hover:bg-orange-300 focus:ring-4 focus:ring-orange-500 focus:outline-none md:inline-flex md:items-center md:py-2 md:text-lg"
                >
                  Saiba mais
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 4: Como Apoiar? */}
      <HowToSupport />
    </div>
  );
}
