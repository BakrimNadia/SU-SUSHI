export const Presentation = () => {
    return (
      <section className="relative w-full flex flex-col md:flex-row items-center md:items-start py-12 px-6 md:px-16">
        {/* Texte à gauche */}
        <div className="md:w-1/2 text-white text-center md:text-left z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Découvrez l&apos;Art du Sushi 🍣
          </h2>
          <p className="text-lg md:text-xl">
            Chez <strong>SU SUSHI</strong>, nous vous proposons une expérience culinaire unique,
            alliant fraîcheur et tradition japonaise. Venez savourer nos box créations raffinées !
          </p>
        </div>
  
        {/* Image à droite */}
        <div className="md:w-1/2 relative mt-6 md:mt-0">
          <img
            src="/sushi-box.webp"
            alt="Plateau de sushis"
            className="w-full h-auto md:rounded-lg shadow-lg object-cover"
          />
        </div>
  
        {/* Effet de superposition sur mobile */}
        <div className="absolute inset-0 bg-black/50 md:hidden"></div>
      </section>
    );
  };
  
  export default Presentation;
  