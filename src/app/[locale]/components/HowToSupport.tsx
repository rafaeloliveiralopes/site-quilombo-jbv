'use client';

import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

export default function HowToSupport() {
  const t = useTranslations('howToSupport');

  const supportTitleRef = useRef<HTMLHeadingElement>(null);
  const supportTextRef = useRef<HTMLParagraphElement>(null);
  const supportButtonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      supportTitleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: supportTitleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      supportTextRef.current,
      { x: -150, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: supportTextRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      supportButtonRef.current,
      { x: 150, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: supportButtonRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section className="bg-snow px-4 py-10 md:py-20 md:pt-16">
      <h2
        ref={supportTitleRef}
        className="text-dark decoration-orange mb-4 text-center text-2xl font-bold underline md:mb-4 md:text-3xl"
      >
        {t('sectionTitle')}
      </h2>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 md:flex-row md:items-start">
        <p ref={supportTextRef} className="text-dark text-base md:flex-1 md:text-lg">
          {t('description')}
        </p>
        <Link
          ref={supportButtonRef}
          href="/como-apoiar"
          className="bg-green text-dark inline-block rounded-full px-6 py-3 text-base font-medium transition hover:bg-green-600 md:text-lg"
        >
          {t('donateButton')}
        </Link>
      </div>
    </section>
  );
}
