import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Lista de todos os idiomas suportados
  locales: ['pt', 'en', 'es'],

  // Usado quando nenhum idioma corresponde
  defaultLocale: 'pt',
});
