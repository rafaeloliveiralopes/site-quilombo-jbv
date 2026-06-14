export type ChatbotFaqId =
  | 'about-association'
  | 'activities-purpose'
  | 'how-to-support'
  | 'contact-channels'
  | 'question-not-listed'
  | 'chatbot-limitations';

export type ChatbotFaqAction = {
  labelKey: string;
  href: `/${string}`;
};

export type ChatbotFaqItem = {
  id: ChatbotFaqId;
  questionKey: string;
  answerKey: string;
  action?: ChatbotFaqAction;
};

export const chatbotFaqItems = [
  {
    id: 'about-association',
    questionKey: 'faq.aboutAssociation.question',
    answerKey: 'faq.aboutAssociation.answer',
    action: {
      labelKey: 'faq.aboutAssociation.actionLabel',
      href: '/nossa-historia',
    },
  },
  {
    id: 'activities-purpose',
    questionKey: 'faq.activitiesPurpose.question',
    answerKey: 'faq.activitiesPurpose.answer',
    action: {
      labelKey: 'faq.activitiesPurpose.actionLabel',
      href: '/nosso-trabalho',
    },
  },
  {
    id: 'how-to-support',
    questionKey: 'faq.howToSupport.question',
    answerKey: 'faq.howToSupport.answer',
    action: {
      labelKey: 'faq.howToSupport.actionLabel',
      href: '/como-apoiar',
    },
  },
  {
    id: 'contact-channels',
    questionKey: 'faq.contactChannels.question',
    answerKey: 'faq.contactChannels.answer',
    action: {
      labelKey: 'faq.contactChannels.actionLabel',
      href: '/contato',
    },
  },
  {
    id: 'question-not-listed',
    questionKey: 'faq.questionNotListed.question',
    answerKey: 'faq.questionNotListed.answer',
    action: {
      labelKey: 'faq.questionNotListed.actionLabel',
      href: '/contato',
    },
  },
  {
    id: 'chatbot-limitations',
    questionKey: 'faq.chatbotLimitations.question',
    answerKey: 'faq.chatbotLimitations.answer',
  },
] as const satisfies readonly ChatbotFaqItem[];
