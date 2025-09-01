// src/components/HowItWorks.tsx
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Choose Your Product', desc: 'Browse our collection and pick what fits your skin, hair, or wellness needs.', img: 'https://i.imgur.com/zWwD22M.jpg' },
  { num: '02', title: 'Place Your Order', desc: 'Fast and secure checkout — no subscriptions or hidden fees.', img: 'https://i.imgur.com/o2Y8P91.jpg' },
  { num: '03', title: 'Get It Delivered', desc: 'Enjoy doorstep delivery in just a few days — start your transformation right away.', img: 'https://i.imgur.com/u1D4PzH.jpg' },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold"
        >
          How It Works: Just <span className="text-dark-purple">3 Simple Steps</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 mt-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <p className="absolute -top-4 left-4 text-lg font-bold text-gray-300">{step.num}</p>
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto shadow-lg mb-6 border-4 border-white">
                <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;