// src/components/PartnerSection.tsx
import { motion } from 'framer-motion';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const partners = [
  { name: 'Neck Firming', img: 'https://i.imgur.com/L13a0u6.jpg' },
  { name: 'Pigmentation', img: 'https://i.imgur.com/G350xZU.jpg' },
  { name: 'Attraction', img: 'https://i.imgur.com/Y1g9A8Z.jpg' },
  { name: 'Dark Circles', img: 'https://i.imgur.com/d72sN6Y.jpg' },
  { name: 'Anti-Aging', img: 'https://i.imgur.com/a9fhgqi.jpg' },
];

const PartnerSection = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-center font-bold mb-4"
        >
          Glowskin is your partner in <span className="text-dark-purple">glow, strength, and confidence</span>
        </motion.h2>
        
        <div className="relative mt-12">
          <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-60 text-center"
              >
                <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img src={partner.img} alt={partner.name} className="w-full h-80 object-cover" />
                </div>
                <p className="mt-4 font-semibold">{partner.name}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-end gap-4 mt-8 mr-4">
              <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"><FaArrowLeft /></button>
              <button className="p-3 rounded-full bg-charcoal text-white hover:bg-dark-purple transition-colors"><FaArrowRight /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;