'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function QRCodeDonationBox() {
  const t = useTranslations('qrCodeDonationBox');

  return (
    <div className="my-4 gap-4 rounded-lg bg-zinc-300 p-6 shadow-md md:my-0 md:max-w-sm">
      {/* <h3 className="text-xl font-semibold text-zinc-800 md:text-center md:text-3xl">
        {t('title')}
      </h3> */}
      {/* <p className="mt-2 text-sm text-zinc-700 md:text-base">{t('description')}</p> */}

      {/* Após a Associação resolver o problema com a conta bancária, remover esta imagem */}
      <div className="flex flex-col items-center justify-center md:mx-20 md:flex-row md:pt-22">
        <Image
          src="/icons/care-donation-svgrepo-com.svg"
          alt={t('alt')}
          className="mt-4 h-48 w-48 rounded-xl border md:mt-0 md:py-2"
          width={120}
          height={120}
        />

        {/* <Image
          src="/qrcode-pix.png"
          alt={t('alt')}
          className="mt-4 h-48 w-48 rounded-xl border md:mt-0 md:py-2"
          width={120}
          height={120}
        /> */}
      </div>

      {/* <div className="mt-4 text-sm">
        <p>
          <strong>{t('dataTitle')}</strong>
        </p>
        <p>
          <strong>{t('cnpjLabel')}</strong> {t('cnpjValue')}
        </p>
        <p>
          <strong>{t('nameLabel')}</strong> {t('nameValue')}
        </p>
      </div> */}
    </div>
  );
}
