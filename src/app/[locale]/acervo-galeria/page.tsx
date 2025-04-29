import Image from 'next/image';
import { useTranslations } from 'next-intl';
import HowToSupport from '../components/HowToSupport';

export default function Page() {
  const t = useTranslations('gallery');

  return (
    <>
      <div className="bg-light-chocolate w-full px-6 py-6 text-2xl tracking-tight md:text-4xl xl:pl-14 2xl:pl-46">
        <h1>{t('pageTitle')}</h1>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 min-[364px]:grid-cols-2 min-[639px]:grid-cols-3">
        <Image
          src="/galeria/img-acervo-01.png"
          alt={t('images.img1')}
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
          priority
        />
        <Image
          src="/galeria/img-acervo-02.png"
          alt={t('images.img2')}
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
          priority
        />
        <Image
          src="/galeria/img-acervo-03.png"
          alt={t('images.img3')}
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
          priority
        />
        <Image
          src="/galeria/img-acervo-04.png"
          alt={t('images.img4')}
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
          priority
        />
        <Image
          src="/galeria/img-acervo-05.png"
          alt={t('images.img5')}
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
          priority
        />
        <Image
          src="/galeria/img-acervo-06.png"
          alt={t('images.img6')}
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
          priority
        />
        <Image
          src="/galeria/img-acervo-07.png"
          alt={t('images.img7')}
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
          priority
        />
        <Image
          src="/galeria/img-acervo-08.png"
          alt={t('images.img8')}
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
          priority
        />
        <Image
          src="/galeria/img-acervo-09.png"
          alt={t('images.img9')}
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
          priority
        />
        <Image
          src="/galeria/img-acervo-10.png"
          alt={t('images.img10')}
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
          priority
        />
        <Image
          src="/galeria/img-acervo-11.png"
          alt={t('images.img11')}
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
          priority
        />
        <Image
          src="/galeria/img-acervo-12.png"
          alt={t('images.img12')}
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
          priority
        />
        <Image
          src="/galeria/img-acervo-13.png"
          alt={t('images.img13')}
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
          priority
        />
        <Image
          src="/galeria/img-acervo-14.png"
          alt={t('images.img14')}
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
          priority
        />
        <Image
          src="/galeria/img-acervo-15.png"
          alt={t('images.img15')}
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
          priority
        />
        <Image
          src="/galeria/img-acervo-16.png"
          alt={t('images.img16')}
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
          priority
        />
      </div>

      <section className="border-orange mx-auto my-12 w-full max-w-6xl border-y-2 px-4">
        <HowToSupport />
      </section>
    </>
  );
}
