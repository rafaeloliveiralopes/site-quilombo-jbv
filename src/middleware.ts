import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Corresponder a todos os caminhos exceto para
  // - … se eles começarem com `/api`, `/trpc`, `/_next` ou `/_vercel`
  // - … aqueles que contenham um ponto (ex: `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
