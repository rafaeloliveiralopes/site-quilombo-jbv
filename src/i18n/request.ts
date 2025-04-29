import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = hasLocale(routing.locales, requestLocale) ? requestLocale : routing.defaultLocale;

  const messages = {
    home: (await import(`@/messages/${locale}/home.json`)).default,
    contact: (await import(`@/messages/${locale}/contact.json`)).default,
    form: (await import(`@/messages/${locale}/form.json`)).default,
    gallery: (await import(`@/messages/${locale}/gallery.json`)).default,
    history: (await import(`@/messages/${locale}/history.json`)).default,
    howToSupport: (await import(`@/messages/${locale}/howToSupport.json`)).default,
    navigation: (await import(`@/messages/${locale}/navigation.json`)).default,
    qrCodeDonationBox: (await import(`@/messages/${locale}/qrCodeDonationBox.json`)).default,
    support: (await import(`@/messages/${locale}/support.json`)).default,
    team: (await import(`@/messages/${locale}/team.json`)).default,
    videos: (await import(`@/messages/${locale}/videos.json`)).default,
    work: (await import(`@/messages/${locale}/work.json`)).default,
  };

  return { locale, messages };
});
