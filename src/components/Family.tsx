import React from 'react';
import { motion } from 'motion/react';

export function Family() {
  const brideFamily = [
    { role: "Parents", names: "Mr. Rajendran & Mrs. Meenakshi" },
    { role: "Grandparents", names: "Late Mr. Subramanian & Mrs. Lakshmi" },
    { role: "Brother", names: "Karthik Rajendran" }
  ];

  const groomFamily = [
    { role: "Parents", names: "Mr. Venkatraman & Mrs. Saraswathi" },
    { role: "Grandparents", names: "Mr. Natarajan & Late Mrs. Parvathi" },
    { role: "Sister", names: "Priya Venkatraman" }
  ];

  return (
    <section className="py-32 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-royal-gold mb-6"
          >
            Family Blessings
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-deep-maroon mx-auto"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-royal-gold p-1">
              <div className="w-full h-full bg-deep-maroon rounded-full flex items-center justify-center font-display text-3xl text-royal-gold">N</div>
            </div>
            <h3 className="font-display text-3xl text-cream-white mb-8 border-b border-royal-gold/20 pb-4 inline-block">Bride's Family</h3>
            <div className="space-y-8">
              {brideFamily.map((member, i) => (
                <div key={i}>
                  <p className="font-sans text-royal-gold text-sm tracking-widest uppercase mb-1">{member.role}</p>
                  <p className="font-serif text-xl text-cream-white italic">{member.names}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-royal-gold p-1">
              <div className="w-full h-full bg-deep-maroon rounded-full flex items-center justify-center font-display text-3xl text-royal-gold">A</div>
            </div>
            <h3 className="font-display text-3xl text-cream-white mb-8 border-b border-royal-gold/20 pb-4 inline-block">Groom's Family</h3>
            <div className="space-y-8">
              {groomFamily.map((member, i) => (
                <div key={i}>
                  <p className="font-sans text-royal-gold text-sm tracking-widest uppercase mb-1">{member.role}</p>
                  <p className="font-serif text-xl text-cream-white italic">{member.names}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
