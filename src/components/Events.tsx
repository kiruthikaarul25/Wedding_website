import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export function Events() {
  const events = [
    {
      id: 1,
      title: "Mehendi & Haldi",
      date: "Friday, 13th December 2026",
      time: "04:00 PM Onwards",
      venue: "Royal Palace Gardens",
      description: "Join us for an evening of colors, music, and celebration as we officially begin our journey.",
      icon: "🌿"
    },
    {
      id: 2,
      title: "Nikah Ceremony",
      date: "Sunday, 15th December 2026",
      time: "11:00 AM - 01:00 PM",
      venue: "The Grand Jamia Masjid",
      description: "Witness the sacred union as we sign the marriage contract in the presence of the divine and our beloved families.",
      icon: "🕌"
    },
    {
      id: 3,
      title: "Walima (Reception)",
      date: "Sunday, 15th December 2026",
      time: "07:00 PM Onwards",
      venue: "The Grand Ballroom, ITC Chola",
      description: "Celebrate with us over a grand feast, music, and dancing into the night.",
      icon: "✨"
    }
  ];

  return (
    <section id="events" className="py-32 px-4 bg-transparent relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-cream-white mb-6"
          >
            Save The Date
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-royal-gold mx-auto"
          ></motion.div>
        </div>

        <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-royal-gold/50 before:to-transparent">
          {events.map((event, index) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              {/* Icon Marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-royal-gold bg-deep-maroon text-xl text-cream-white absolute left-0 md:left-1/2 -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                {event.icon}
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-auto md:ml-0 p-8 glass-panel hover:border-royal-gold/50 transition-colors">
                <h3 className="font-display text-2xl text-royal-gold mb-4">{event.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-cream-dark/80 font-sans">
                    <Calendar size={18} className="text-royal-gold" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-cream-dark/80 font-sans">
                    <Clock size={18} className="text-royal-gold" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start gap-3 text-cream-dark/80 font-sans">
                    <MapPin size={18} className="text-royal-gold shrink-0 mt-0.5" />
                    <span>{event.venue}</span>
                  </div>
                </div>
                
                <p className="text-cream-white/60 font-serif italic text-sm leading-relaxed">
                  "{event.description}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
