import Image from 'next/image';
import { useTranslations } from 'next-intl';
import HowToSupport from '../components/HowToSupport';

export default function Page() {
  const t = useTranslations('history');

  return (
    <>
      <div className="bg-light-chocolate w-full px-6 py-6 text-2xl tracking-tight md:text-4xl xl:pl-14 2xl:pl-46">
        <h1>{t('pageTitle')}</h1>
      </div>

      <div className="flex flex-col items-center px-4">
        <Image
          src="/artesanatos-bonecas-negras-imagem-editada.png"
          alt={t('imageAlt')}
          width={800}
          height={600}
          className="mt-6 w-full max-w-6xl rounded-lg shadow-lg"
          priority
        />

        <div className="mt-8 w-full max-w-6xl space-y-8 px-2 text-base leading-relaxed text-zinc-800 sm:px-4 md:mt-10 md:px-0 md:text-lg">
          {/* Seção 1 */}
          <section>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
              {t('sections.originTitle')}
            </h2>

            <div className="space-y-4 text-left font-light">
              <p>{t('sections.originParagraphs.0')}</p>
              <p>{t('sections.originParagraphs.1')}</p>
              <p>{t('sections.originParagraphs.2')}</p>
              <p>{t('sections.originParagraphs.3')}</p>
              <p>{t('sections.originParagraphs.4')}</p>
              <p>{t('sections.originParagraphs.5')}</p>
            </div>
          </section>

          {/* Seção 2 */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
              {t('sections.migrationTitle')}
            </h2>

            <div className="space-y-4 text-left font-light">
              <p>{t('sections.migrationParagraphs.0')}</p>
              <p>{t('sections.migrationParagraphs.1')}</p>
              <p>{t('sections.migrationParagraphs.2')}</p>
              <p>{t('sections.migrationParagraphs.3')}</p>
              <p>{t('sections.migrationParagraphs.4')}</p>
              <p>{t('sections.migrationParagraphs.5')}</p>
              <p>{t('sections.migrationParagraphs.6')}</p>
              <p>{t('sections.migrationParagraphs.7')}</p>
              <p>{t('sections.migrationParagraphs.8')}</p>
            </div>
          </section>

          {/* Seção 3 */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
              {t('sections.creationTitle')}
            </h2>

            <div className="space-y-4 text-left font-light">
              <p>{t('sections.creationParagraphs.0')}</p>
              <p>{t('sections.creationParagraphs.1')}</p>
              <p>{t('sections.creationParagraphs.2')}</p>
              <p>{t('sections.creationParagraphs.3')}</p>
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
