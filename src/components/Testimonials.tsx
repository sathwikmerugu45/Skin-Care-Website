// src/components/Testimonials.tsx
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  { name: 'Lucas M.', rating: 4.8, text: "This gel helped fade my dark spots and rough patches. After a month my skin looked smoother and more even.", product: 'Pigmentation', time: '1 month' },
  { name: 'Noah A.', rating: 4.9, text: "I used to hide my eyes behind makeup. After just 10 days with the corrector, the dark circles were visibly lighter!", product: 'Confidence', time: '10 days' },
  { name: 'Olivia R.', rating: 4.8, text: "The skin on my neck was loose and crepey. In 4 weeks, it felt tighter and smoother with a subtle lift.", product: 'Neck Firming', time: '4 weeks' },
  { name: 'Ethan D.', rating: 4.9, text: "The wrinkle fix really surprised me. I looked fresher within days and deeper lines looked softer.", product: 'Anti-Aging', time: '2 weeks' },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-center font-bold"
        >
          Visible Results <span className="text-dark-purple">from Real People</span>
        </motion.h2>

        <div className="flex overflow-x-auto space-x-8 mt-12 pb-4 scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-80 bg-white p-6 rounded-3xl shadow-md border border-light-border"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  {/* Placeholder for user image */}
                  <img src={`https://i.pravatar.cc/48?u=${testimonial.name}`} alt={testimonial.name} />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <div className="flex items-center gap-1 text-sm text-yellow-500">
                    <FaStar /> {testimonial.rating}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div className="flex justify-between text-sm text-gray-500 border-t border-light-border pt-3">
                <span className="font-medium text-dark-purple">{testimonial.product}</span>
                <span>{testimonial.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;