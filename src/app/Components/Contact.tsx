'use client';

import { Mail, Phone, MessageCircle, Send } from 'react-feather';

export default function Contact() {
  return (
    <section
      id="Contact"
      className="comfortaa relative overflow-hidden bg-black px-6 py-24 text-white sm:py-32 lg:px-8"
    >
      {/* Background premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />
      <div className="absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.12),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white/70 backdrop-blur-md">
            Contact
          </p>

          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl animate-slideUp">
            Une envie de sushi ?{" "}
            <span className="text-red-500">Écrivez-nous</span>
          </h2>

          <p className="mt-6 text-white/70 md:text-lg animate-fadeInDelay">
            Une question, une commande ou une réservation ? Envoyez-nous votre
            message, nous vous répondrons rapidement.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Infos */}
          <div className="space-y-5">
            {[
              {
                icon: Mail,
                title: 'Email',
                text: 'contact@susushi.fr',
              },
              {
                icon: Phone,
                title: 'Téléphone',
                text: '04 00 00 00 00',
              },
              {
                icon: MessageCircle,
                title: 'Réponse rapide',
                text: 'Pour commandes, réservations et informations.',
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-red-500/50 hover:bg-red-500/10 hover:shadow-[0_0_30px_rgba(220,38,38,0.18)]"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600/20 text-red-500 transition group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-2 text-white/70">{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Formulaire */}
          <form
            action="#"
            method="POST"
            className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-md md:p-8"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="text-sm font-semibold">
                  Prénom
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Votre prénom"
                  className="mt-3 w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-red-500 focus:bg-black/70 focus:ring-4 focus:ring-red-500/20"
                />
              </div>

              <div>
                <label htmlFor="last-name" className="text-sm font-semibold">
                  Nom
                </label>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Votre nom"
                  className="mt-3 w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-red-500 focus:bg-black/70 focus:ring-4 focus:ring-red-500/20"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="text-sm font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="votre@email.com"
                  className="mt-3 w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-red-500 focus:bg-black/70 focus:ring-4 focus:ring-red-500/20"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Votre message..."
                  className="mt-3 w-full resize-none rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-red-500 focus:bg-black/70 focus:ring-4 focus:ring-red-500/20"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_30px_rgba(220,38,38,0.45)] transition hover:scale-[1.02] hover:bg-red-700"
            >
              Envoyer le message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}