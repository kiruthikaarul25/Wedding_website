import React from 'react';
import { motion } from 'motion/react';

export function FoodMenu() {
  return (
    <section className="py-32 px-4 bg-transparent relative border-y border-royal-gold/20 ">
      
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-royal-gold mb-16"
        >
          Grand Wedding Feast
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 border-2 border-royal-gold/30 shadow-[0_10px_30px_rgba(212,175,55,0.1)]"
          >
             <h3 className="font-display text-2xl text-cream-white mb-6 border-b border-royal-gold/20 pb-4">Welcome Drinks & Starters</h3>
             <ul className="space-y-4 font-serif text-cream-dark/90 italic text-lg">
                <li>Refreshing Rooh Afza Sharbat</li>
                <li>Fresh Mango & Watermelon Juices</li>
                <li>Mutton Shami Kebabs</li>
                <li>Crispy Chicken 65</li>
                <li>Paneer Tikka & Hara Bhara Kebab</li>
             </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8 md:p-12 border-2 border-royal-gold/30 shadow-[0_10px_30px_rgba(212,175,55,0.1)]"
          >
             <h3 className="font-display text-2xl text-cream-white mb-6 border-b border-royal-gold/20 pb-4">The Grand Dawat</h3>
             <ul className="space-y-4 font-serif text-cream-dark/90 italic text-lg">
                <li>Authentic Mutton Dum Biryani</li>
                <li>Chicken Chaap & Rumali Roti</li>
                <li>Rich Mutton Haleem</li>
                <li>Shahi Tukda & Firni</li>
                <li>Kashmiri Chai & Paan</li>
             </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
