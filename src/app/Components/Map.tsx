'use client';

import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useMemo } from 'react';

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  // Coordonnées d'un lieu à Paris (Tour Eiffel)
  const center = useMemo(() => ({ lat: 48.8584, lng: 2.2945 }), []);

  return (
    <div className="w-full h-96">
      {/* Vérification que l'API est bien chargée */}
      {!isLoaded ? (
        <p className="text-center text-gray-700">Chargement de la carte...</p>
      ) : (
        <GoogleMap
          mapContainerClassName="w-full h-full rounded-lg shadow-lg"
          center={center}
          zoom={15}
          options={{
            disableDefaultUI: true, // Désactive les boutons par défaut
            zoomControl: true, // Active le zoom
          }}
        >
          {/* Marqueur sur la carte */}
          <Marker position={center} />
        </GoogleMap>
      )}
    </div>
  );
}
