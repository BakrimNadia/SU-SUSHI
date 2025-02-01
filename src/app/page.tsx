'use client';

import React from "react";
import Header from "./Components/Header";
import Presentation from "./Components/Presentation";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import SushiMenu from "./Components/SushiMenu";
import Adress from "./Components/Adress";
import About from "./Components/About";

export default function Home() {
  return (
    <div >
      <div>
        <Navbar />
        <img className="text-center mx-auto mt-4" src="Logo-sushi.png" alt="logo" />
      <h1 className="comfortaa text-center mt-2 mb-10 font-bold text-4xl">WELCOME TO SU SUSHI</h1>
 <Header />
      </div>
      <div>
        <Presentation />
        <About />
        <SushiMenu />
        <Adress />
        <Contact />
      </div>
    </div>
  );
}
