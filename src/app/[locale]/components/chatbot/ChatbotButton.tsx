'use client';

import { forwardRef, type Ref } from 'react';
import { useTranslations } from 'next-intl';

type ChatbotButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

function ChatbotButton({ isOpen, onClick }: ChatbotButtonProps, ref: Ref<HTMLButtonElement>) {
  const t = useTranslations('chatbot');

  return (
    <button
      ref={ref}
      type="button"
      aria-controls="guided-chatbot-window"
      aria-expanded={isOpen}
      aria-label={isOpen ? t('closeLabel') : t('buttonLabel')}
      onClick={onClick}
      className="bg-green text-dark border-dark focus-visible:ring-orange flex items-center rounded-full border-2 px-4 py-3 text-sm font-bold shadow-lg transition hover:bg-green-600 focus-visible:ring-4 sm:text-base"
    >
      <span className="hidden sm:inline">{t('title')}</span>
    </button>
  );
}

export default forwardRef(ChatbotButton);
