import Form from '../components/Form';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <div className="w-full bg-orange-400 px-6 py-6 text-2xl tracking-tight md:text-4xl xl:pl-14 2xl:pl-46">
        <h1>Fale Conosco</h1>
      </div>
      <div className="w-full pt-8 pl-6 lg:pl-0 lg:text-center">
        <h2 className="text-2xl tracking-tight text-zinc-900 sm:text-3xl md:text-4xl lg:text-5xl">
          Associação Quilombola Urbana João Borges Vieira
        </h2>
      </div>
      <div className="mx-auto max-w-6xl items-start lg:flex lg:flex-row lg:items-center lg:justify-center lg:pr-16 lg:pl-16">
        <div className="flex flex-col items-center px-4 py-4 lg:pb-50">
          <div className="w-full max-w-5xl space-y-0 px-2 text-base leading-relaxed text-zinc-800 sm:px-4 md:mt-10 md:px-0 md:text-lg">
            <section>
              <div className="space-y-3 text-left font-light">
                <p>
                  Sinta-se à vontade para agendar uma visita ao nosso espaço e conhecer o nosso
                  trabalho. Você pode, se preferir deixar uma mensagem preenchendo o formulário para
                  contato.
                </p>
              </div>
            </section>

            <section>
              <div className="grid grid-cols-1 gap-6 text-left font-light">
                <div className="w-full space-y-2 py-2 text-left font-light lg:py-6">
                  <div className="mb-4 flex items-center justify-start gap-3">
                    {/* Endereço */}
                    <Image
                      src="/icons/map-marker.svg"
                      alt="Ícone de moradia"
                      width={64}
                      height={64}
                      className="h-9 w-9 lg:h-10"
                    />
                    <p className="w-full">
                      Avenida Benedito Almeida Campos Esquerda com a Rua Araguaia, Centro CEP:
                      76400-000. Uruaçu - GO
                    </p>
                  </div>
                  {/* Telefone */}
                  <div className="mb-4 flex items-center justify-start gap-3">
                    <Image
                      src="/icons/phone.svg"
                      alt="Ícone de moradia"
                      width={64}
                      height={64}
                      className="h-9 w-9 lg:h-10"
                    />
                    <p>+55 (62) 1111-2222</p>
                  </div>
                  {/* email */}
                  <div className="mb-4 flex items-center justify-start gap-3">
                    <Image
                      src="/icons/mail.svg"
                      alt="Ícone de moradia"
                      width={64}
                      height={64}
                      className="h-9 w-9 lg:h-10"
                    />
                    <p>joaoborgesvieira23@gmail.com</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold tracking-tight text-gray-800 sm:text-2xl md:text-3xl">
                Horários de funcionamento
              </h2>

              <div className="space-y-2 text-left font-light">
                <p>Segunda a Sexta 08:00 às 12:00 e 13:30 às 16:30</p>
                <h3 className="text-xl lg:text-2xl">Atendimento com Assistente Social</h3>
                <p>Sexta-Feira 13:00 às 17:00</p>
              </div>
            </section>
          </div>
        </div>
        {/* Formulário */}
        <div className="px-2 pb-16 md:w-full lg:mt-16">
          <Form />
        </div>
      </div>
    </>
  );
}
