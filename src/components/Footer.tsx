import React from 'react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="py-12 bg-transparent border-t-2 border-royal-gold/40 relative overflow-hidden">
      {/* Animated Diyas / Lamps (Simplified CSS version) */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-royal-gold/20 blur-[50px] rounded-full"></div>
      <div className="absolute top-0 right-1/4 translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-royal-gold/20 blur-[50px] rounded-full"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="font-display text-4xl text-royal-gold mb-6 tracking-widest">T & M</h2>
        <p className="font-serif text-cream-dark/60 italic mb-8 max-w-lg mx-auto">
          "Two souls with but a single thought, two hearts that beat as one."
        </p>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-royal-gold/30 to-transparent mb-8"></div>
        <p className="font-sans text-xs text-cream-white/40 uppercase tracking-widest">
          © 2026 Thasmiya & Musraf. All Rights Reserved.<br />
          <span className="opacity-50 mt-2 block">Designed with Love for the Grand Wedding</span>
        </p>
      </div>
    </footer>
  );
}
