import HowToSupport from '../components/HowToSupport';

// Links para os vídeos no youtube a respeito da Associação Quilombola João Borges Vieira
const videos = [
  'https://www.youtube.com/embed/7R-JTc5Xffo',
  'https://www.youtube.com/embed/tKxMjyjd7jk',
  'https://www.youtube.com/embed/-Itz2DJS4G4',
  'https://www.youtube.com/embed/D606OzlRSTk',
  'https://www.youtube.com/embed/tKxMjyjd7jk',
  'https://www.youtube.com/embed/fbzddL8x_bM',
  'https://www.youtube.com/embed/n4DnTJan5LA',
  'https://www.youtube.com/embed/3AK-dtx91kE',
  'https://www.youtube.com/embed/c0EW0NU6u9o',
  'https://www.youtube.com/embed/JLdsATdY8vc',
  'https://www.youtube.com/embed/97rAKaGaXW0',
];

export default function VideosPage() {
  return (
    <>
      <div className="bg-chocolate text-snow w-full px-6 py-6 text-2xl tracking-tight md:px-8 md:text-4xl">
        <h1>Vídeos</h1>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6">
        {videos.map((link, index) => (
          <div key={index} className="">
            <iframe
              src={link}
              title={`Video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
      {/* Seção "Como Apoiar?" */}
      <section className="border-orange mx-auto my-12 w-full max-w-6xl border-y-2 px-4">
        <HowToSupport />
      </section>
    </>
  );
}
