import Image from 'next/image';
import HowToSupport from '../components/HowToSupport';

export default function Page() {
  return (
    <>
      <div className="w-full bg-orange-400 px-6 py-6 text-2xl tracking-tight md:text-4xl xl:pl-14 2xl:pl-46">
        <h1>Nosso Trabalho</h1>
      </div>

      <div className="flex flex-col items-center px-4">
        <div className="mt-8 w-full max-w-6xl space-y-8 px-2 text-base leading-relaxed text-zinc-800 sm:px-4 md:mt-10 md:px-0 md:text-lg">
          <section>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
              Suporte às Famílias em Situação de Vulnerabilidade
            </h2>

            <div className="space-y-4 text-left font-light">
              <p>
                Nossas ações contemplam teoria e prática na busca por benefícios às famílias em
                situação de vulnerabilidade de toda a região onde situa-se o Residencial Quilombola,
                ultrapassando os membros associados à Comunidade Quilombola.
              </p>
              <p>
                Portanto, a execução dos projetos beneficia toda camada vulnerável da região onde
                reside a comunidade prioritária em questão, reconhecida como uma das regiões mais
                precárias da cidade de Uruaçu, considerando o acesso limitado dessa população aos
                equipamentos públicos.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
              Conquista de Moradias Dignas
            </h2>

            <div className="space-y-4 text-left font-light">
              <p>
                Por meio da Associação, em 2016, 150 casas foram construídas na zona urbana de
                Uruaçu/GO, criando o Residencial Quilombola da cidade, pelo programa Minha Casa
                Minha Vida.
              </p>
              <p>
                Em 2017, 50 casas foram construídas nas terras dos beneficiários na zona rural,
                também por meio do Minha Casa Minha Vida.
              </p>
              <p>
                Em 2018, houve a reforma da cozinha industrial na sede da Associação, por edital de
                Furnas, que fomenta os Saberes Tradicionais. E estamos com previsão em 2025, de
                serem construídas mais 50 casas na zona urbana da cidade de Uruaçu.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
              Iniciativas de Preservação Cultural e Combate às Desigualdades Sociais
            </h2>

            <div className="space-y-4 text-left font-light">
              <ul className="list-disc pl-4 md:pl-12">
                <li>
                  Desde 2009, a Associação capacita as mulheres quilombolas para a confecção de
                  bonecas negras de pano, bonecas de cabaças, camisetas bordadas, confecção de
                  bonecas de biscuit, entre outros. Este trabalho ajuda a estas mulheres a trazerem
                  renda e dignidade às suas famílias.
                </li>
                <li>
                  Desde 2016, a Associação desenvolve o Grupo de Dança do Tambor, um projeto
                  permanente que reúne 30 mulheres da comunidade e 15 músicos locais. Este grupo
                  dedica-se à prática e divulgação da dança tradicional, fortalecendo a identidade
                  cultural quilombola e promovendo a valorização de suas raízes africanas.
                </li>
                <li>
                  Desde 2021, iniciado pelo edital ITAÚ Social, com continuidade pelo Edital da
                  Política Nacional Aldir Blanc com trabalhos de valorização dos saberes
                  tradicionais por meio de: palestras nas escolas; oficinas de dança de tambor;
                  mostras culturais; entre outros.
                </li>
                <li>
                  Projeto &quot;Acreditar é preciso&quot;: Edital aprovado no CMDCA para realização
                  do projeto com crianças e adolescentes em 2025. Sendo proposto oficinas de
                  artesanatos, capoeira, dança de tambor, reforço escolar e apresentações culturais.
                </li>
              </ul>
              <Image
                src="/projeto-resgate-cultura-quilombola.png"
                alt="Foto da Associação Comunidade Quilombola João Borges Vieira"
                width={400}
                height={200}
                className="mx-auto my-6 max-w-60 rounded-lg shadow-lg"
                priority
              />
              <p>
                Paralelamente, a Associação realiza palestras e oficinas educativas focadas na
                conscientização sobre igualdade racial e enfrentamento ao racismo.
              </p>
              <p>
                Essas atividades buscam sensibilizar a comunidade e o público em geral sobre a
                importância da equidade racial, promovendo o respeito às diferenças e a inclusão
                social.
              </p>
              <p>
                Além disso, a Associação atua em projetos sociais que visam melhorar as condições de
                vida das famílias em situação de vulnerabilidade.
              </p>
              <p>
                Por meio de parcerias com o poder público e outras organizações, são desenvolvidas
                ações que buscam reduzir as desigualdades sociais e promover o acesso a direitos
                básicos, contribuindo para o fortalecimento da cidadania e da justiça social.
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
