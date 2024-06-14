import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import React, { useState } from "react";
import * as Sentry from "@sentry/react";

const App = () => {
  console.log("App");

  const [showHero, setShowHero] = useState(false);
  const [index, setIndex] = useState(-1);
  const [navbarHeight, setNavbarHeight] = useState(0);
  console.log("App, navbarHeight: ", navbarHeight);

  const handleMouseEnter = (index: number) => {
    console.log("App, handleMouseEnter, index: ", index);
    setShowHero(true);
    setIndex(index);
  };

  const handleMouseLeave = (index: number) => {
    console.log("App, handleMouseLeave, index: ", index);
    setShowHero(false);
    setIndex(-1);
  };

  return (
    <main className="bg-black relative">
      {/* 

      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
      Ｆ
      */}

      <Navbar index={index} showHero={showHero} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} setNavbarHeight={setNavbarHeight} />
      {showHero && <Hero index={index} navbarHeight={navbarHeight} />}
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
