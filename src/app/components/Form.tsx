export default function Form() {
  return (
    <form className="bg-light-chocolate mx-auto max-w-md rounded-2xl px-4 py-9 lg:px-10">
      <h2 className="mb-6 text-center text-lg lg:text-2xl">FORMULÁRIO PARA CONTATO</h2>

      <div className="mb-4">
        <label htmlFor="name" className="mb-1 block">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="b w-full border-b bg-transparent px-0 py-2 transition-colors duration-200 focus:bg-white focus:outline-none"
          required
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
