'use client';

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="comfortaa bg-gradient-to-r from-red-500 to-black text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Logo & Nom du restaurant */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold comfortaa">Su Sushi</h2>
          <p className="text-white text-sm">L&apos;authenticité du Japon dans votre assiette</p>
        </div>

        {/* Sections du footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Adresse */}
          <div>
            <h3 className="text-lg font-semibold">Adresse</h3>
            <p className="text-white">Avenue de la batterie - Villeneuve_Loubet</p>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-lg font-semibold">Horaires</h3>
            <p className="text-white">
              Lundi - Samedi : 11h - 14h & 18h - 22h <br />
              Fermé le Dimanche
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-white">Téléphone : 04 23 45 67 89</p>
            <p className="text-white">Email : contact@su-sushi.fr</p>
          </div>
        </div>

        {/* Icônes réseaux sociaux */}
        <div className="flex justify-center space-x-6 mt-6">
          <a href="#" className="text-white hover:text-red-500 text-2xl">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white hover:text-red-500 text-2xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-white hover:text-red-500 text-2xl">
            <FaTwitter />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-white text-sm mt-6">
          &copy; {new Date().getFullYear()} Su Sushi. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
