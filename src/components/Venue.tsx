import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

export function Venue() {
  return (
    <section className="py-32 px-4 bg-transparent border-y border-royal-gold/20  relative">
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-royal-gold mb-6"
          >
            The Venue
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 flex flex-col justify-center"
          >
            <h3 className="font-display text-3xl text-cream-white mb-6">The Grand Jamia Masjid</h3>
            <p className="font-sans text-cream-dark/80 mb-8 leading-relaxed">
              We have chosen this magnificent mosque for our Nikah ceremony to seek the blessings of the Almighty. The stunning architecture and peaceful ambiance provide the perfect sacred setting for our union.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <MapPin className="text-royal-gold shrink-0 mt-1" size={24} />
                <p className="font-sans text-cream-white">
                  123 Mosque Road, Historic District,<br/>
                  Chennai, Tamil Nadu 600001
                </p>
              </div>
            </div>
            
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-royal-gold text-dark-black font-sans font-bold tracking-widest uppercase rounded-xl hover:bg-cream-white transition-all self-start shadow-[0_4px_20px_rgba(212,175,55,0.3)]"
            >
              <Navigation size={20} /> Navigate via Maps
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] md:h-auto rounded-2xl overflow-hidden border-2 border-royal-gold/30 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
            {/* Using a static map image for cinematic effect, but could be an iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.113264627447!2d80.2443!3d13.0617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzQyLjEiTiA4MMKwMTQnMzkuNSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(80%) contrast(120%)' }} // Custom map styling hack
              allowFullScreen={false} 
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
      
      {/* Floating Live Location Button */}
      <motion.a
        href="https://maps.google.com"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-8 right-8 z-40 bg-royal-gold text-dark-black p-4 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <Navigation size={24} />
        <span className="absolute right-full mr-4 bg-dark-black text-royal-gold border border-royal-gold px-3 py-1 rounded text-sm font-sans font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Live Location</span>
      </motion.a>
    </section>
  );
}
