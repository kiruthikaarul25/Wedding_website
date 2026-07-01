
import bgImage from '../assets/images/muslim_wedding_bg_1782884929580.jpg';
import handsImage from '../assets/images/muslim_wedding_hands_1782884947528.jpg';
import stageImage from '../assets/images/muslim_wedding_stage_1782884969461.jpg';
import nikahImage from '../assets/images/muslim_wedding_nikah_1782884989256.jpg';
import mosqueImage from '../assets/images/luxury_mosque_interior_1782885003878.jpg';
import haldiImage from '../assets/images/muslim_wedding_haldi_1782885022711.jpg';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

export function Gallery() {
  const images = [
    bgImage,
    handsImage,
    stageImage,
    nikahImage,
    mosqueImage,
    haldiImage
  ];

  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="py-32 px-4 bg-transparent border-y border-royal-gold/20  relative">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-royal-gold mb-6"
          >
            A Glimpse of Us
          </motion.h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group break-inside-avoid cursor-pointer overflow-hidden rounded-xl border border-royal-gold/20"
              onClick={() => setSelectedImg(img)}
            >
              <img 
                src={img} 
                alt="Gallery" 
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ZoomIn className="text-royal-gold w-10 h-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark-black/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-8 right-8 text-royal-gold hover:text-cream-white transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={40} strokeWidth={1} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImg} 
              alt="Enlarged Gallery" 
              className="max-w-full max-h-[90vh] object-contain border-2 border-royal-gold/50 shadow-[0_0_50px_rgba(212,175,55,0.2)] rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
