export const Presentation = () => {
    return (
      <section className="comfortaa relative w-full flex flex-col md:flex-row items-center md:items-start py-12 px-6 md:px-16">
        <div className="md:w-1/2 text-white text-center md:text-left z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Découvrez l&apos;Art du Sushi 🍣
          </h2>
          <p className="text-lg md:text-xl mx-2">
            Chez <strong>SU SUSHI</strong>, nous vous proposons une expérience culinaire unique,
            alliant fraîcheur et tradition japonaise. Venez savourer nos box créations raffinées !
          </p><br />
          <p className="text-lg md:text-xl mx-2">
           Découvrez nos 3 box créations :<br />
           <br />
            - Box Classique<br />
            - Box Premium<br />
            - Box Végétarienne
          </p>
        </div>
        <div className="md:w-1/2 relative mt-6 md:mt-0 text-center">
          <img
            src="/sushi-box.webp"
            alt="Plateau de sushis"
            className="w-full h-auto md:rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-110"
          />
          <button className="mt-4 pt-3 pb-3 justify-center bg-red-700 px-2 rounded font-bold hover:bg-red-500 transition-transform duration-300 hover:scale-110">Commander en ligne</button>
        </div>
  
        <div className="absolute inset-0 bg-black/50 md:hidden"></div>
      </section>
    );
  };
  
  export default Presentation;
  