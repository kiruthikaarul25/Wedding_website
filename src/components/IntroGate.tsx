import bgImage from "../assets/images/muslim_wedding_bg_1782884929580.jpg";
import handsImage from "../assets/images/muslim_wedding_hands_1782884947528.jpg";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroGateProps {
  onEnter: () => void;
}

export function IntroGate({ onEnter }: IntroGateProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show enter button after a short delay
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setIsOpen(true);
    // Wait for animation to finish before removing from DOM
    setTimeout(() => {
      onEnter();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark-black overflow-hidden perspective-[1000px]"
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={bgImage} 
              alt="Wedding Background" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-dark-black/60 z-10"></div>
          </div>

          {/* Left Door */}
          <motion.div 
            className="absolute left-0 top-0 bottom-0 w-1/2 border-r-[4px] border-royal-gold shadow-[20px_0_50px_rgba(0,0,0,0.5)] origin-left flex items-center justify-end pr-2 overflow-hidden"
            initial={{ rotateY: 0 }}
            animate={isOpen ? { rotateY: -100 } : { rotateY: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
             <div className="absolute top-0 left-0 w-[100vw] h-full z-0">
               <img 
                 src={bgImage} 
                 alt="Wedding Background Left" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-dark-black/50"></div>
             </div>
             
             {/* Decorative Temple Elements on Door */}
             <div className="h-[80%] w-3/4 border-2 border-royal-gold/40 rounded-t-full flex items-center justify-center relative z-10">
                <div className="absolute top-10 w-16 h-16 border border-royal-gold/60 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-royal-gold rounded-full"></div>
                </div>
                {/* Door Handle */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-24 bg-royal-gold/80 rounded-full shadow-lg backdrop-blur-sm border border-royal-gold/50"></div>
             </div>
          </motion.div>

          {/* Right Door */}
          <motion.div 
            className="absolute right-0 top-0 bottom-0 w-1/2 border-l-[4px] border-royal-gold shadow-[-20px_0_50px_rgba(0,0,0,0.5)] origin-right flex items-center justify-start pl-2 overflow-hidden"
            initial={{ rotateY: 0 }}
            animate={isOpen ? { rotateY: 100 } : { rotateY: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
             <div className="absolute top-0 right-0 w-[100vw] h-full z-0">
               <img 
                 src={bgImage} 
                 alt="Wedding Background Right" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-dark-black/50"></div>
             </div>

            {/* Decorative Temple Elements on Door */}
            <div className="h-[80%] w-3/4 border-2 border-royal-gold/40 rounded-t-full flex items-center justify-center relative z-10">
               <div className="absolute top-10 w-16 h-16 border border-royal-gold/60 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-royal-gold rounded-full"></div>
                </div>
                {/* Door Handle */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-24 bg-royal-gold/80 rounded-full shadow-lg backdrop-blur-sm border border-royal-gold/50"></div>
             </div>
          </motion.div>

          {/* Center Lock / Enter Button */}
          <motion.div 
            className="absolute z-10 flex flex-col items-center gap-6"
            animate={isOpen ? { scale: 1.5, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-40 h-40 rounded-full border-4 border-royal-gold bg-deep-maroon flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.4)] overflow-hidden relative">
                 <img src={handsImage} alt="Couple Hands" className="w-full h-full object-cover opacity-80" />
                 <div className="absolute inset-0 bg-dark-black/40 flex items-center justify-center">
                   <span className="font-display text-5xl text-gradient-gold drop-shadow-lg">T&M</span>
                 </div>
              </div>
              <h2 className="font-display text-4xl text-royal-gold tracking-wider drop-shadow-md">Thasmiya & Musraf</h2>
            </div>
            
            <AnimatePresence>
              {showButton && !isOpen && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  onClick={handleEnter}
                  className="px-8 py-3 bg-royal-gold text-dark-black font-serif font-semibold tracking-widest uppercase rounded-full hover:bg-cream-white transition-colors shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                >
                  Open Invitation
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
