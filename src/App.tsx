import React, { useState } from "react";
import { IntroGate } from "./components/IntroGate";
import { Hero } from "./components/Hero";
import { Timer } from "./components/Timer";
import { Events } from "./components/Events";
import { Venue } from "./components/Venue";
import { Family } from "./components/Family";
import { Gallery } from "./components/Gallery";
import { Videos } from "./components/Videos";
import { FoodMenu } from "./components/FoodMenu";
import { Gifts } from "./components/Gifts";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { MusicPlayer } from "./components/MusicPlayer";

import bgImage from './assets/images/muslim_wedding_bg_1782884929580.jpg';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-dark-black text-cream-white selection:bg-royal-gold selection:text-dark-black relative">
      {/* Global Fixed 100vh Background */}
      <div className="fixed inset-0 z-0 h-[100vh]">
        <img
          src={bgImage}
          alt="Wedding Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-dark-black/60"></div>
      </div>

      <div className="relative z-10">
        <MusicPlayer autoPlayTrigger={!showIntro} />
        {showIntro ? (
          <IntroGate onEnter={() => setShowIntro(false)} />
        ) : (
          <main>
            <Hero />
            <Timer />
            <Events />
            <Venue />
            <Family />
            <Gallery />
            <Videos />
            <FoodMenu />
            <Gifts />
            <Contact />
            <Footer />
          </main>
        )}
      </div>
    </div>
  );
}
