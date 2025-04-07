import Image from 'next/image';
import HowToSupport from '../components/HowToSupport';

export default function Page() {
  return (
    <>
      <div className="bg-light-chocolate w-full px-6 py-6 text-2xl tracking-tight md:px-8 md:text-4xl">
        <h1>Galeria de Imagens</h1>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 sm:px-[10%] md:max-w-[90%] md:grid-cols-3">
        {/* Imagem 01 */}
        <Image
          src="/galeria/img-acervo-01.png"
          alt=""
          width={360}
          height={360}
          className="mx-auto h-auto w-auto max-w-[90%] rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 02 */}
        <Image
          src="/galeria/img-acervo-02.png"
          alt=""
          width={360}
          height={360}
          className="mx-auto h-auto w-auto max-w-[90%] rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 03 */}
        <Image
          src="/galeria/img-acervo-03.png"
          alt=""
          width={360}
          height={360}
          className="mx-auto h-auto w-auto max-w-[90%] rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 04 */}
        <Image
          src="/galeria/img-acervo-04.png"
          alt=""
          width={360}
          height={360}
          className="mx-auto h-auto w-auto max-w-[90%] rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 05 */}
        <Image
          src="/galeria/img-acervo-05.png"
          alt=""
          width={360}
          height={360}
          className="mx-auto h-auto w-auto max-w-[90%] rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 06 */}
        <Image
          src="/galeria/img-acervo-06.png"
          alt=""
          width={360}
          height={360}
          className="mx-auto h-auto w-auto max-w-[90%] rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 07 */}
        <Image
          src="/galeria/img-acervo-07.png"
          alt=""
          width={360}
          height={360}
          className="mx-auto h-auto w-auto max-w-[90%] rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 08 */}
        <Image
          src="/galeria/img-acervo-08.png"
          alt=""
          width={360}
          height={360}
          className="mx-auto h-auto w-auto max-w-[90%] rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 09 */}
        <Image
          src="/galeria/img-acervo-09.png"
          alt=""
          width={360}
          height={360}
          className="mx-auto h-auto w-auto max-w-[90%] rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 10 */}
        <Image
          src="/galeria/img-acervo-10.png"
          alt=""
          width={360}
          height={360}
          className="mx-auto h-auto w-auto max-w-[90%] rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 11 */}
        <Image
          src="/galeria/img-acervo-11.png"
          alt=""
          width={360}
          height={360}
          className="mx-auto h-auto w-auto max-w-[90%] rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 12 */}
        <Image
          src="/galeria/img-acervo-12.png"
          alt=""
          width={360}
          height={360}
          className="mx-auto h-auto w-auto max-w-[90%] rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 13 */}
        <Image
          src="/galeria/img-acervo-13.png"
          alt=""
          width={360}
          height={360}
          className="mx-auto h-auto w-auto max-w-[90%] rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 14 */}
        <Image
          src="/galeria/img-acervo-14.png"
          alt=""
          width={360}
          height={360}
          className="mx-auto h-auto w-auto max-w-[90%] rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 15 */}
        <Image
          src="/galeria/img-acervo-15.png"
          alt=""
          width={360}
          height={360}
          className="mx-auto h-auto w-auto max-w-[90%] rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 16 */}
        <Image
          src="/galeria/img-acervo-16.png"
          alt=""
          width={360}
          height={360}
          className="mx-auto h-auto w-auto max-w-[90%] rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Seção "Como Apoiar?" */}
      <div className="mt-8 w-full max-w-6xl space-y-8 px-2 text-base leading-relaxed text-zinc-800 sm:px-4 md:mt-10 md:px-0 md:text-lg"></div>
      <section className="border-orange mx-auto my-12 w-full max-w-6xl border-y-2 px-4">
        <HowToSupport />
      </section>
    </>
  );
}
