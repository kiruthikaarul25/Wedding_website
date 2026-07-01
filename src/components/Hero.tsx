import nikahImage from "../assets/images/muslim_wedding_nikah_1782884989256.jpg";
import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Clock, ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToNext = () => {
    document.getElementById('timer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background is now globally handled in App.tsx */}
      
      {/* Floating Particles/Petals (CSS animation simplified) */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-royal-gold/40 rounded-full blur-[1px]"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: -50,
              rotate: Math.random() * 360
            }}
            animate={{ 
              y: window.innerHeight + 50,
              rotate: Math.random() * 720
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="relative z-30 text-center px-4 max-w-4xl mx-auto flex flex-col items-center pt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [-15, 15, -15],
            boxShadow: [
              '0 0 30px rgba(212,175,55,0.3)', 
              '0 0 70px rgba(212,175,55,0.6)', 
              '0 0 30px rgba(212,175,55,0.3)'
            ]
          }}
          transition={{ 
            opacity: { duration: 1.5, delay: 0.5 },
            scale: { duration: 1.5, delay: 0.5 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 },
            boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }}
          className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-royal-gold p-2 mb-8 mx-auto"
        >
           <div className="w-full h-full rounded-full overflow-hidden border-2 border-royal-gold/50 relative z-10 group">
             <motion.img 
               whileHover={{ scale: 1.1 }}
               transition={{ duration: 0.7, ease: "easeOut" }}
               src={nikahImage} 
               alt="Couple Portrait" 
               className="w-full h-full object-cover" 
             />
           </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-serif text-royal-gold tracking-[0.3em] uppercase text-sm md:text-base mb-6"
        >
          Together with our families
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-cream-white mb-4 drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]"
        >
          Thasmiya
          <span className="block text-3xl md:text-5xl text-royal-gold my-4 font-serif italic">&</span>
          Musraf
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="font-serif text-cream-dark text-lg md:text-2xl italic mt-6"
        >
          Invite you to celebrate their wedding
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-col sm:flex-row gap-6 mt-12"
        >
          <button onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 bg-royal-gold text-dark-black font-serif font-semibold tracking-wider uppercase rounded-full hover:bg-cream-white transition-colors">
            View Details
          </button>
          <button onClick={() => document.getElementById('timer')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 border border-royal-gold text-royal-gold font-serif font-semibold tracking-wider uppercase rounded-full hover:bg-royal-gold/10 transition-colors">
            Countdown
          </button>
        </motion.div>
      </div>

      <motion.button 
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 3, repeat: Infinity }}
        className="absolute bottom-10 z-30 text-royal-gold hover:text-cream-white transition-colors"
      >
        <ChevronDown size={40} strokeWidth={1} />
      </motion.button>
    </section>
  );
}
