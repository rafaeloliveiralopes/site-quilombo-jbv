'use client';

import type { Ref } from 'react';
import { useTranslations } from 'next-intl';
import type { ChatbotFaqItem } from './chatbotFaq';

type ChatbotOptionsProps = {
  items: readonly ChatbotFaqItem[];
  onSelectItem: (item: ChatbotFaqItem) => void;
  firstItemRef?: Ref<HTMLButtonElement>;
};

export default function ChatbotOptions({ items, onSelectItem, firstItemRef }: ChatbotOptionsProps) {
  const t = useTranslations('chatbot');

  return (
    <nav aria-label={t('menuLabel')}>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <button
              ref={item === items[0] ? firstItemRef : undefined}
              type="button"
              onClick={() => onSelectItem(item)}
              className="text-dark border-chocolate hover:bg-orange/20 focus-visible:ring-orange w-full rounded-md border px-3 py-2 text-left text-sm font-medium transition focus-visible:ring-4"
            >
              {t(item.questionKey)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
