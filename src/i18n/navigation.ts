import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Wrappers leves em torno das APIs de navegação do Next.js
// que consideram a configuração de rotas
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
