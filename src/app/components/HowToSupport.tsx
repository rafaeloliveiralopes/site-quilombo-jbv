import Link from 'next/link';

export default function HowToSupport() {
  return (
    <section className="bg-snow px-4 py-20 md:py-28 md:pt-32">
      <h2 className="text-dark decoration-orange mb-4 text-center text-2xl font-bold underline md:mb-8 md:text-3xl">
        COMO APOIAR?
      </h2>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 md:flex-row md:items-start">
        <p className="text-dark text-base md:flex-1 md:text-lg">
          A Comunidade Quilombola Urbana João Borges Vieira é um símbolo de{' '}
          <strong>resistência, cultura e história</strong>. Para fortalecer nossas ações e garantir
          que nossos projetos continuem transformando vidas, contamos com o apoio de pessoas e
          organizações que acreditam na nossa causa.
        </p>
        <Link
          href="/como-apoiar"
          className="bg-green text-dark inline-block rounded-full px-6 py-3 text-base font-medium transition hover:bg-green-600 md:text-lg"
        >
          Faça Sua Doação
        </Link>
      </div>
    </section>
  );
}
