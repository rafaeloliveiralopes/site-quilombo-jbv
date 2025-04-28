'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { contactFormSchema, ContactFormData } from '../contato/validation/formSchema';

export default function Form() {
  const t = useTranslations('form');

  const [formData, setFormData] = useState<ContactFormData>({
    contactName: '',
    phone: '',
    email: '',
    subject: '',
    contactMessage: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [pendingSubmission, setPendingSubmission] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const errors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormData;
        errors[field] = issue.message;
      });
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setShowModal(true);
  };

  const confirmAndSend = async () => {
    setShowModal(false);
    setPendingSubmission(true);

    try {
      // 1️⃣ armazena o retorno
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.contactName,
          phone: formData.phone,
          email: formData.email,
          subject: formData.subject,
          message: formData.contactMessage, //  <- chave certa
        }),
        next: { revalidate: 0 },
      });

      // 2️⃣ valida
      if (!res.ok) throw new Error('Erro ao enviar a mensagem.');

      // zera o formulário, exibe modal de sucesso etc.
      setFormData({
        contactName: '',
        phone: '',
        email: '',
        subject: '',
        contactMessage: '',
      });
      setShowSuccessModal(true);
    } catch (error) {
      alert(t('errorAlert'));
      console.error(error);
    } finally {
      setPendingSubmission(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-light-chocolate mx-auto max-w-md rounded-2xl px-4 py-9 lg:px-10"
      >
        <h2 className="mb-6 text-center text-lg lg:text-2xl">{t('formTitle')}</h2>

        <div className="mb-4">
          <label htmlFor="contactName" className="mb-1 block">
            {t('fields.name')}
          </label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            autoComplete="name"
            className="w-full border-b bg-transparent px-0 py-2"
            value={formData.contactName}
            onChange={handleChange}
          />
          {formErrors.contactName && (
            <p className="mt-1 text-sm text-white">{formErrors.contactName}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="mb-1 block">
            {t('fields.phone')}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            className="w-full border-b bg-transparent px-0 py-2"
            value={formData.phone}
            onChange={handleChange}
          />
          {formErrors.phone && <p className="mt-1 text-sm text-white">{formErrors.phone}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="mb-1 block">
            {t('fields.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            className="w-full border-b bg-transparent px-0 py-2"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <p className="mt-1 text-sm text-white">{formErrors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="mb-1 block">
            {t('fields.subject')}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            autoComplete="off"
            className="w-full border-b bg-transparent px-0 py-2"
            value={formData.subject}
            onChange={handleChange}
          />
          {formErrors.subject && <p className="mt-1 text-sm text-white">{formErrors.subject}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="mb-1 block">
            {t('fields.message')}
          </label>
          <textarea
            id="message"
            name="contactMessage"
            rows={4}
            autoComplete="off"
            className="w-full rounded-md bg-white px-3 py-2"
            value={formData.contactMessage}
            onChange={handleChange}
          />
          {formErrors.contactMessage && (
            <p className="mt-1 text-sm text-white">{formErrors.contactMessage}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={pendingSubmission}
          className={`rounded-full px-8 py-2 text-lg transition-all duration-200 ${
            pendingSubmission
              ? 'cursor-not-allowed bg-orange-300'
              : 'bg-orange-400 hover:bg-orange-500'
          } flex items-center justify-center gap-2`}
        >
          {pendingSubmission && (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          )}
          {pendingSubmission ? t('submitButton.sending') : t('submitButton.send')}
        </button>
      </form>
      {/* Modal de Consentimento */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="mx-4 max-w-md rounded-lg bg-white p-6 text-zinc-800 shadow-lg">
            <h2 className="mb-2 text-lg font-semibold">{t('privacyModal.title')}</h2>
            <p className="text-sm">{t('privacyModal.description')}</p>
            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="rounded-md border border-zinc-400 px-4 py-2 text-zinc-800 hover:bg-zinc-200"
              >
                {t('privacyModal.cancel')}
              </button>
              <button
                onClick={confirmAndSend}
                className="rounded-md bg-orange-400 px-4 py-2 text-white hover:bg-orange-500"
              >
                {t('privacyModal.confirm')}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Modal de Sucesso */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="mx-4 max-w-md rounded-lg bg-white p-6 text-zinc-800 shadow-lg">
            <h2 className="mb-2 text-lg font-semibold">{t('successModal.title')}</h2>
            <p className="text-sm">{t('successModal.description')}</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowSuccessModal(false)}
                className="rounded-md bg-orange-400 px-4 py-2 text-white hover:bg-orange-500"
              >
                {t('successModal.close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
