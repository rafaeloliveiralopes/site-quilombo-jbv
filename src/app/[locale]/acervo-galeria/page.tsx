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
          alt=""
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 02 */}
        <Image
          src="/galeria/img-acervo-02.png"
          alt=""
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 03 */}
        <Image
          src="/galeria/img-acervo-03.png"
          alt=""
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 04 */}
        <Image
          src="/galeria/img-acervo-04.png"
          alt=""
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 05 */}
        <Image
          src="/galeria/img-acervo-05.png"
          alt=""
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 06 */}
        <Image
          src="/galeria/img-acervo-06.png"
          alt=""
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 07 */}
        <Image
          src="/galeria/img-acervo-07.png"
          alt=""
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 08 */}
        <Image
          src="/galeria/img-acervo-08.png"
          alt=""
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 09 */}
        <Image
          src="/galeria/img-acervo-09.png"
          alt=""
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 10 */}
        <Image
          src="/galeria/img-acervo-10.png"
          alt=""
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 11 */}
        <Image
          src="/galeria/img-acervo-11.png"
          alt=""
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 12 */}
        <Image
          src="/galeria/img-acervo-12.png"
          alt=""
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 13 */}
        <Image
          src="/galeria/img-acervo-13.png"
          alt=""
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 14 */}
        <Image
          src="/galeria/img-acervo-14.png"
          alt=""
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 15 */}
        <Image
          src="/galeria/img-acervo-15.png"
          alt=""
          width={380}
          height={380}
          className="mx-auto h-auto w-auto max-w-[90%] origin-center transform rounded-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
        {/* Imagem 16 */}
        <Image
          src="/galeria/img-acervo-16.png"
          alt=""
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
