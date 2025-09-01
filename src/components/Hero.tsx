import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center pt-32 pb-16 px-4 bg-white rounded-b-4xl relative"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1596432152696-2374e223c233?q=80&w=2940&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-white/60"></div>
      <div className="text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-charcoal tracking-tight leading-tight">
            The Ultimate Solution
            <br />
            for Weight, Hair, and Skin
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              className="bg-charcoal text-white px-8 py-3 rounded-full font-semibold hover:bg-dark-purple shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Now
            </motion.button>
            <motion.button 
              className="bg-white text-charcoal px-8 py-3 rounded-full font-semibold border border-light-border hover:bg-gray-50 shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Online Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;