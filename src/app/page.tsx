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
    aria-label="Retour en haut"
    className="group fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.4)] transition duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-red-600 hover:shadow-[0_0_25px_rgba(220,38,38,0.4)]"
  >
    <ArrowUpCircle
      size={20}
      className="text-white/80 transition duration-300 group-hover:text-white group-hover:scale-110"
    />
  </button>
)}
    </div>
  );
}
