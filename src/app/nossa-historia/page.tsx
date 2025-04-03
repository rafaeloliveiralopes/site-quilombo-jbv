import Image from 'next/image';

export default function Page() {
  return (
    <>
      <div className="bg-light-chocolate w-full px-6 py-6 text-2xl md:px-8 md:text-4xl">
        <h1>Nossa História</h1>
      </div>
      <div className="flex flex-col items-center px-4">
        <Image
          src="/artesanatos-bonecas-negras-na-estante.png"
          alt="Foto da Associação Comunidade Quilombola João Borges Vieira"
          width={800}
          height={600}
          className="mt-6 w-full max-w-3xl rounded-lg shadow-lg"
          priority
        />

        <div className="mt-10 w-full max-w-3xl space-y-8 px-2 text-base leading-relaxed sm:px-4 md:px-0 md:text-lg">
          <section>
            <h2 className="mb-2 text-lg font-semibold sm:text-xl">Surgimento dos Quilombolas</h2>
            <p>
              O termo quilombo tem origem na língua quimbundo, falada por povos de Angola, e se
              referia a aldeias fortificadas. No contexto brasileiro, os quilombos eram comunidades
              formadas por pessoas escravizadas que fugiam da opressão e buscavam viver em
              liberdade. Esses espaços tornaram-se locais de resistência contra a escravidão,
              permitindo a preservação da cultura africana e o desenvolvimento de novas formas de
              organização social.
            </p>
            <p>
              Os quilombolas, por sua vez, são os descendentes dessas comunidades, reconhecidos por
              sua identidade cultural e histórica. No Brasil, as comunidades quilombolas surgiram a
              partir da metade do século XVI, quando grupos de africanos e afrodescendentes fugiram
              da escravidão e se reuniram para formar sociedades autônomas. Essas comunidades,
              chamadas de quilombos, eram locais onde seus habitantes viviam de forma coletiva,
              cultivavam a terra e preservavam seus costumes e tradições ancestrais.
            </p>
            <p>
              Hoje, as comunidades quilombolas seguem lutando por reconhecimento e pela garantia de
              seus direitos territoriais e culturais, desempenhando um papel fundamental na
              preservação da história e da diversidade cultural do Brasil.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold sm:text-xl">
              Migração dos Quilombolas para Uruaçu
            </h2>
            <p>
              A comunidade quilombola urbana João Borges Vieira surgiu após o conhecido massacre na
              Fazenda Terra Branco, na qual eram escravizados diversos ascendentes dos membros
              atuais da comunidade. Pelas vozes dos anciãos da comunidade, a história conta como
              havia diversos relatos de maus tratos, invisibilizando por trabalho forçado, entre
              tantas práticas terríveis contra a população preta e escrava da região. O excesso de
              maus tratos e abusos fez com que diversos negros fugissem da fazenda e se instalassem
              nos arredores da cidade, onde futuramente se constituíram como comunidade quilombola.
            </p>
            <p>
              Aos poucos, com a dispersão e dificuldades de sobrevivência, os quilombolas foram se
              organizando politicamente, até que foi fundada por representantes da associação a
              Comunidade Quilombola Urbana João Borges Vieira, localizada em Uruaçu, região norte de
              Goiás.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold sm:text-xl">
              Criação da ONG Quilombo João Borges Vieira
            </h2>
            <p>
              Com a instabilidade formalizada, a Associação da Comunidade Quilombola João Borges
              Vieira traça uma linha sólida e organizada dos passos dados por seus antepassados e da
              luta por reconhecimento. Em 2018, foi feita a solicitação de certificação da
              comunidade junto à Fundação Cultural Palmares, com êxito na certificação e
              reconhecimento formal da comunidade como quilombola, o que permitiu acesso a programas
              de políticas públicas voltados para as comunidades tradicionais.
            </p>
            <p>
              Atualmente, a Associação é composta por diversas lideranças, homens e mulheres, que
              constroem coletivamente os caminhos de fortalecimento da cultura, das tradições e das
              ações afirmativas, através da realização de oficinas culturais, participação em
              conselhos municipais e estaduais e articulação com outros movimentos sociais.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
