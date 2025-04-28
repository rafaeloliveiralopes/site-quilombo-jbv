import Image from 'next/image';
import { useTranslations } from 'next-intl';
import HowToSupport from '../components/HowToSupport';

export default function Page() {
  const t = useTranslations('work');

  return (
    <>
      <div className="w-full bg-orange-400 px-6 py-6 text-2xl tracking-tight md:text-4xl xl:pl-14 2xl:pl-46">
        <h1>{t('pageTitle')}</h1>
      </div>
      <div className="flex flex-col items-center px-4">
        <div className="mt-8 w-full max-w-6xl space-y-8 px-2 text-base leading-relaxed text-zinc-800 sm:px-4 md:mt-10 md:px-0 md:text-lg">
          {/* Seção 1 */}
          <section>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
              {t('sections.supportTitle')}
            </h2>
            <div className="space-y-4 text-left font-light">
              <p>{t('sections.supportParagraphs.0')}</p>
              <p>{t('sections.supportParagraphs.1')}</p>
            </div>
          </section>
          {/* Seção 2 */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
              {t('sections.housingTitle')}
            </h2>
            <div className="space-y-4 text-left font-light">
              <p>{t('sections.housingParagraphs.0')}</p>
              <p>{t('sections.housingParagraphs.1')}</p>
              <p>{t('sections.housingParagraphs.2')}</p>
            </div>
          </section>
          {/* Seção 3 */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
              {t('sections.cultureTitle')}
            </h2>
            <div className="space-y-4 text-left font-light">
              <ul className="list-disc space-y-2 pl-4 md:pl-12">
                <li>{t('sections.cultureList.item1')}</li>
                <li>{t('sections.cultureList.item2')}</li>
                <li>{t('sections.cultureList.item3')}</li>
                <li>{t('sections.cultureList.item4')}</li>
              </ul>
              <Image
                src="/projeto-resgate-cultura-quilombola.png"
                alt={t('sections.cultureImageAlt')}
                width={400}
                height={200}
                className="mx-auto my-6 max-w-60 rounded-lg shadow-lg"
                priority
              />
              <p>{t('sections.cultureParagraphs.0')}</p>
              <p>{t('sections.cultureParagraphs.1')}</p>
              <p>{t('sections.cultureParagraphs.2')}</p>
              <p>{t('sections.cultureParagraphs.3')}</p>
            </div>
          </section>
        </div>
      </div>
      <section className="border-orange mx-auto my-12 w-full max-w-6xl border-y-2 px-4">
        <HowToSupport />
      </section>
    </>
  );
}
