'use client';

import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { MapPin, Clock, Phone, Mail } from 'react-feather';

export default function Footer() {
  return (
    <footer className="comfortaa relative overflow-hidden bg-black px-6 py-16 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black" />
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          {/* Logo + marque */}
          <div className="text-center lg:text-left">
            <img
              src="/Logo-sushi.png"
              alt="Logo SU SUSHI"
              className="mx-auto h-28 w-auto transition duration-500 hover:scale-110 lg:mx-0"
            />

            <h2 className="mt-5 text-3xl font-bold">
              SU <span className="text-red-500">SUSHI</span>
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65 mx-auto lg:mx-0">
              L&apos;authenticité du Japon dans votre assiette, avec une touche
              moderne, raffinée et gourmande.
            </p>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              {[
                { icon: FaFacebookF, label: 'Facebook' },
                { icon: FaInstagram, label: 'Instagram' },
                { icon: FaTiktok, label: 'TikTok' },
              ].map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white backdrop-blur-md transition hover:-translate-y-1 hover:border-red-500/50 hover:bg-red-600 hover:shadow-[0_0_25px_rgba(220,38,38,0.35)]"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Infos */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md transition hover:-translate-y-2 hover:border-red-500/40">
              <MapPin className="mb-4 text-red-500" size={24} />
              <h3 className="font-bold">Adresse</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Avenue de la Batterie<br />
                06270 Villeneuve-Loubet
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md transition hover:-translate-y-2 hover:border-red-500/40">
              <Clock className="mb-4 text-red-500" size={24} />
              <h3 className="font-bold">Horaires</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Lun. - Sam. : 11h - 14h<br />
                18h - 22h<br />
                Dimanche fermé
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md transition hover:-translate-y-2 hover:border-red-500/40">
              <Phone className="mb-4 text-red-500" size={24} />
              <h3 className="font-bold">Téléphone</h3>
              <p className="mt-3 text-sm text-white/65">
                04 23 45 67 89
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md transition hover:-translate-y-2 hover:border-red-500/40">
              <Mail className="mb-4 text-red-500" size={24} />
              <h3 className="font-bold">Email</h3>
              <p className="mt-3 break-all text-sm text-white/65">
                contact@su-sushi.fr
              </p>
            </div>
          </div>
        </div>

        {/* Ligne bas */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-sm text-white/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} SU SUSHI. Tous droits réservés.
          </p>

          <div className="flex gap-5">
            <a href="#Menu" className="transition hover:text-red-500">
              Menu
            </a>
            <a href="#About" className="transition hover:text-red-500">
              À propos
            </a>
            <a href="#Contact" className="transition hover:text-red-500">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}