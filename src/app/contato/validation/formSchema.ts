import { z } from 'zod';

export const contactFormSchema = z.object({
  contactName: z.string().min(2, { message: 'Campo obrigatório' }),
  phone: z.string().trim().min(11, { message: 'Digite um número de contato válido com DDD' }),
  email: z.string().trim().optional(),
  subject: z.string().min(5, { message: 'Informe o assunto que deseja falar' }),
  contactMessage: z
    .string()
    .min(50, { message: 'Sua mensagem deve ter pelo menos 50 caracteres' })
    .max(1000, { message: 'Você excedeu os 1000 caracteres :(' }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
