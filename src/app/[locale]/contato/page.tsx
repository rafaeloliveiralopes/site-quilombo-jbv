import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Form from '../components/Form';

export default function Page() {
  const t = useTranslations('contact');

  return (
    <>
      <div className="w-full bg-orange-400 px-6 py-6 text-2xl tracking-tight md:text-4xl xl:pl-14 2xl:pl-46">
        <h1>{t('pageTitle')}</h1>
      </div>
      <div className="w-full pt-8 pl-6 lg:pl-0 lg:text-center">
        <h2 className="text-2xl tracking-tight text-zinc-900 sm:text-3xl md:text-4xl lg:text-5xl">
          {t('associationName')}
        </h2>
      </div>
      <div className="mx-auto max-w-6xl items-start lg:flex lg:flex-row lg:items-center lg:justify-center lg:pr-16 lg:pl-16">
        <div className="flex flex-col items-center px-4 py-4 lg:pb-50">
          <div className="w-full max-w-5xl space-y-0 px-2 text-base leading-relaxed text-zinc-800 sm:px-4 md:mt-10 md:px-0 md:text-lg">
            <section>
              <div className="space-y-3 text-left font-light">
                <p>{t('intro')}</p>
              </div>
            </section>
            <section>
              <div className="grid grid-cols-1 gap-6 text-left font-light">
                <div className="w-full space-y-2 py-2 text-left font-light lg:py-6">
                  <div className="mb-4 flex items-center justify-start gap-3">
                    <Image
                      src="/icons/map-marker.svg"
                      alt="Ícone de moradia"
                      width={64}
                      height={64}
                      className="h-9 w-9 lg:h-10"
                    />
                    <p className="w-full">{t('address')}</p>
                  </div>
                  <div className="mb-4 flex items-center justify-start gap-3">
                    <Image
                      src="/icons/phone.svg"
                      alt="Ícone de telefone"
                      width={64}
                      height={64}
                      className="h-9 w-9 lg:h-10"
                    />
                    <p>{t('phone')}</p>
                  </div>
                  <div className="mb-4 flex items-center justify-start gap-3">
                    <Image
                      src="/icons/mail.svg"
                      alt="Ícone de e-mail"
                      width={64}
                      height={64}
                      className="h-9 w-9 lg:h-10"
                    />
                    <p>{t('email')}</p>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <h2 className="mb-2 text-xl font-semibold tracking-tight text-gray-800 sm:text-2xl md:text-3xl">
                {t('workingHoursTitle')}
              </h2>

              <div className="space-y-2 text-left font-light">
                <p>{t('workingHoursWeek')}</p>
                <h3 className="text-xl lg:text-2xl">{t('socialServiceTitle')}</h3>
                <p>{t('socialServiceHours')}</p>
              </div>
            </section>
          </div>
        </div>
        {/* Formulário */}
        <div className="px-2 pb-16 md:w-full lg:mt-16">
          <Form />
        </div>
      </div>
    </>
  );
}
