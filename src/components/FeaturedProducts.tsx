import { motion } from 'framer-motion';

const products = [
  { name: 'Undereye Corrector', desc: 'Brightens dark circles and smooths fine lines for a fresh look.', img: 'https://images.unsplash.com/photo-1620916566398-39f1686d7fee?q=80&w=2787&auto=format&fit=crop' },
  { name: 'Exfoliation Gel', desc: 'Gently removes dead skin, fades spots, and smooths texture.', img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=2847&auto=format&fit=crop' },
  { name: 'Skin Health', desc: 'Confidence starts with skincare.', img: 'https://images.unsplash.com/photo-1556228852-6d45a7ae2c38?q=80&w=2787&auto=format&fit=crop' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const FeaturedProducts = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}
          className="text-4xl text-center font-bold tracking-tight"
        >
          Your Daily Skincare <span className="text-dark-purple">Essentials</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-lg text-slate-gray mt-2"
        >
            Gentle care. <span className="font-semibold">Visible</span> results
        </motion.p>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-3xl shadow-lg text-center border border-slate-200/50"
            >
              <div className="w-24 h-24 rounded-2xl mx-auto mb-6 overflow-hidden">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover"/>
              </div>
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="mt-2 text-slate-gray">{product.desc}</p>
              <div className="mt-6 flex gap-4 justify-center">
                <button className="bg-charcoal text-white px-6 py-2 rounded-full text-sm font-semibold">Get Started</button>
                <button className="bg-gray-100 text-charcoal px-6 py-2 rounded-full text-sm font-semibold">Learn More</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;