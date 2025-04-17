import Image from 'next/image';
import HowToSupport from '../components/HowToSupport';

const team = [
  {
    name: 'Raiane Gouveia',
    role: 'Presidente',
    image: '/equipe/foto-raiane.jpeg',
    bio: 'Lidero nossa comunidade com dedicação e compromisso, buscando sempre promover o fortalecimento das nossas tradições culturais, o desenvolvimento sustentável e a melhoria das condições de vida para todos os moradores. Minha atuação é focada na luta pelos direitos da comunidade quilombola e na busca de soluções que atendam às nossas necessidades, sem abrir mão da preservação das nossas raízes históricas e culturais. Como líder, me empenho para garantir um futuro mais justo e igualitário para todos.',
    socials: {
      instagram: 'https://instagram.com',
    },
  },
  {
    name: 'Karoline Souza',
    role: 'Secretária Executiva',
    image: '/equipe/foto-karoline.jpeg',
    bio: 'Palestrante e criadora de projetos na comunidade Quilombola, com formação em Letras Linguística, Licenciatura em Letras Português e atualmente estudante de Direito pelo Universidade Estadual de Goiás. Ao longo da minha trajetória, tenho me dedicado a criar e implementar projetos que promovem a educação, a cultura e o fortalecimento da nossa comunidade. Minhas palestras e iniciativas buscam incentivar o protagonismo da juventude quilombola e destacar a importância das nossas tradições e da preservação da nossa história. Acredito que a educação e a troca de conhecimentos são ferramentas essenciais para o empoderamento e o desenvolvimento sustentável das comunidades tradicionais.',
    socials: {
      instagram: 'https://instagram.com',
    },
  },
  {
    name: 'Stefany',
    role: 'Coordenadora de Projetos',
    image: '/equipe/foto-stefany-.jpeg',
    bio: 'Graduanda em Tecnologia em Agronomia, com experiência em áreas administrativas e no apoio a comunidades tradicionais. Faço parte da comunidade quilombola desde setembro de 2023, onde busco contribuir de forma organizada e eficaz. Acredito no equilíbrio entre trabalho sério e em constante evolução, tanto profissional quanto pessoal.',
    socials: {
      instagram: 'https://instagram.com',
    },
  },
  {
    name: 'Domingas Quilombola',
    role: 'Coordenadora de Saberes e Tradição',
    image: '/equipe/foto-domingas-goncalves.jpeg',
    bio: 'Sou Domingas Gouveia de Carvalho, conhecida como Domingas Quilombola. Sou pedagoga, ex-vereadora de Uruaçu (GO), ex-presidente da Comunidade Quilombola João Borges Vieira e atualmente atuo como coordenadora da CONAQ. Minha trajetória é marcada pela luta por moradia, educação e direitos das comunidades quilombolas, sempre com o compromisso de fortalecer nossa identidade e garantir justiça social.',
    socials: {
      instagram: 'https://instagram.com',
    },
  },
  {
    name: 'Rafael Lopes',
    role: 'Desenvolvedor Voluntário',
    image: '/equipe/rafael-lopes.png',
    bio: 'Desenvolvedor Web e graduando em Engenharia de Software, venho explorando o universo do desenvolvimento web desde 2021. Além disso, iniciei em 2025 como desenvolvedor voluntário da Associação Comunitária Quilombola, implementando ferramentas digitais que otimizam processos e fortalecem a comunicação com a comunidade. Nas horas vagas, dedico-me à leitura e a assistir filmes e séries, atividades que estimulam minha criatividade e ampliam minha visão de mundo.',
    socials: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com/in/rafael-lopes',
    },
  },
];

export default function Page() {
  return (
    <>
      <div className="bg-chocolate w-full px-6 py-6 text-2xl tracking-tight text-white md:text-4xl xl:pl-14 2xl:pl-46">
        <h1>Nossa Equipe</h1>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-2 py-12 md:grid-cols-2">
        {team.map(({ name, role, image, bio, socials }) => (
          <div key={name} className="rounded-2xl py-3 text-center shadow-lg">
            <div className="mx-auto mt-4 w-4/5">
              <Image
                className="mx-auto mt-6 mb-4 h-auto w-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                src={image}
                alt={`${name} - ${role}`}
                width={300}
                height={300}
                priority
              />
              <h2 className="text-xl font-bold">{name}</h2>
              <p className="font-semibold text-orange-800">{role}</p>
              <p className="mx-auto mt-2 mb-3 max-w-80 text-left text-base text-gray-700 md:text-lg">
                {bio}
              </p>
              <div className="mx-auto mb-3 max-w-80 text-left">
                {socials.instagram && (
                  <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram mr-3 text-2xl text-orange-800"></i>
                  </a>
                )}
                {socials.linkedin && (
                  <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin text-2xl text-orange-800"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <section className="border-orange mx-auto my-12 w-full max-w-6xl border-y-2 px-4">
        <HowToSupport />
      </section>
    </>
  );
}
