import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import QRCodeDonationBox from '../components/QrCodeDonationBox';

export default function Page() {
  const t = useTranslations('support');

  return (
    <>
      <div className="bg-light-chocolate w-full px-6 py-6 text-2xl tracking-tight md:text-4xl xl:pl-14 2xl:pl-46">
        <h1>{t('pageTitle')}</h1>
      </div>
      <div className="flex flex-col items-center px-4 py-12">
        <div className="mt-8 w-full max-w-5xl space-y-3 px-2 text-base leading-relaxed text-zinc-800 sm:px-4 md:mt-10 md:px-0 md:text-lg">
          {/* Apoie */}
          <section>
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
              {t('mainTitle')}
            </h2>
            <div className="space-y-3 text-left font-light">
              <p>{t('mainParagraphs.0')}</p>
              <p>{t('mainParagraphs.1')}</p>
            </div>
          </section>
          {/* Por que apoiar */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
              {t('whySupportTitle')}
            </h2>
            <div className="grid grid-cols-1 gap-6 text-left font-light md:grid-cols-2">
              <div className="space-y-3">
                <p>{t('whySupportIntro')}</p>
                <ul className="list-disc pl-4 md:pl-12">
                  <li>{t('whySupportList.item1')}</li>
                  <li>{t('whySupportList.item2')}</li>
                  <li>{t('whySupportList.item3')}</li>
                  <li>{t('whySupportList.item4')}</li>
                </ul>
              </div>
              <QRCodeDonationBox />
            </div>
          </section>
          {/* Como contribuir */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
              {t('howToContributeTitle')}
            </h2>
            <div className="space-y-3 text-left font-light">
              <p>{t('howToContributeParagraphs.0')}</p>
              <p>{t('howToContributeParagraphs.1')}</p>
              <p>{t('howToContributeParagraphs.2')}</p>
            </div>
          </section>
          {/* Botão Quero Doar */}
          <Link
            href="https://wa.me/556299829177?text=Olá,%20gostaria%20de%20fazer%20uma%20doação%20para%20a%20Associação%20Quilombola%20Urbana%20João%20Borges%20Vieira%20de%20outra%20forma!"
            target="_blank"
            className="bg-green text-dark inline-block rounded-full px-6 py-3 text-base font-medium transition hover:bg-blue-600 hover:text-white md:text-lg"
          >
            {t('donateButton')}
          </Link>
        </div>
      </div>
    </>
  );
}
