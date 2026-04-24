'use client';

const menuSections = [
  {
    title: 'Nos créations sushi',
    subtitle: 'Des incontournables frais et raffinés',
    image: '/sushi-menu0.jpg',
    items: [
      { name: 'Sushi Saumon', price: '12€' },
      { name: 'Sushi Thon', price: '14€' },
      { name: 'California Roll', price: '10€' },
      { name: 'Makis Variés', price: '16€' },
      { name: 'Sashimi Mix', price: '18€' },
    ],
  },
  {
    title: 'Nos menus box',
    subtitle: 'Des assortiments généreux et élégants',
    image: '/sushi-menu2.jpg',
    items: [
      { name: 'Box Classique', price: '20€' },
      { name: 'Box Premium', price: '30€', badge: 'Signature' },
      { name: 'Box Végétarienne', price: '25€' },
    ],
  },
  {
    title: 'Nos formules',
    subtitle: 'Pour compléter votre expérience SU SUSHI',
    image: '/sushi-menu3.jpg',
    items: [
      { name: 'Formule Boisson', price: '23€' },
      { name: 'Formule Dessert', price: '26€' },
      { name: 'Formule Complète', price: '30€', badge: 'Populaire' },
    ],
  },
];

export default function SushiMenu() {
  return (
    <section
      id="Menu"
      className="comfortaa relative overflow-hidden bg-black py-24 px-6 text-white"
    >
      {/* Background premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div className="absolute left-0 top-32 h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />
      <div className="absolute right-0 bottom-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.12),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white/70 backdrop-blur-md">
            Notre carte
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl animate-slideUp">
            Des saveurs japonaises{" "}
            <span className="text-red-500">haut de gamme</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg animate-fadeInDelay">
            Découvrez nos sushis, box et formules imaginés pour une expérience
            gourmande, moderne et raffinée.
          </p>
        </div>

        {/* Sections */}
        <div className="mt-16 space-y-12">
          {menuSections.map((section, sectionIndex) => (
            <div
              key={section.title}
              className={`grid items-center gap-8 rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl backdrop-blur-md transition duration-500 hover:border-red-500/40 hover:bg-white/[0.08] md:p-6 lg:grid-cols-2 ${
                sectionIndex % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* Image */}
              <div className="group relative overflow-hidden rounded-[1.7rem]">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <img
                  src={section.image}
                  alt={section.title}
                  className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-110 sm:h-[360px] lg:h-[440px]"
                />

                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <p className="text-xs uppercase tracking-[0.3em] text-red-400">
                    SU SUSHI
                  </p>
                  <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                    {section.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    {section.subtitle}
                  </p>
                </div>
              </div>

              {/* Menu list */}
              <div className="space-y-4 p-2 md:p-4">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-red-500/50 hover:bg-red-500/10 hover:shadow-[0_0_30px_rgba(220,38,38,0.18)]"
                  >
                    <div className="absolute inset-y-0 left-0 w-1 bg-red-600 opacity-60 transition duration-300 group-hover:w-2" />

                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h4 className="text-lg font-bold text-white">
                            {item.name}
                          </h4>

                          {item.badge && (
                            <span className="rounded-full border border-red-500/40 bg-red-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-red-300">
                              {item.badge}
                            </span>
                          )}
                        </div>

                        <p className="mt-2 text-sm text-white/55">
                          Préparation soignée, fraîcheur et équilibre.
                        </p>
                      </div>

                      <span className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-black text-black shadow-lg transition duration-300 group-hover:bg-red-600 group-hover:text-white">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mx-auto mt-16 max-w-4xl rounded-[2rem] border border-white/10 bg-black/60 p-8 text-center backdrop-blur-md">
          <p className="text-sm uppercase tracking-[0.3em] text-red-400">
            Envie de commander ?
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-3xl">
            Choisissez votre box préférée et savourez l’expérience SU SUSHI.
          </h3>

          <a
            href="#Contact"
            className="mt-8 inline-flex rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_30px_rgba(220,38,38,0.45)] transition hover:scale-105 hover:bg-red-700"
          >
            Commander maintenant
          </a>
        </div>
      </div>
    </section>
  );
}