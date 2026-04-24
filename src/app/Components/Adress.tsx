'use client';

import Map from './Map';
import { MapPin, Clock, Calendar } from 'react-feather';

export default function Adress() {
  const infos = [
    {
      icon: MapPin,
      title: 'Adresse',
      text: 'Avenue de la Batterie, 06270 Villeneuve-Loubet',
    },
    {
      icon: Clock,
      title: 'Horaires',
      text: 'Lundi au Samedi · 11h-14h / 18h-22h',
    },
    {
      icon: Calendar,
      title: 'Fermeture',
      text: 'Fermé le Dimanche',
    },
  ];

  return (
    <section
      id="Adress"
      className="comfortaa relative overflow-hidden bg-black py-24 px-6 text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />
      <div className="absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white/70 backdrop-blur-md">
            Nous trouver
          </p>

          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl animate-slideUp">
            Venez déguster nos créations{" "}
            <span className="text-red-500">sur place</span>
          </h2>

          <p className="mt-6 text-white/70 md:text-lg animate-fadeInDelay">
            Retrouvez SU SUSHI à Villeneuve-Loubet pour une expérience japonaise
            moderne, gourmande et raffinée.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-2xl backdrop-blur-md">
            <img
              src="/resto.jpg"
              alt="Restaurant SU SUSHI"
              className="h-[320px] w-full rounded-[1.5rem] object-cover transition duration-700 hover:scale-110 md:h-[520px]"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/65 p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.3em] text-red-400">
                SU SUSHI
              </p>
              <p className="mt-2 text-xl font-bold">
                Une adresse gourmande au cœur de Villeneuve-Loubet.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-5">
            {infos.map((info) => {
              const Icon = info.icon;

              return (
                <div
                  key={info.title}
                  className="group rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-red-500/50 hover:bg-red-500/10 hover:shadow-[0_0_30px_rgba(220,38,38,0.18)]"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600/20 text-red-500 transition group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">{info.title}</h3>
                      <p className="mt-2 text-white/70">{info.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <a
              href="#Contact"
              className="mt-4 inline-flex w-fit rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_30px_rgba(220,38,38,0.45)] transition hover:scale-105 hover:bg-red-700"
            >
              Nous contacter
            </a>
          </div>
        </div>

        <Map />
      </div>
    </section>
  );
}