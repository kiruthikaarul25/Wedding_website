import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function Timer() {
  // Set a date in the future for the wedding
  const targetDate = new Date('2026-12-15T09:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <section id="timer" className="py-24 px-4 bg-transparent relative border-y border-royal-gold/30">
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-royal-gold mb-12">The Countdown Begins</h2>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {timeUnits.map((unit, index) => (
            <motion.div 
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 w-32 md:w-40 flex flex-col items-center justify-center border-t border-b-0 border-x-0 border-royal-gold/50"
            >
              <span className="font-display text-5xl md:text-6xl text-cream-white mb-2 font-light">{String(unit.value).padStart(2, '0')}</span>
              <span className="font-sans text-royal-gold/80 uppercase tracking-widest text-xs md:text-sm font-semibold">{unit.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
