export const Presentation = () => {
  return (
    <section
      id="Presentation"
      className="comfortaa relative overflow-hidden bg-black py-20 px-6 md:px-16 text-white"
    >
      {/* Background luxe */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Texte */}
        <div className="text-center lg:text-left">
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white/70 backdrop-blur-md">
            L&apos;expérience SU SUSHI
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Découvrez l&apos;art du{" "}
            <span className="text-red-500">sushi premium</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
            Chez <strong className="text-white">SU SUSHI</strong>, chaque box est
            pensée comme une expérience culinaire raffinée : fraîcheur,
            équilibre, générosité et inspiration japonaise.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Box Classique", "Box Premium", "Box Végétarienne"].map((box) => (
              <div
                key={box}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-red-500/50 hover:bg-red-500/10"
              >
                <span className="text-2xl">🍣</span>
                <p className="mt-3 text-sm font-bold text-white">{box}</p>
              </div>
            ))}
          </div>

          <a
            href="#Contact"
            className="mt-10 inline-flex rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_30px_rgba(220,38,38,0.45)] transition hover:scale-105 hover:bg-red-700"
          >
            Commander en ligne
          </a>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-red-600/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
            <img
              src="/sushi-box.webp"
              alt="Plateau de sushis SU SUSHI"
              className="h-[320px] w-full rounded-[1.5rem] object-cover transition duration-700 hover:scale-110 sm:h-[420px] lg:h-[520px]"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.25em] text-red-400">
                Créations raffinées
              </p>
              <p className="mt-2 text-lg font-bold">
                Des box généreuses, fraîches et élégantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;