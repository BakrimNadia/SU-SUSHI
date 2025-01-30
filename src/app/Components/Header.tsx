'use client';

import React from 'react';

export const Header = () => {
  return (
    <div className="video-container">
      {/* Vidéo en arrière-plan */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="sushi-video.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>

      {/* Texte animé */}
      <div className="scrolling-text"> Bienvenue chez <strong>SU SUSHI</strong>, <br />
        découvrez une variété de <br />
        sushi haut de gamme 🍣</div>
    </div>
  );
};

export default Header;