import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';
import fs from 'fs/promises';
import path from 'path';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  const messagesDir = path.resolve(process.cwd(), 'messages', locale);
  const files = await fs.readdir(messagesDir);

  const messages: Record<string, any> = {};
  await Promise.all(
    files
      .filter((f) => f.endsWith('.json'))
      .map(async (file) => {
        const name = file.replace(/\.json$/, '');
        const raw = await fs.readFile(path.join(messagesDir, file), 'utf-8');
        const parsed = JSON.parse(raw);
        messages[name] = parsed[name] ?? parsed;
      })
  );

  return { locale, messages };
});
