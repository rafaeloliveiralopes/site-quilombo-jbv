'use client';

import { useTranslations } from 'next-intl';

type ChatbotButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function ChatbotButton({ isOpen, onClick }: ChatbotButtonProps) {
  const t = useTranslations('chatbot');

  return (
    <button
      type="button"
      aria-controls="guided-chatbot-window"
      aria-expanded={isOpen}
      aria-label={isOpen ? t('closeLabel') : t('buttonLabel')}
      onClick={onClick}
      className="bg-green text-dark border-dark focus-visible:ring-orange flex items-center gap-2 rounded-full border-2 px-4 py-3 text-sm font-bold shadow-lg transition hover:bg-green-600 focus-visible:ring-4 sm:text-base"
    >
      <span aria-hidden="true" className="text-lg leading-none">
        ?
      </span>
      <span>{t('title')}</span>
    </button>
  );
}
