'use client';

import React from "react";
import Header from "./Components/Header";
import Presentation from "./Components/Presentation";

export default function Home() {
  return (
    <div >
      <div>
      <h1 className="comfortaa text-center mt-10 mb-10 font-bold text-4xl">WELCOME TO SU SUSHI</h1>
 <Header />
      </div>
      <div>
        <Presentation />
      </div>
    </div>
  );
}
