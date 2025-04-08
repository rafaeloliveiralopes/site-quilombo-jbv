import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div className="bg-light-chocolate w-full px-6 py-6 text-2xl tracking-tight md:px-8 md:text-4xl">
        <h1>Como Apoiar</h1>
      </div>

      <div className="flex flex-col items-center px-4">
        <div className="mt-8 w-full max-w-6xl space-y-3 px-2 text-base leading-relaxed text-zinc-800 sm:px-4 md:mt-10 md:px-0 md:text-lg">
          <section>
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
              Apoie a Associação Quilombola Urbana João Borges Vieira!
            </h2>
            <div className="space-y-3 text-left font-light">
              <p>
                A Associação Quilombola Urbana João Borges Vieira é um símbolo de resistência e luta
                pela valorização da cultura e dos direitos quilombolas. Nosso trabalho visa
                fortalecer a identidade da comunidade, promover inclusão social e criar
                oportunidades que garantam a autonomia e o bem-estar de seus membros
              </p>
              <p>
                Contribuir financeiramente com nossa associação é abraçar essa causa e reconhecer a
                importância da preservação cultural e do fortalecimento comunitário.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
              Por que apoiar?
            </h2>
            <div className="space-y-3 text-left font-light">
              <p>
                Seu apoio é essencial para que possamos continuar desenvolvendo ações que beneficiam
                diretamente nossa comunidade. Com sua contribuição, poderemos:
              </p>
              <ul className="list-disc pl-4 md:pl-12">
                <li>
                  Promover atividades culturais e educacionais, garantindo que a história e as
                  tradições quilombolas sejam preservadas e transmitidas às futuras gerações.
                </li>
                <li>
                  Fomentar o desenvolvimento social e econômico, oferecendo capacitação profissional
                  e oportunidades de geração de renda para os moradoresf
                </li>
                <li>
                  Fortalecer a incidência política e a defesa de direitos, assegurando que a voz da
                  comunidade seja respeitada e suas demandas sejam atendidas.
                </li>
                <li>
                  Realizar pesquisas e produzir materiais educativos, ampliando o acesso à
                  informação e fortalecendo nossa luta por justiça e equidade.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
              Como contribuir?
            </h2>

            <div className="space-y-3 text-left font-light">
              <p>
                No Brasil, muitas organizações sem fins lucrativos dependem de financiamentos
                governamentais e privados para manter suas atividades. No entanto, a doação
                individual permite que qualquer pessoa faça parte dessa transformação.
              </p>
              <p>
                Doar é simples e seguro! Clique em “Doar via PayPal” ou escaneie o código QR com a
                câmera de seu celular. Você será redirecionado(a) para a página do PayPal. Caso você
                não possua uma conta PayPal, escolha a opção “Fazer a doação com um Cartão de
                Crédito” e preencha seus dados. Se sua moeda não for Real Brasileiro, não se
                preocupe, insira o valor que deseja doar em sua moeda local e o pagamento será
                convertido automaticamente.
              </p>
              <p>Juntos, podemos transformar vidas e preservar nossa história!</p>
            </div>
          </section>
          <Link
            href="/#"
            className="bg-green text-dark inline-block rounded-full px-6 py-3 text-base font-medium transition hover:bg-green-600 md:text-lg"
          >
            Doar via PayPal
          </Link>
        </div>
      </div>
    </>
  );
}
