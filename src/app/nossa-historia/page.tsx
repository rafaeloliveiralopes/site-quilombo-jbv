import Image from 'next/image';
import HowToSupport from '../components/HowToSupport';

export default function Page() {
  return (
    <>
      <div className="bg-light-chocolate w-full px-6 py-6 text-2xl tracking-tight md:px-8 md:text-4xl">
        <h1>Nossa História</h1>
      </div>

      <div className="flex flex-col items-center px-4">
        <Image
          src="/artesanatos-bonecas-negras-imagem-editada.png"
          alt="Foto da Associação Comunidade Quilombola João Borges Vieira"
          width={800}
          height={600}
          className="mt-6 w-full max-w-6xl rounded-lg shadow-lg"
          priority
        />

        <div className="mt-8 w-full max-w-6xl space-y-8 px-2 text-base leading-relaxed text-zinc-800 sm:px-4 md:mt-10 md:px-0 md:text-lg">
          <section>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
              Surgimento dos Quilombolas
            </h2>

            <div className="space-y-4 text-left font-light">
              <p>
                O termo quilombo tem origem na língua quimbundo, falada por povos de Angola, e se
                referia a aldeias fortificadas. No contexto brasileiro, os quilombos eram
                comunidades formadas por pessoas escravizadas que fugiam da opressão e buscavam
                viver em liberdade.
              </p>
              <p>
                Esses espaços tornaram-se locais de resistência contra a escravidão, permitindo a
                preservação da cultura africana e o desenvolvimento de novas formas de organização
                social.
              </p>
              <p>
                Os quilombolas, por sua vez, são os descendentes dessas comunidades, reconhecidos
                por sua identidade cultural e histórica.
              </p>
              <p>
                No Brasil, as comunidades quilombolas surgiram a partir da metade do século XVI,
                quando grupos de africanos e afrodescendentes fugiram da escravidão e se reuniram
                para formar sociedades autônomas.
              </p>
              <p>
                Essas comunidades, chamadas de quilombos, eram locais onde seus habitantes viviam de
                forma coletiva, cultivavam a terra e preservavam seus costumes e tradições
                ancestrais.
              </p>
              <p>
                Hoje, as comunidades quilombolas seguem lutando por reconhecimento e pela garantia
                de seus direitos territoriais e culturais, desempenhando um papel fundamental na
                preservação da história e da diversidade cultural do Brasil.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
              Migração dos Quilombolas para Uruaçu
            </h2>

            <div className="space-y-4 text-left font-light">
              <p>
                A comunidade quilombola urbana João Borges Vieira surgiu após o conhecido massacre
                na Fazenda Terra Branco, na qual eram escravizados diversos ascendentes dos membros
                atuais da comunidade.
              </p>
              <p>
                Pelas vozes dos anciãos da comunidade, a história conta como havia diversos relatos
                de maus tratos, insalubridade no trabalho, torturas entre tantas outras práticas
                terríveis com a população preta e escrava da região.
              </p>
              <p>
                O excesso de maus tratos e abusos sobrecarregou a vida do povo negro e resultou em
                muitas revoltas, o que incentivou a desonestidade do proprietário da fazenda onde
                eram escravizados.
              </p>
              <p>
                O massacre da Fazenda Terra Branco ocorreu devido à expulsão violenta da Comunidade
                Quilombola da região, pelo fim da escravatura. O povo foi expulso baseado em um
                documento assinado pelo membro mais velho da comunidade (responsável pelas
                decisões), que fora ludibriado por não saber ler, a assinar um documento de doação
                das terras do povo preto para grandes latifundiários.
              </p>
              <p>
                Assim, foram obrigados a migrarem para o povoado mais próximo, conhecido como
                Povoado do Pombal, onde se formou o Quilombo do Pombal. O Quilombo do Pombal
                situava-se na zona rural do município de Santa Rita do Novo Destino e ainda preserva
                muitas das tradições culturais de ex-escravizados que se estabeleceram na
                localidade.
              </p>
              <p>
                Apesar de ser considerado, por alguns, como o patriarca da comunidade, João Borges
                foi o primeiro migrante do Povoado do Pombal para o Setor São Vicente, na área
                urbana de Uruaçu (êxodo rural). Aos poucos, outros membros da família também se
                mudaram para a urbanidade, em busca de melhores condições de vida.
              </p>
              <p>
                Assim, forma-se uma comunidade urbana de quilombolas e alguns anos depois a
                Associação da Comunidade é criada, para formalizar uma instituição de amparo e busca
                pelos direitos dessa população tradicional do norte goiano.
              </p>
              <p>
                No entanto, as famílias quilombolas estavam acostumadas à atividade rurais e foram
                inseridas na zona urbana sem nenhuma preparação.
              </p>
              <p>
                Os homens foram trabalhar em fazendas próximas de Uruaçu e suas mulheres ficaram em
                casa sem informação, sem qualificação, sem acesso à educação ou formação
                profissional. Infelizmente, os quilombolas da região ainda estavam na linha da
                pobreza, sem conseguir acessar oportunidades de crescimento social, econômico e
                cultural.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
              Criação da ONG Quilombo João Borges Vieira
            </h2>

            <div className="space-y-4 text-left font-light">
              <p>
                Como instituição formalizada, a Associação da Comunidade do Quilombo Urbano João
                Borges Vieira sempre esteve vinculada a conquistas do povo quilombola da região do
                norte goiano, em especial ao direito à moradia dos descendentes do antigo quilombo
                rural que havia na região.
              </p>
              <p>
                Nas últimas décadas, a atuação da Associação se tornou cada vez mais presente nas
                famílias beneficiárias, chefiados por mães negras. Em 2007, a associação foi
                certificada por meio da Fundação Palmares e assim o poder público e organizações sem
                fins lucrativos começaram a atuar com mais afinco pelo povo preto da região.
              </p>
              <p>
                Com isso, a partir de 2010, a Associação da Comunidade do Quilombo Urbano João
                Borges Vieira é criada pelos seus membros mais ativos, para que a busca por direitos
                para todo o povo quilombola do norte goiano seja oficializada e conte com os
                aparatos da Constituição Federal do Brasil e do Estado Democrático de Direito para o
                seu crescimento e priorização em programas sociais.
              </p>
              <p>
                Atualmente mais de 700 famílias descendentes do Quilombo do Pombal fazem parte da
                Associação da Comunidade do Quilombo Urbano João Borges Vieira (zona urbana e alguns
                membros ainda na zona rural, na região do antigo Quilombo do Pombal), com grande
                parte delas localizadas nas áreas periféricas da cidade de Uruaçu.
              </p>
            </div>
          </section>
        </div>
      </div>
      <section className="border-orange mx-auto my-12 w-full max-w-6xl border-y-2 px-4">
        <HowToSupport />
      </section>
    </>
  );
}
