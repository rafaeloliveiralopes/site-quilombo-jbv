'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    contactName: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-light-chocolate mx-auto max-w-md rounded-2xl px-4 py-9 lg:px-10"
    >
      <h2 className="mb-6 text-center text-lg lg:text-2xl">FORMULÁRIO PARA CONTATO</h2>

      <div className="mb-4">
        <label htmlFor="contactName" className="mb-1 block">
          Nome
        </label>
        <input
          type="text"
          id="contactName"
          name="contactName"
          className="b w-full border-b bg-transparent px-0 py-2 transition-colors duration-200 focus:bg-white focus:outline-none"
          required
          value={formData.contactName}
          onChange={handleChange}
          autoComplete="name"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="mb-1 block">
          Telefone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="b w-full border-b bg-transparent px-0 py-2 transition-colors duration-200 focus:bg-white focus:outline-none"
          required
          value={formData.phone}
          onChange={handleChange}
          autoComplete="tel"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="mb-1 block">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="b w-full border-b bg-transparent px-0 py-2 transition-colors duration-200 focus:bg-white focus:outline-none"
          required
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="mb-1 block">
          Assunto
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="b w-full border-b bg-transparent px-0 py-2 transition-colors duration-200 focus:bg-white focus:outline-none"
          required
          value={formData.subject}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="mb-1 block">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-md bg-white px-3 py-2 focus:bg-white focus:outline-none"
          required
          value={formData.message}
          onChange={handleChange}
          autoComplete="off"
        ></textarea>
      </div>

      <button
        type="submit"
        className="rounded-full bg-orange-400 px-8 py-2 text-lg hover:bg-orange-500 focus:outline-none"
      >
        Enviar
      </button>
    </form>
  );
}
