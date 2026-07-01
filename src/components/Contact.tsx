import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-24 px-4 bg-transparent border-t border-royal-gold/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl text-center text-royal-gold mb-16">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 text-center">
             <h3 className="font-display text-2xl text-cream-white mb-2">Bride's Side</h3>
             <p className="font-serif text-cream-dark/60 mb-6 italic">Karthik (Brother)</p>
             <div className="flex justify-center gap-4">
               <a href="tel:+919876543210" className="w-12 h-12 rounded-full border border-royal-gold/50 flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-dark-black transition-colors">
                 <Phone size={20} />
               </a>
               <a href="https://wa.me/919876543210" className="w-12 h-12 rounded-full border border-royal-gold/50 flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-dark-black transition-colors">
                 <MessageCircle size={20} />
               </a>
             </div>
          </div>

          <div className="glass-panel p-8 text-center">
             <h3 className="font-display text-2xl text-cream-white mb-2">Groom's Side</h3>
             <p className="font-serif text-cream-dark/60 mb-6 italic">Priya (Sister)</p>
             <div className="flex justify-center gap-4">
               <a href="tel:+919876543211" className="w-12 h-12 rounded-full border border-royal-gold/50 flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-dark-black transition-colors">
                 <Phone size={20} />
               </a>
               <a href="https://wa.me/919876543211" className="w-12 h-12 rounded-full border border-royal-gold/50 flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-dark-black transition-colors">
                 <MessageCircle size={20} />
               </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
