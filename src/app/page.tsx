'use client';

import React, { useState, useEffect } from "react";
import { ArrowUpCircle } from "lucide-react";
import Header from "./Components/Header";
import Presentation from "./Components/Presentation";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import SushiMenu from "./Components/SushiMenu";
import Adress from "./Components/Adress";
import About from "./Components/About";
import Footer from "./Components/Footer";

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div >
      <div>
        <Navbar />
        <img className="text-center mx-auto mt-4 duration-1000 ease-out delay-200 animate-fade transition-transform duration-300 hover:scale-110" src="Logo-sushi.png" alt="logo" />
      <h1 className="comfortaa text-center mt-2 mb-10 font-bold text-white text-shadow text-4xl duration-1000 ease-out delay-200 animate-fade transition-transform duration-300 hover:scale-110">WELCOME TO SU SUSHI</h1>
 <Header />
      </div>
      <div>
        <Presentation />
        <About />
        <SushiMenu />
        <Adress />
        <Contact />
      </div>
      <Footer />

            {/* Bouton Scroll-To-Top */}
            {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition duration-300"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ArrowUpCircle size={36} />
        </button>
      )}
    </div>
  );
}
