'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HowToSupport from './components/HowToSupport';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  //------------ Animações (Início) -------------//

  // Home
  const imageRef = useRef<HTMLImageElement>(null);

  // Cards 'FRENTES DE ATUAÇÃO'
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Anima imagem da home
    gsap.fromTo(
      imageRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Seção "FRENTES DE ATUAÇÃO" (todos da esquerda para a direita)
    gsap.fromTo(
      card1Ref.current,
      { x: -250, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2.0,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: card1Ref.current,
          start: 'top 60%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      card2Ref.current,
      { x: -300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card2Ref.current,
          start: 'top 60%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      card3Ref.current,
      { x: -400, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2.0,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: card3Ref.current,
          start: 'top 60%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  //------------ Animações (Fim) -------------//

  const [marginBottom, setMarginBottom] = useState('-130px');

  useEffect(() => {
    const updateMargin = () => {
      setMarginBottom(window.innerWidth >= 640 ? '-220px' : '-130px');
    };

    // Atualiza a margem ao carregar e ao redimensionar a janela
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
          LUTA POR DIREITOS
        </h1>
        <p className="text-dark mx-auto mb-8 max-w-3xl text-lg">
          Desde 2007, a{' '}
          <strong>Associação da Comunidade Quilombola Urbana João Borges Vieira </strong> atua para
          garantir <strong>moradia, educação, cultura e dignidade</strong> às mais de 700 famílias
          quilombolas da região. Somos resistência e conquista!
        </p>
        <div className="relative flex justify-center">
          <Image
            ref={imageRef}
            src="/imagem-associacao-quilombo-urbano-joao-borges-vieira.png"
            alt="Foto da Associação Comunidade Quilombola Joao Borges Vieira"
            width={800}
            height={600}
            className="relative z-10 w-full max-w-3xl rounded-lg shadow-lg"
            style={{
              marginBottom,
            }}
          />
        </div>
      </section>

      {/* Seção 2: Frentes de Atuação */}
      <section className="bg-snow px-4 py-36 md:pt-60">
        <h2 className="text-dark mb-8 text-center text-2xl font-bold md:text-3xl">
          FRENTES DE ATUAÇÃO
        </h2>
        <div ref={card1Ref} className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-yellow rounded-lg p-6 shadow-md">
            <div className="mb-4 flex justify-center">
              <Image
                src="/icons/home-svgrepo-com.svg"
                alt="Ícone de moradia"
                width={64}
                height={64}
                className="h-16 w-16"
              />
            </div>
            <p className="text-dark">
              A associação tem sido fundamental na conquista de moradias dignas para a comunidade.
              Em parceria com o governo, foram construídas unidades habitacionais que fortalecem a
              identidade coletiva e melhoram a qualidade de vida das famílias quilombolas.
            </p>
          </div>

          {/* Card 2 */}
          <div ref={card2Ref} className="bg-yellow rounded-lg p-6 shadow-md">
            <div className="mb-4 flex justify-center">
              <Image
                src="/icons/art-palette-svgrepo-com.svg"
                alt="Ícone de cultura"
                width={64}
                height={64}
                className="h-16 w-16"
              />
            </div>
            <p className="text-dark">
              Preservando e promovendo as tradições culturais, a associação organiza atividades como
              a dança do tambor e outras manifestações artísticas, mantendo vivas as raízes e
              fortalecendo os laços comunitários.
            </p>
          </div>

          {/* Card 3 */}
          <div ref={card3Ref} className="bg-yellow rounded-lg p-6 shadow-md">
            <div className="mb-4 flex justify-center">
              <Image
                src="/icons/care-donation-svgrepo-com.svg"
                alt="Ícone de suporte"
                width={64}
                height={64}
                className="h-16 w-16"
              />
            </div>
            <p className="text-dark">
              A associação quilombola urbana João Borges Vieira oferece suporte às famílias em
              situação de vulnerabilidade, facilitando o acesso a programas sociais e promovendo a
              inclusão socioeconômica dos membros da comunidade.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 3: Últimas Notícias */}
      <section className="text-snow bg-news-section relative mb-6 px-4 py-28 md:py-32">
        <div className="relative z-10">
          <h1 className="mb-2 text-center text-2xl font-bold md:text-3xl">ÚLTIMAS NOTÍCIAS</h1>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {/* Card 01 */}
            <div className="p-6">
              <Link href="#">
                <h5 className="mb-2 text-2xl font-bold">Noticia 01</h5>
              </Link>
              <p className="mb-4 md:mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum nisi
                in felis ultrices interdum. Nullam dapibus viverra tempor...
              </p>
              <Link
                href="#"
                className="bg-orange text-dark rounded-full px-7 py-3 text-base font-medium hover:bg-orange-300 focus:ring-4 focus:ring-orange-500 focus:outline-none md:inline-flex md:items-center md:py-2 md:text-lg"
              >
                Saiba mais
              </Link>
            </div>
            {/* Card 02 */}
            <div className="p-6">
              <Link href="#">
                <h5 className="mb-2 text-2xl font-bold">Notícia 02</h5>
              </Link>
              <p className="mb-4 md:mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum nisi
                in felis ultrices interdum. Nullam dapibus viverra tempor...
              </p>
              <Link
                href="#"
                className="bg-orange text-dark rounded-full px-7 py-3 text-base font-medium hover:bg-orange-300 focus:ring-4 focus:ring-orange-500 focus:outline-none md:inline-flex md:items-center md:py-2 md:text-lg"
              >
                Saiba mais
              </Link>
            </div>
            {/* Card 03 */}
            <div className="p-6">
              <Link href="#">
                <h5 className="mb-2 text-2xl font-bold">Notícia 03</h5>
              </Link>
              <p className="mb-4 md:mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum nisi
                in felis ultrices interdum. Nullam dapibus viverra tempor...
              </p>
              <Link
                href="#"
                className="bg-orange text-dark rounded-full px-7 py-3 text-base font-medium hover:bg-orange-300 focus:ring-4 focus:ring-orange-500 focus:outline-none md:inline-flex md:items-center md:py-2 md:text-lg"
              >
                Saiba mais
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Seção 4: Como Apoiar? */}
      <HowToSupport />
    </div>
  );
}
