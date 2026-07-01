
import haldiImage from '../assets/images/muslim_wedding_haldi_1782885022711.jpg';
import nikahImage from '../assets/images/muslim_wedding_nikah_1782884989256.jpg';
import stageImage from '../assets/images/muslim_wedding_stage_1782884969461.jpg';
import handsImage from '../assets/images/muslim_wedding_hands_1782884947528.jpg';
import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export function Videos() {
  const videos = [
    { id: 1, title: "Pre-wedding Holud", thumb: haldiImage, prompt: "Cinematic shot of Haldi/Holud ceremony preparations, vibrant yellow colors, festive atmosphere, 4k, slow motion" },
    { id: 2, title: "Signing the Nikah", thumb: nikahImage, prompt: "Muslim bride signing the marriage contract, elegant traditional dress, golden hour lighting, cinematic glide shot" },
    { id: 3, title: "Wedding Venue", thumb: stageImage, prompt: "Breathtaking drone shot of a beautifully decorated outdoor Muslim wedding venue in India, epic scale" },
    { id: 4, title: "The Nikah Ceremony", thumb: handsImage, prompt: "Close up of couple's hands during Nikah ceremony, traditional Muslim wedding, emotional, soft focus background" }
  ];

  return (
    <section className="py-32 px-4 bg-transparent relative border-b border-royal-gold/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-royal-gold mb-6"
          >
            Cinematic Highlights
          </motion.h2>
          <p className="font-sans text-cream-dark/60 max-w-2xl mx-auto">Explore AI-generated cinematic visual concepts for our big day.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((vid, i) => (
            <motion.div 
              key={vid.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel overflow-hidden group flex flex-col h-full"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={vid.thumb} alt={vid.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-dark-black/40 flex items-center justify-center">
                   <button className="w-16 h-16 rounded-full bg-royal-gold/90 text-dark-black flex items-center justify-center pl-1 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.6)]">
                     <Play size={24} fill="currentColor" />
                   </button>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-xl text-royal-gold mb-3">{vid.title}</h3>
                <div className="bg-dark-black/50 p-4 rounded-lg border border-royal-gold/10 mt-auto">
                  <p className="font-sans text-xs text-cream-white/50 uppercase tracking-widest mb-2 font-bold">AI Video Prompt</p>
                  <p className="font-sans text-sm text-cream-dark/80 italic">"{vid.prompt}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
