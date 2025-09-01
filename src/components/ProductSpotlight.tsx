// src/components/ProductSpotlight.tsx
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const features = [
    { title: "Strengthen Roots", description: "Strengthens hair follicles for lasting resilience." },
    { title: "Stimulate Growth", description: "Boosts quick hair regrowth with botanicals." },
    { title: "Reduce Hair Fall", description: "Minimizes shedding by revitalizing scalp health." },
    { title: "Enhance Volume", description: "Makes hair look bouncier and energized." },
];

const ProductSpotlight = () => {
  return (
    <section className="py-24 px-4 bg-soft-green rounded-[4rem]">
      <div className="container mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-charcoal"
        >
          Boost Your Confidence with <span className="text-green-800">Activator Shampoo</span>
        </motion.h2>

        <div className="relative mt-12 flex justify-center items-center">
             {/* Left side features */}
            <div className="hidden md:flex flex-col gap-8 w-1/4">
                <FeatureCard title={features[0].title} description={features[0].description} align="right" />
                <FeatureCard title={features[1].title} description={features[1].description} align="right" />
            </div>

            <motion.img 
                src="https://i.imgur.com/x0R4sVl.png" 
                alt="Activator Shampoo" 
                className="w-1/2 md:w-1/3 z-10" 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
            />

            {/* Right side features */}
            <div className="hidden md:flex flex-col gap-8 w-1/4">
                <FeatureCard title={features[2].title} description={features[2].description} align="left" />
                <FeatureCard title={features[3].title} description={features[3].description} align="left" />
            </div>
        </div>
        <p className="mt-8 text-gray-700 max-w-xl mx-auto">
            This formula revitalizes your hair for a fuller, healthier look. Say goodbye to dullness and hello to vibrant, shiny locks!
        </p>
      </div>
    </section>
  );
};

// Helper component for the feature cards
const FeatureCard = ({ title, description, align }) => (
    <motion.div 
        className={`bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-md text-${align}`}
        initial={{ opacity: 0, x: align === 'left' ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5, delay: 0.3 }}
    >
        <h4 className="font-semibold flex items-center gap-2" style={{justifyContent: align === 'right' ? 'flex-end' : 'flex-start'}}>
            {align === 'left' && <FiCheck className="text-green-600" />}
            {title}
            {align === 'right' && <FiCheck className="text-green-600" />}
        </h4>
        <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
);

export default ProductSpotlight;