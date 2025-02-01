'use client';

import { MessageCircle } from 'react-feather';

export default function About() {
  return (
    <section id="About" className="bg-[url('/deco-japonaise.jpg')] py-20 comfortaa">
      <div className="max-w-4xl mx-auto px-6 text-center bg-black bg-opacity-70 rounded-lg shadow-lg p-8">
        {/* Icône de guillemets */}
        <MessageCircle size={50} className="text-red-500 mx-auto mb-4" />

        {/* Titre */}
        <h2 className="text-3xl font-bold text-white mb-4">À propos de nous</h2>

        {/* Texte descriptif */}
        <p className="text-lg text-white leading-relaxed">
          Découvrez l’authenticité du Japon à travers notre restaurant de sushi, où fraîcheur et tradition 
          se rencontrent pour une expérience culinaire unique. Nos chefs experts sélectionnent les meilleurs 
          ingrédients pour vous offrir des saveurs inoubliables.
        </p>

        {/* Deuxième icône de guillemets */}
        <MessageCircle size={50} className="text-red-500 mx-auto mt-4 rotate-180" />
      </div>
    </section>
  );
}
