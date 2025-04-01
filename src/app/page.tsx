'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
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
    <main>
      {/* Seção 1: Luta por Direitos */}
      <section className="bg-light-chocolate px-4 py-16">
        <h1 className="text-dark-brown mb-4 text-center text-2xl font-bold md:text-4xl">
          LUTA POR DIREITOS
        </h1>
        <p className="text-dark-brown mx-auto mb-8 max-w-3xl text-lg">
          Desde 2007, a Associação da Comunidade Quilombola Urbana João Borges Vieira atua para
          garantir moradia, educação, cultura e dignidade às mais de 200 famílias quilombolas da
          região. Somos resistência e conquista!
        </p>
        <div className="relative flex justify-center">
          <Image
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
      <section className="bg-snow px-4 py-32 md:pt-60">
        <h2 className="text-dark-brown mb-8 text-center text-xl font-bold md:text-3xl">
          FRENTES DE ATUAÇÃO
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
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
            <p className="text-dark-brown">
              A associação tem sido fundamental na conquista de moradias dignas para a comunidade.
              Em parceria com o governo, foram construídas unidades habitacionais que fortalecem a
              identidade coletiva e melhoram a qualidade de vida das famílias quilombolas.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-yellow rounded-lg p-6 shadow-md">
            <div className="mb-4 flex justify-center">
              <Image
                src="/icons/art-palette-svgrepo-com.svg"
                alt="Ícone de cultura"
                width={64}
                height={64}
                className="h-16 w-16"
              />
            </div>
            <p className="text-dark-brown">
              Preservando e promovendo as tradições culturais, a associação organiza atividades como
              a dança do tambor e outras manifestações artísticas, mantendo vivas as raízes e
              fortalecendo os laços comunitários.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-yellow rounded-lg p-6 shadow-md">
            <div className="mb-4 flex justify-center">
              <Image
                src="/icons/care-donation-svgrepo-com.svg"
                alt="Ícone de suporte"
                width={64}
                height={64}
                className="h-16 w-16"
              />
            </div>
            <p className="text-dark-brown">
              A associação quilombola urbana João Borges Vieira oferece suporte às famílias em
              situação de vulnerabilidade, facilitando o acesso a programas sociais e promovendo a
              inclusão socioeconômica dos membros da comunidade.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
