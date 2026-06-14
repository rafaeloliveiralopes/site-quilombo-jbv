'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import type { ChatbotFaqItem } from './chatbotFaq';
import ChatbotOptions from './ChatbotOptions';

type ChatbotWindowProps = {
  items: readonly ChatbotFaqItem[];
  selectedItem: ChatbotFaqItem | null;
  onSelectItem: (item: ChatbotFaqItem) => void;
  onBack: () => void;
  onClose: () => void;
};

export default function ChatbotWindow({
  items,
  selectedItem,
  onSelectItem,
  onBack,
  onClose,
}: ChatbotWindowProps) {
  const t = useTranslations('chatbot');
  const firstOptionRef = useRef<HTMLButtonElement>(null);
  const actionLinkRef = useRef<HTMLAnchorElement>(null);
  const backButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selectedItem) {
      (actionLinkRef.current ?? backButtonRef.current)?.focus();
      return;
    }

    firstOptionRef.current?.focus();
  }, [selectedItem]);

  return (
    <aside
      id="guided-chatbot-window"
      aria-labelledby="guided-chatbot-title"
      className="bg-snow border-dark max-h-[calc(100dvh-6rem)] w-[min(calc(100vw-2rem),24rem)] overflow-y-auto rounded-lg border-2 shadow-xl"
    >
      <header className="bg-chocolate text-snow flex items-center justify-between gap-3 px-4 py-3">
        <h2 id="guided-chatbot-title" className="text-base font-bold">
          {t('title')}
        </h2>
        <button
          type="button"
          aria-label={t('closeLabel')}
          onClick={onClose}
          className="border-snow hover:bg-light-chocolate focus-visible:ring-orange flex h-9 w-9 items-center justify-center rounded-full border text-xl font-bold focus-visible:ring-4"
        >
          <span aria-hidden="true">x</span>
        </button>
      </header>

      <div className="space-y-4 p-4">
        {!selectedItem ? (
          <>
            <p className="text-dark text-sm leading-relaxed">{t('welcome')}</p>
            <ChatbotOptions
              items={items}
              onSelectItem={onSelectItem}
              firstItemRef={firstOptionRef}
            />
          </>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-dark text-sm font-bold">{t(selectedItem.questionKey)}</p>
              <p className="text-dark text-sm leading-relaxed">{t(selectedItem.answerKey)}</p>
            </div>

            {selectedItem.action && (
              <Link
                ref={actionLinkRef}
                href={selectedItem.action.href}
                className="bg-green text-dark border-dark focus-visible:ring-orange inline-flex rounded-full border px-4 py-2 text-sm font-bold transition hover:bg-green-600 focus-visible:ring-4"
              >
                {t(selectedItem.action.labelKey)}
              </Link>
            )}

            <button
              ref={backButtonRef}
              type="button"
              aria-label={t('backToMenu')}
              onClick={onBack}
              className="text-dark border-dark hover:bg-orange/20 focus-visible:ring-orange block rounded-full border px-4 py-2 text-sm font-bold transition focus-visible:ring-4"
            >
              {t('backToMenu')}
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
