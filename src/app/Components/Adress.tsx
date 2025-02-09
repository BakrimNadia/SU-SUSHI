'use client';

import Map from './Map';

export default function Adress() {
  return (
    <div id="Adress" className="bg-gradient-to-r from-red-500 to-red-100 p-3">
        <div>
        <img className="w-200 h-60 rounded text-center mx-auto mt-4 opacity-80" src="resto.jpg" alt="lrestaurant" />
        </div>
 <div className="comfortaa max-w-4xl mx-auto p-4 text-black">
      <h2 className="text-2xl font-bold text-center mb-6">Adresse</h2>
      <p className="text-lg font-semibold text-center">Avenue de la Batterie<br />06270 Villeneuve-Loubet</p>
      <p className="text-lg font-semibold text-center">Ouvert du Lundi au Samedi<br />de 11h à 14h et de 18h à 22h</p>
      <p className="text-lg font-semibold text-center">Fermé le Dimanche</p>
      </div>
      <Map />
    </div>
  );
}