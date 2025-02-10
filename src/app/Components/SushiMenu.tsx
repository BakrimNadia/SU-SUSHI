'use client';

export default function SushiMenu() {
    const menuItems = [
      { name: "Sushi Saumon", price: "12€" },
      { name: "Sushi Thon", price: "14€" },
      { name: "California Roll", price: "10€" },
      { name: "Makis Variés", price: "16€" },
      { name: "Sashimi Mix", price: "18€" },
    ];
  
    const menuBoxes = [
      { name: "Box Classique", price: "20€" },
      { name: "Box Premium", price: "30€" },
      { name: "Box Végétarienne", price: "25€" },
    ];
  
    const formulas = [
      { name: "Formule Boisson", price: "23€" },
      { name: "Formule Dessert", price: "26€" },
      { name: "Formule Complète", price: "30€" },
    ];
  
    return (
      <div id="Menu" className="comfortaa bg-black max-w-4xl mx-auto p-4">
        <img className="w-40 h-40 rounded-full mx-auto mt-5 mb-5 shadow-lg shadow-red-500 transition-transform duration-300 hover:scale-110" src="sushi-menu0.jpg" alt="sushi menu" />
        <h2 className="text-2xl font-bold text-center mb-6">Nos menus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-gradient-to-r from-red-500 to-red-100 shadow-md text-black rounded-lg p-4 flex justify-between items-center transition-transform duration-300 hover:scale-110">
              <span className="text-lg font-semibold">{item.name}</span>
              <span className="text-primary font-bold">{item.price}</span>
            </div>
          ))}
        </div>
        <img className="w-40 h-40 rounded-full mx-auto mt-5 mb-5 shadow-lg shadow-red-500 transition-transform duration-300 hover:scale-110" src="sushi-menu2.jpg" alt="sushi menu" />
        <h2 className="text-2xl font-bold text-center mt-8 mb-6">Nos Menus Box</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {menuBoxes.map((item, index) => (
            <div key={index} className="bg-gradient-to-r from-red-500 to-red-100 text-black shadow-md rounded-lg p-4 flex justify-between items-center transition-transform duration-300 hover:scale-110">
              <span className="text-lg font-semibold">{item.name}</span>
              <span className="text-primary font-bold">{item.price}</span>
            </div>
          ))}
        </div>
        <img className="w-40 h-40 rounded-full mx-auto mt-5 mb-5 shadow-lg shadow-red-500 transition-transform duration-300 hover:scale-110" src="sushi-menu3.jpg" alt="sushi menu" />
        <h2 className="text-2xl font-bold text-center mt-8 mb-6">Nos Formules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formulas.map((item, index) => (
            <div key={index} className="bg-gradient-to-r from-red-500 to-red-100 text-black shadow-md rounded-lg p-4 flex justify-between items-center transition-transform duration-300 hover:scale-110">
              <span className="text-lg font-semibold">{item.name}</span>
              <span className="text-primary font-bold">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }