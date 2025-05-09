'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import HowToSupport from '@/app/[locale]/components/HowToSupport';

// Links para os vídeos no YouTube
const videos = [
  'https://www.youtube-nocookie.com/embed/7R-JTc5Xffo',
  'https://www.youtube-nocookie.com/embed/tKxMjyjd7jk',
  'https://www.youtube-nocookie.com/embed/-Itz2DJS4G4',
  'https://www.youtube-nocookie.com/embed/D606OzlRSTk',
  'https://www.youtube-nocookie.com/embed/tKxMjyjd7jk',
  'https://www.youtube-nocookie.com/embed/fbzddL8x_bM',
  'https://www.youtube-nocookie.com/embed/n4DnTJan5LA',
  'https://www.youtube-nocookie.com/embed/3AK-dtx91kE',
  'https://www.youtube-nocookie.com/embed/c0EW0NU6u9o',
  'https://www.youtube-nocookie.com/embed/JLdsATdY8vc',
  'https://www.youtube-nocookie.com/embed/97rAKaGaXW0',
];

export default function VideosPage() {
  const t = useTranslations('videos');

  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => {
      const newCount = prevCount + 2;
      return newCount <= videos.length ? newCount : videos.length;
    });
  };

  return (
    <>
      <div className="bg-chocolate text-snow w-full px-6 py-6 text-2xl tracking-tight md:text-4xl xl:pl-14 2xl:pl-46">
        <h1>{t('pageTitle')}</h1>
      </div>

      {/* Seção de Vídeos */}
      <section className="lx:px-0 mx-auto grid max-w-6xl grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] justify-center gap-12 px-4 py-12 md:gap-4">
        {videos.slice(0, visibleCount).map((video, idx) => (
          <div key={idx}>
            <iframe
              src={video}
              allowFullScreen={false}
              loading="lazy"
              title={`${t('videoTitlePrefix')} ${idx + 1} - Associação Quilombola João Borges Vieira`}
              className="aspect-video w-full rounded-xl"
            />
          </div>
        ))}
      </section>

      {/* Botão para carregar mais vídeos */}
      {visibleCount < videos.length && (
        <div className="mx-auto mb-8 flex max-w-6xl justify-center">
          <button
            onClick={handleLoadMore}
            className="bg-chocolate text-snow cursor-pointer rounded-lg px-6 py-3 hover:bg-amber-800 md:text-xl"
          >
            {t('loadMore')}
          </button>
        </div>
      )}

      {/* Seção "Como Apoiar?" */}
      <section className="border-orange mx-auto my-12 w-full max-w-6xl border-y-2 px-4">
        <HowToSupport />
      </section>
    </>
  );
}
