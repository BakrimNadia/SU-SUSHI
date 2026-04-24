'use client';

import React from 'react';

export const Header = () => {
  return (
    <section className="relative min-h-[85vh] overflow-hidden flex items-center justify-center text-white">
      {/* Vidéo en arrière-plan */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover scale-105"
      >
        <source src="/sushi-video.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>

      {/* Overlay luxe */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.25),transparent_45%)]" />

      {/* Effet décoratif */}
      <div className="absolute top-24 left-10 h-32 w-32 rounded-full bg-red-600/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl animate-pulse" />

      {/* Contenu */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs sm:text-sm uppercase tracking-[0.35em] text-white/80 backdrop-blur-md animate-fadeIn">
          Sushi premium • Fait avec passion
        </p>

        <h1 className="comfortaa text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight drop-shadow-2xl animate-slideUp">
          SU <span className="text-red-500">SUSHI</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/85 leading-relaxed animate-fadeInDelay">
          Découvrez une expérience japonaise moderne, raffinée et gourmande,
          avec une sélection de sushis haut de gamme préparés avec soin.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInDelay">
          <a
            href="#Menu"
            className="rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_30px_rgba(220,38,38,0.55)] transition hover:scale-105 hover:bg-red-700"
          >
            Voir la carte
          </a>

          <a
            href="#Contact"
            className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md transition hover:scale-105 hover:bg-white hover:text-black"
          >
            Réserver
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border border-white/40 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Header;