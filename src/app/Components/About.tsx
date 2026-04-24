'use client';

import { MessageCircle, Star, Droplet, Feather as Leaf } from 'react-feather';

export default function About() {
  const values = [
    {
      icon: Droplet,
      title: 'Fraîcheur',
      text: 'Des ingrédients soigneusement sélectionnés pour une qualité irréprochable.',
    },
    {
      icon: Star,
      title: 'Raffinement',
      text: 'Des box pensées avec élégance, équilibre et gourmandise.',
    },
    {
      icon: Leaf,
      title: 'Authenticité',
      text: 'Une inspiration japonaise moderne, entre tradition et créativité.',
    },
  ];

  return (
    <section
      id="About"
      className="comfortaa relative overflow-hidden bg-black py-24 px-6 text-white"
    >
      {/* Background image + overlays */}
      <div className="absolute inset-0 bg-[url('/deco-japonaise.jpg')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(220,38,38,0.35)] animate-fadeIn">
            <MessageCircle size={30} className="text-red-500" />
          </div>

          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white/70 backdrop-blur-md">
            À propos
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl animate-slideUp">
            Une expérience sushi{" "}
            <span className="text-red-500">moderne & raffinée</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg animate-fadeInDelay">
            Chez <strong className="text-white">SU SUSHI</strong>, nous mêlons
            fraîcheur, savoir-faire et créativité pour vous offrir des sushis
            généreux, élégants et savoureux. Chaque création est pensée pour
            faire voyager vos papilles dans une ambiance japonaise chic et
            contemporaine.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 text-center backdrop-blur-md transition duration-500 hover:-translate-y-3 hover:border-red-500/50 hover:bg-red-500/10 hover:shadow-[0_0_35px_rgba(220,38,38,0.25)]"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-600/20 text-red-500 transition duration-500 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-bold text-white">{item.title}</h3>

                <p className="mt-4 text-sm leading-relaxed text-white/65">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-white/10 bg-black/50 p-6 text-center backdrop-blur-md md:p-8">
          <p className="text-lg italic leading-relaxed text-white/80">
            “Des recettes inspirées du Japon, une présentation soignée et une
            expérience pensée pour les amateurs de sushi haut de gamme.”
          </p>
        </div>
      </div>
    </section>
  );
}