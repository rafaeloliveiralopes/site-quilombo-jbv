import Image from 'next/image';
import { useTranslations } from 'next-intl';
import HowToSupport from '../components/HowToSupport';

export default function Page() {
  const t = useTranslations('team');

  return (
    <>
      <div className="bg-chocolate w-full px-6 py-6 text-2xl tracking-tight text-white md:text-4xl xl:pl-14 2xl:pl-46">
        <h1>{t('pageTitle')}</h1>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-2 py-12 md:grid-cols-2">
        {/* Raiane Gouveia */}
        <div className="rounded-2xl py-3 text-center shadow-lg">
          <div className="mx-auto mt-4 w-4/5">
            <Image
              src="/equipe/foto-raiane.jpeg"
              alt={`${t('members.raiane.name')} - ${t('members.raiane.role')}`}
              width={300}
              height={300}
              className="mx-auto mt-6 mb-4 h-auto w-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              priority
            />
            <h2 className="text-xl font-bold">{t('members.raiane.name')}</h2>
            <p className="font-semibold text-orange-800">{t('members.raiane.role')}</p>
            <p className="mx-auto mt-2 mb-3 max-w-80 text-left text-base text-gray-700 md:text-lg">
              {t('members.raiane.bio')}
            </p>
            <div className="mx-auto mb-3 max-w-80 text-left">
              <a
                href="https://www.instagram.com/rany_gouveia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram mr-3 text-2xl text-orange-800"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Karoline Souza */}
        <div className="rounded-2xl py-3 text-center shadow-lg">
          <div className="mx-auto mt-4 w-4/5">
            <Image
              src="/equipe/foto-karoline.jpeg"
              alt={`${t('members.karoline.name')} - ${t('members.karoline.role')}`}
              width={300}
              height={300}
              className="mx-auto mt-6 mb-4 h-auto w-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              priority
            />
            <h2 className="text-xl font-bold">{t('members.karoline.name')}</h2>
            <p className="font-semibold text-orange-800">{t('members.karoline.role')}</p>
            <p className="mx-auto mt-2 mb-3 max-w-80 text-left text-base text-gray-700 md:text-lg">
              {t('members.karoline.bio')}
            </p>
            <div className="mx-auto mb-3 max-w-80 text-left">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram mr-3 text-2xl text-orange-800"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Stefany */}
        <div className="rounded-2xl py-3 text-center shadow-lg">
          <div className="mx-auto mt-4 w-4/5">
            <Image
              src="/equipe/foto-stefany-.jpeg"
              alt={`${t('members.stefany.name')} - ${t('members.stefany.role')}`}
              width={300}
              height={300}
              className="mx-auto mt-6 mb-4 h-auto w-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              priority
            />
            <h2 className="text-xl font-bold">{t('members.stefany.name')}</h2>
            <p className="font-semibold text-orange-800">{t('members.stefany.role')}</p>
            <p className="mx-auto mt-2 mb-3 max-w-80 text-left text-base text-gray-700 md:text-lg">
              {t('members.stefany.bio')}
            </p>
            <div className="mx-auto mb-3 max-w-80 text-left">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram mr-3 text-2xl text-orange-800"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Domingas Quilombola */}
        <div className="rounded-2xl py-3 text-center shadow-lg">
          <div className="mx-auto mt-4 w-4/5">
            <Image
              src="/equipe/foto-domingas-goncalves.jpeg"
              alt={`${t('members.domingas.name')} - ${t('members.domingas.role')}`}
              width={300}
              height={300}
              className="mx-auto mt-6 mb-4 h-auto w-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              priority
            />
            <h2 className="text-xl font-bold">{t('members.domingas.name')}</h2>
            <p className="font-semibold text-orange-800">{t('members.domingas.role')}</p>
            <p className="mx-auto mt-2 mb-3 max-w-80 text-left text-base text-gray-700 md:text-lg">
              {t('members.domingas.bio')}
            </p>
            <div className="mx-auto mb-3 max-w-80 text-left">
              <a
                href="https://www.instagram.com/domingasquilombola/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram mr-3 text-2xl text-orange-800"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Rafael Lopes */}
        <div className="rounded-2xl py-3 text-center shadow-lg">
          <div className="mx-auto mt-4 w-4/5">
            <Image
              src="/equipe/rafael-lopes.png"
              alt={`${t('members.rafael.name')} - ${t('members.rafael.role')}`}
              width={300}
              height={300}
              className="mx-auto mt-6 mb-4 h-auto w-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              priority
            />
            <h2 className="text-xl font-bold">{t('members.rafael.name')}</h2>
            <p className="font-semibold text-orange-800">{t('members.rafael.role')}</p>
            <p className="mx-auto mt-2 mb-3 max-w-80 text-left text-base text-gray-700 md:text-lg">
              {t('members.rafael.bio')}
            </p>
            <div className="mx-auto mb-3 max-w-80 text-left">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram mr-3 text-2xl text-orange-800"></i>
              </a>
              <a
                href="https://www.instagram.com/rafaellopes.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin text-2xl text-orange-800"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="border-orange mx-auto my-12 w-full max-w-6xl border-y-2 px-4">
        <HowToSupport />
      </section>
    </>
  );
}
