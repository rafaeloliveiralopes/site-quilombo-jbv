import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias['@messages'] = path.resolve(__dirname, 'src/messages');
    return config;
  },
};

export default withNextIntl(nextConfig);
