import Image from 'next/image';
import HowToSupport from '../components/HowToSupport';

export default function Page() {
  return (
    <>
      <div className="bg-light-chocolate w-full px-6 py-6 text-2xl tracking-tight md:text-4xl xl:pl-14 2xl:pl-46">
        <h1>Galeria de Imagens</h1>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 min-[364px]:grid-cols-2 min-[639px]:grid-cols-3">
        {/* Imagem 01 */}
        <Image
          src="/galeria/img-acervo-01.png"
          alt="A presidente da Asociação Quilombola Urbana João Borges Vieira, Raiane Gouveia, em um evento de abertura da oficina de estudo das religiões de matrizes africanas."
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 02 */}
        <Image
          src="/galeria/img-acervo-02.png"
          alt="Oficina de dança do tambor. A coordenadoras desaberes Domingas Quilombola com outra mulher tocando um tambor em um espaço cultural."
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 03 */}
        <Image
          src="/galeria/img-acervo-03.png"
          alt="Oficina de turbantes e tranças a Segunda Semana da consciência negra."
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 04 */}
        <Image
          src="/galeria/img-acervo-04.png"
          alt="Dia do empoderamento feminino. Mulheres quilombolas em um evento de empoderamento feminino e beleza da mulher negra."
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 05 */}
        <Image
          src="/galeria/img-acervo-05.png"
          alt="Boneca negra artesanal com um vestido colorido em azul, verde, amarelo e vermelho."
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 06 */}
        <Image
          src="/galeria/img-acervo-06.png"
          alt="Dia internacional da mulher negra, latina americana e caribenha. Uma mulher negra sorrindo de perfil e usando um turbante verde escuro com detalhes pretos."
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 07 */}
        <Image
          src="/galeria/img-acervo-07.png"
          alt="Treinamento de capoeira em um ginásio esportivo."
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 08 */}
        <Image
          src="/galeria/img-acervo-08.png"
          alt="Evento de fomento à cultura afro-brasileira nas escolas. Domingas Quilombola com um microfone fazendo o seu discurso de emponderamento da cultura afro-brasileira."
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 09 */}
        <Image
          src="/galeria/img-acervo-09.png"
          alt="Time Quilombola pousando para foto após um campeonato de futebol."
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 10 */}
        <Image
          src="/galeria/img-acervo-10.png"
          alt="Imagem da equipe de jogadores de futebol que participara da copa quilombola."
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 11 */}
        <Image
          src="/galeria/img-acervo-11.png"
          alt="Pequenas bonecas artesanais negras dispostas lado a lado em uma janela."
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 12 */}
        <Image
          src="/galeria/img-acervo-12.png"
          alt="Foto de evento em comemoração do dia das crianças na comunidade quilombola."
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 13 */}
        <Image
          src="/galeria/img-acervo-13.png"
          alt="Bolsa artesanal com o desenho de uma mulher negra usando um trubante."
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 14 */}
        <Image
          src="/galeria/img-acervo-14.png"
          alt="Foto da primeira semana da consciência negra."
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 15 */}
        <Image
          src="/galeria/img-acervo-15.png"
          alt="Bolsa artesanal de pano com o rosto de uma boneca negra na frente."
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 16 */}
        <Image
          src="/galeria/img-acervo-16.png"
          alt="Boneca negra artesanal usando um enfeite branco no cabelo e vestida com um vestido colorido nas cores verde, vermelha, amarela, laranja e detalhes em preto."
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
      </div>
      {/* Seção "Como Apoiar?" */}
      <section className="border-orange mx-auto my-12 w-full max-w-6xl border-y-2 px-4">
        <HowToSupport />
      </section>
    </>
  );
}
