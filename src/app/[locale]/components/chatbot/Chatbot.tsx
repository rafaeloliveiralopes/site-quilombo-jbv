'use client';

import { useRef, useState } from 'react';
import { chatbotFaqItems, type ChatbotFaqItem } from './chatbotFaq';
import ChatbotButton from './ChatbotButton';
import ChatbotWindow from './ChatbotWindow';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ChatbotFaqItem | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeChatbot = () => {
    setIsOpen(false);
    setSelectedItem(null);
    window.setTimeout(() => buttonRef.current?.focus(), 0);
  };

  const showMenu = () => {
    setSelectedItem(null);
  };

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {isOpen && (
        <ChatbotWindow
          items={chatbotFaqItems}
          selectedItem={selectedItem}
          onSelectItem={setSelectedItem}
          onBack={showMenu}
          onClose={closeChatbot}
        />
      )}

      <ChatbotButton
        ref={buttonRef}
        isOpen={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      />
    </div>
  );
}
