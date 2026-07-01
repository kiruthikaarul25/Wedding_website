import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Gifts() {
  const [activeQR, setActiveQR] = useState('upi');

  const paymentMethods = [
    { id: 'upi', label: 'UPI / GPay' },
    { id: 'bank', label: 'Bank Transfer' }
  ];

  return (
    <section className="py-32 px-4 bg-transparent relative border-t border-royal-gold/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             viewport={{ once: true }}
             className="w-16 h-16 mx-auto bg-royal-gold rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            <Heart size={28} className="text-dark-black" fill="currentColor" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-royal-gold mb-6"
          >
            Blessings & Gifts
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-cream-dark/80 max-w-2xl mx-auto leading-relaxed"
          >
            Your presence at our wedding is the greatest gift of all. However, should you wish to bless us with a gift, you can use the details below.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-panel max-w-xl mx-auto overflow-hidden"
        >
          <div className="flex border-b border-royal-gold/20">
             {paymentMethods.map(method => (
               <button 
                  key={method.id}
                  onClick={() => setActiveQR(method.id)}
                  className={`flex-1 py-4 font-sans font-bold tracking-wider uppercase text-sm transition-colors ${activeQR === method.id ? 'bg-royal-gold/10 text-royal-gold border-b-2 border-royal-gold' : 'text-cream-dark/50 hover:text-cream-white'}`}
               >
                 {method.label}
               </button>
             ))}
          </div>

          <div className="p-8 md:p-12 text-center flex flex-col items-center">
            {activeQR === 'upi' ? (
              <>
                <div className="w-48 h-48 bg-cream-white rounded-xl p-4 mb-6 shadow-xl">
                  {/* Dummy QR Code */}
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=wedding@upi&pn=ThasmiyaAndMusraf" alt="UPI QR Code" className="w-full h-full" />
                </div>
                <p className="font-sans text-cream-white text-lg mb-2">Scan to Pay via UPI</p>
                <p className="font-mono text-royal-gold tracking-widest bg-dark-black px-4 py-2 rounded-lg border border-royal-gold/30">wedding@upi</p>
                <div className="flex gap-4 mt-8 opacity-50">
                   {/* Logos could go here */}
                   <span className="font-sans font-bold">GPay</span>
                   <span className="font-sans font-bold">PhonePe</span>
                   <span className="font-sans font-bold">Paytm</span>
                </div>
              </>
            ) : (
              <div className="space-y-6 text-left w-full max-w-sm">
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-royal-gold mb-1">Account Name</p>
                  <p className="font-serif text-xl text-cream-white">Thasmiya & Musraf Wedding</p>
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-royal-gold mb-1">Account Number</p>
                  <p className="font-mono text-lg text-cream-white bg-dark-black px-3 py-2 rounded border border-royal-gold/20">12345678901234</p>
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-royal-gold mb-1">IFSC Code</p>
                  <p className="font-mono text-lg text-cream-white bg-dark-black px-3 py-2 rounded border border-royal-gold/20">HDFC0001234</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
