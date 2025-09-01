// // src/App.tsx
// import Header from './components/Header';
// import Hero from './components/Hero';
// import FeaturedProducts from './components/FeaturedProducts';
// import PartnerSection from './components/PartnerSection';
// import Transformation from './components/Transformation';
// import ProductGrid from './components/ProductGrid';
// import HowItWorks from './components/HowItWorks';
// import ProductSpotlight from './components/ProductSpotlight';
// import Testimonials from './components/Testimonials';
// import WhyChooseUs from './components/WhyChooseUs';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="bg-light-lavender font-sans text-charcoal overflow-x-hidden">
//       <Header />
//       <main>
//         <Hero />
//         <FeaturedProducts />
//         <PartnerSection />
//         <Transformation />
//         <ProductGrid />
//         <HowItWorks />
//         <ProductSpotlight />
//         <Testimonials />
//         <WhyChooseUs />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiPlus, FiCheck, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';
import { FaArrowRight, FaArrowLeft, FaStar, FaTiktok } from 'react-icons/fa';

// Animation Variants for smooth loading
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


// Main App Component
function App() {
  return (
    <div className="bg-light-lavender font-sans text-charcoal antialiased overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <PartnerSection />
        <Transformation />
        <ProductGrid />
        <HowItWorks />
        <ProductSpotlight />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

// All Components are defined below

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="container mx-auto max-w-7xl flex justify-between items-center bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/50">
        <h1 className="text-2xl font-bold text-charcoal">Glowskin</h1>
        <nav className="hidden lg:flex items-center gap-8 text-slate-gray font-medium">
          <div onMouseEnter={() => setIsMenuOpen(true)} onMouseLeave={() => setIsMenuOpen(false)}>
            <button className="flex items-center gap-1.5 hover:text-dark-purple transition-colors">
              All Products <FiChevronDown size={16} />
            </button>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }}
                  className="absolute top-full mt-4 w-[600px] -ml-24 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 grid grid-cols-3 gap-4">
                  <div>
                    <h3 className="font-bold text-charcoal">SKIN</h3>
                    <ul className="mt-2 space-y-1.5 text-sm">
                      <li><a href="#" className="hover:text-dark-purple">Undereye Corrector</a></li>
                      <li><a href="#" className="hover:text-dark-purple">Exfoliation Gel</a></li>
                      <li><a href="#" className="hover:text-dark-purple">Wrinkle Fix</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal">HAIR</h3>
                    <ul className="mt-2 space-y-1.5 text-sm">
                      <li><a href="#" className="hover:text-dark-purple">Activator Shampoo</a></li>
                      <li><a href="#" className="hover:text-dark-purple">Hair Serum</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal">BODY</h3>
                     <ul className="mt-2 space-y-1.5 text-sm">
                      <li><a href="#" className="hover:text-dark-purple">Neck Cream</a></li>
                      <li><a href="#" className="hover:text-dark-purple">Joint Pain Relief</a></li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="#" className="hover:text-dark-purple transition-colors">Home</a>
          <a href="#" className="hover:text-dark-purple transition-colors">About</a>
          <a href="#" className="hover:text-dark-purple transition-colors">Catalog</a>
          <a href="#" className="hover:text-dark-purple transition-colors">FAQ</a>
          <a href="#" className="hover:text-dark-purple transition-colors">Contact Us</a>
        </nav>
        <button className="bg-charcoal text-white px-6 py-2.5 rounded-full font-semibold hover:bg-dark-purple transition-all duration-300 transform hover:scale-105 shadow-md">
          Sign In
        </button>
      </div>
    </header>
  );
};

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center pt-32 pb-16 px-4 bg-white rounded-b-4xl relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://i.imgur.com/8aOoV3d.jpg" alt="Diverse group of people" className="w-full h-full object-cover opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>
    </div>
    <div className="text-center relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <h2 className="text-5xl md:text-7xl font-extrabold text-charcoal tracking-tight leading-tight">
          The Ultimate Solution
          <br />
          for Weight, Hair, and Skin
        </h2>
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-charcoal text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all w-full sm:w-auto">Start Now</motion.button>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white/80 backdrop-blur-sm text-charcoal px-8 py-4 rounded-full font-semibold border border-light-border shadow-lg transition-all w-full sm:w-auto">Online consultation</motion.button>
        </div>
      </motion.div>
    </div>
  </section>
);

const FeaturedProducts = () => (
    <section className="py-28 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}
          className="text-4xl text-center font-bold tracking-tight">
          Your Daily Skincare <span className="text-dark-purple">Essentials</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-lg text-slate-gray mt-4">
          Gentle care. <span className="font-semibold text-charcoal">Visible</span> results
        </motion.p>
        
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProductCard name="Undereye Corrector" desc="Brightens dark circles and smooths fine lines for a fresh look." />
            <ProductCard name="Exfoliation Gel" desc="Gently removes dead skin, fades spots, and smooths texture." />
            <ProductCard name="Confidence with Skincare" desc="Reveal refreshed, glowing skin with our top purifying treatments." />
        </motion.div>
      </div>
    </section>
);

const ProductCard = ({ name, desc }) => (
    <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
        className="bg-white p-8 rounded-4xl shadow-xl text-center border border-slate-100 flex flex-col">
        <div className="w-full h-40 bg-light-lavender rounded-3xl mx-auto mb-8">
          {/* Placeholder for product image */}
        </div>
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="mt-3 text-slate-gray flex-grow">{desc}</p>
        <div className="mt-8 flex gap-4 justify-center">
            <button className="bg-charcoal text-white px-6 py-3 rounded-full text-sm font-semibold">Get Started</button>
            <button className="bg-gray-100 text-charcoal px-6 py-3 rounded-full text-sm font-semibold">Learn More</button>
        </div>
    </motion.div>
);

const PartnerSection = () => (
    <section className="py-28 px-4 bg-white rounded-4xl">
      <div className="container mx-auto max-w-7xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}
          className="text-4xl text-center font-bold tracking-tight">
          Glowskin is your partner in <span className="text-dark-purple">glow, strength, and confidence</span>
        </motion.h2>
        <div className="relative mt-16">
          <div className="flex overflow-x-auto space-x-6 pb-4 -mx-4 px-4 scrollbar-hide">
            {[{ n: 'Neck Firming', i: 'https://i.imgur.com/L13a0u6.jpg' }, { n: 'Pigmentation', i: 'https://i.imgur.com/G350xZU.jpg' }, { n: 'Attraction', i: 'https://i.imgur.com/Y1g9A8Z.jpg' }, { n: 'Dark Circles', i: 'https://i.imgur.com/d72sN6Y.jpg' }, { n: 'Anti-Aging', i: 'https://i.imgur.com/a9fhgqi.jpg' }].map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-shrink-0 w-64 text-center group">
                <div className="rounded-4xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img src={p.i} alt={p.n} className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <p className="mt-6 font-semibold text-lg">{p.n}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-end gap-4 mt-8 mr-4">
              <button className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"><FaArrowLeft /></button>
              <button className="p-4 rounded-full bg-charcoal text-white hover:bg-dark-purple transition-colors"><FaArrowRight /></button>
          </div>
        </div>
      </div>
    </section>
);

const Transformation = () => (
    <section className="py-28 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}
          className="text-4xl text-center font-bold tracking-tight mb-16">
          Inspiring transformations from <span className="text-dark-purple">real people like you</span>
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }}>
            <h3 className="text-3xl font-bold">Anna, 49 years</h3>
            <p className="text-xl font-semibold text-dark-purple mt-2">Visible neck tightening in 4 weeks</p>
            <p className="mt-6 text-slate-gray text-lg">"I struggled with loose skin and early signs of aging on my neck. After using Glowskin Neck Cream consistently, I finally saw real lifting and firmness!"</p>
            <div className="mt-8 bg-white p-6 rounded-3xl border border-light-border shadow-lg">
              <p className="font-semibold text-lg mb-4">Anna also has problems with</p>
              <div className="space-y-3">
                {['Neck Firming', 'Hair Growth', 'Pigmentation'].map(p => (
                  <div key={p} className="flex justify-between items-center p-4 bg-light-lavender rounded-xl font-medium cursor-pointer hover:bg-slate-200 transition-colors"><span>{p}</span> <FaArrowRight /></div>
                ))}
              </div>
            </div>
             <div className="mt-6 flex items-center justify-between bg-white p-4 rounded-3xl border border-light-border shadow-lg">
                <div><p className="font-bold text-lg">Neck Cream</p><p className="text-sm text-slate-gray">Neck Firming</p></div>
                <button className="bg-charcoal text-white px-8 py-3 rounded-full font-semibold hover:bg-dark-purple transition-all duration-300">Get Started</button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }} className="relative">
            <div className="relative w-full aspect-square rounded-4xl overflow-hidden shadow-2xl">
              <img src="https://i.imgur.com/uRkL1bH.jpg" alt="Before" className="absolute inset-0 w-full h-full object-cover"/>
              <div className="absolute inset-0 w-1/2 overflow-hidden"><img src="https://i.imgur.com/vKZutkL.jpg" alt="After" className="absolute inset-0 w-[200%] h-full object-cover max-w-none"/></div>
              <div className="absolute top-0 bottom-0 left-1/2 -ml-0.5 w-1 bg-white/70 backdrop-blur-sm"></div>
              <div className="absolute top-1/2 -mt-6 left-1/2 -ml-6 w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center cursor-pointer shadow-lg"><FaArrowLeft className="text-charcoal" /><FaArrowRight className="text-charcoal" /></div>
            </div>
             <div className="absolute -top-5 -right-5 bg-white p-4 rounded-2xl shadow-lg border border-slate-100">
                <p className="text-sm font-semibold">Your Improvements</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2"><div className="bg-green-500 h-2.5 rounded-full" style={{ width: '75%' }}></div></div>
                <p className="text-right font-bold mt-1 text-lg">75%</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
);

const ProductGrid = () => {
    const products = [{ n: 'Undereye Corrector', p: '49.99', o: '69.99', c: 'bg-red-50' }, { n: 'Exfoliation Gel', p: '49.99', o: '69.99', c: 'bg-purple-50' }, { n: 'Activator Shampoo', p: '49.99', o: '69.99', c: 'bg-gray-100' }, { n: 'Pheromone spray', p: '49.99', o: '69.99', c: 'bg-green-50' }, { n: 'Neck Cream', p: '49.99', o: '69.99', c: 'bg-yellow-50' }, { n: 'Wrinkle Fix', p: '49.99', o: '69.99', c: 'bg-pink-50' }, { n: 'Eye Cream', p: '49.99', o: '69.99', c: 'bg-gray-100' }, { n: 'Joint pain relief gel', p: '49.99', o: '69.99', c: 'bg-blue-50' }];
    return (
    <section className="py-28 px-4 bg-white rounded-4xl">
      <div className="container mx-auto max-w-7xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}
          className="text-4xl text-center font-bold tracking-tight">
          Find the perfect <span className="text-dark-purple">Solution for your goals</span>
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {products.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.05 }}
              className="text-center group flex flex-col">
              <div className={`${p.c} rounded-3xl p-6 aspect-square flex items-center justify-center flex-grow`}><img src={`https://i.imgur.com/8aOoV3d.jpg`} alt={p.n} className="max-h-full transition-transform duration-300 group-hover:scale-110" /></div>
              <h3 className="font-semibold mt-5 text-lg">{p.n}</h3>
              <div className="flex justify-center items-center gap-4 mt-2">
                <p className="font-bold text-xl">${p.p}</p><p className="text-gray-400 line-through">${p.o}</p>
                <button className="bg-charcoal text-white rounded-full p-2.5 hover:bg-dark-purple transition-colors"><FiPlus size={20} /></button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
)};

const HowItWorks = () => {
    const steps = [{ n: '01', t: 'Choose Your Product', d: 'Browse our collection and pick what fits your skin, hair, or wellness needs.', i: 'https://i.imgur.com/zWwD22M.jpg' }, { n: '02', t: 'Place Your Order', d: 'Fast and secure checkout — no subscriptions or hidden fees.', i: 'https://i.imgur.com/o2Y8P91.jpg' }, { n: '03', t: 'Get It Delivered', d: 'Enjoy doorstep delivery in just a few days — start your transformation right away.', i: 'https://i.imgur.com/u1D4PzH.jpg' }];
    return (
    <section className="py-28 px-4">
      <div className="container mx-auto max-w-7xl text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight">
          How It Works: Just <span className="text-dark-purple">3 Simple Steps</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-12 mt-20">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: i * 0.2 }} className="relative">
              <p className="absolute -top-8 left-1/2 -translate-x-1/2 text-7xl font-bold text-slate-200/50 -z-10">{s.n}</p>
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto shadow-xl mb-8 border-4 border-white"><img src={s.i} alt={s.t} className="w-full h-full object-cover" /></div>
              <h3 className="text-2xl font-bold mb-3">{s.t}</h3><p className="text-slate-gray px-4">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
)};

const ProductSpotlight = () => {
    const features = [{ t: "Strengthen Roots", d: "Strengthens hair follicles for lasting resilience." }, { t: "Stimulate Growth", d: "Boosts quick hair regrowth with botanicals." }, { t: "Reduce Hair Fall", d: "Minimizes shedding by revitalizing scalp health." }, { t: "Enhance Volume", d: "Makes hair look bouncier and energized." }];
    return (
    <section className="py-28 px-4 bg-soft-green rounded-4xl">
      <div className="container mx-auto max-w-5xl text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-charcoal tracking-tight">
          Boost Your Confidence with <span className="text-green-800">Activator Shampoo</span>
        </motion.h2>
        <div className="relative mt-16 flex justify-center items-center">
             <div className="hidden lg:flex flex-col gap-12 w-1/3 -mr-16">
                <FeatureBubble title={features[0].t} description={features[0].d} align="right" delay={0.3} />
                <FeatureBubble title={features[1].t} description={features[1].d} align="right" delay={0.5} />
            </div>
            <motion.img src="https://i.imgur.com/x0R4sVl.png" alt="Activator Shampoo" className="w-full sm:w-1/2 lg:w-1/3 z-10" 
                initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }} />
            <div className="hidden lg:flex flex-col gap-12 w-1/3 -ml-16">
                <FeatureBubble title={features[2].t} description={features[2].d} align="left" delay={0.4} />
                <FeatureBubble title={features[3].t} description={features[3].d} align="left" delay={0.6} />
            </div>
        </div>
        <p className="mt-12 text-gray-700 max-w-xl mx-auto text-lg">This formula revitalizes your hair for a fuller, healthier look. Say goodbye to dullness and hello to vibrant, shiny locks!</p>
      </div>
    </section>
)};

const FeatureBubble = ({ title, description, align, delay }) => (
    <motion.div className={`bg-white/70 backdrop-blur-md p-5 rounded-2xl shadow-lg text-${align} border border-white`}
        initial={{ opacity: 0, x: align === 'left' ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.5, delay }}>
        <h4 className="font-bold text-lg flex items-center gap-2" style={{justifyContent: align === 'right' ? 'flex-end' : 'flex-start'}}>
            {align === 'left' && <FiCheck className="text-green-600" />} {title} {align === 'right' && <FiCheck className="text-green-600" />}
        </h4>
        <p className="text-sm text-slate-gray mt-1">{description}</p>
    </motion.div>
);

const Testimonials = () => (
    <section className="py-28 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}
          className="text-4xl text-center font-bold tracking-tight">
          Best Sellers, <span className="text-dark-purple">Real Results</span>
        </motion.h2>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
         className="grid lg:grid-cols-2 gap-8 mt-16">
            <TestimonialCard 
                name="Sophia, 34 years" 
                title="Stronger, fuller hair in 5 weeks"
                quote='"The Activator Shampoo transformed my hair. It’s stronger, thicker, and I’ve never felt more confident about how it looks."'
                product="Activator Shampoo"
                img="https://i.imgur.com/WpP8pWn.jpg"
            />
             <TestimonialCard 
                name="James, 41 years" 
                title="Instant boost in attraction & confidence"
                quote='"The pheromone spray gave me a noticeable edge. I feel more charismatic and people actually notice it."'
                product="Pheromone spray"
                img="https://i.imgur.com/6X5aKCJ.jpg"
            />
        </motion.div>
      </div>
    </section>
);

const TestimonialCard = ({ name, title, quote, product, img }) => (
    <motion.div variants={itemVariants} className="bg-white p-8 rounded-4xl shadow-xl border border-slate-100 flex flex-col">
        <div className="flex items-center gap-6">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg flex-shrink-0"><img src={img} className="w-full h-full object-cover" /></div>
            <div>
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="font-semibold text-dark-purple mt-1">{title}</p>
            </div>
        </div>
        <p className="text-slate-gray mt-6 text-lg flex-grow">{quote}</p>
        <div className="mt-8 flex items-center justify-between bg-light-lavender p-4 rounded-2xl">
            <div><p className="font-bold">{product}</p><div className="flex text-yellow-500"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div></div>
            <button className="bg-charcoal text-white px-6 py-2.5 rounded-full font-semibold hover:bg-dark-purple transition-all duration-300">Get Started</button>
        </div>
    </motion.div>
);

const Footer = () => (
    <footer className="bg-charcoal text-white rounded-t-4xl p-12 md:p-20 mt-16">
      <div className="container mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <h3 className="text-xl font-semibold mb-4">Your essential guide to daily skincare</h3>
          <button className="bg-white text-charcoal px-6 py-3 rounded-full font-semibold">Get Started</button>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-lg">Treatments</h4>
          <ul className="space-y-2 text-gray-300"><li className="hover:text-white transition-colors"><a href="#">Undereye Corrector</a></li><li className="hover:text-white transition-colors"><a href="#">Exfoliation Gel</a></li><li className="hover:text-white transition-colors"><a href="#">Wrinkle Fix</a></li><li className="hover:text-white transition-colors"><a href="#">Neck Cream</a></li></ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-lg">Support</h4>
          <ul className="space-y-2 text-gray-300"><li className="hover:text-white transition-colors"><a href="#">Terms of Use</a></li><li className="hover:text-white transition-colors"><a href="#">Privacy Policy</a></li><li className="hover:text-white transition-colors"><a href="#">Cookie Policy</a></li></ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-lg">Subscribe to our News</h4>
          <p className="text-gray-300 text-sm mb-4">Stay Informed and Never Miss a Beat.</p>
          <div className="flex"><input type="email" placeholder="Enter your email" className="bg-gray-700 text-white px-4 py-3 rounded-l-full focus:outline-none w-full" /><button className="bg-dark-purple px-6 py-3 rounded-r-full font-semibold">Subscribe</button></div>
          <div className="mt-8"><p>Contact Us: <a href="mailto:hi@glowskin.com" className="hover:text-dark-purple">hi@glowskin.com</a></p>
            <div className="flex gap-4 mt-4"><a href="#"><FiInstagram size={24} /></a><a href="#"><FaTiktok size={24} /></a><a href="#"><FiYoutube size={24} /></a><a href="#"><FiTwitter size={24} /></a></div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-16 border-t border-gray-700 pt-8">
        <p>Copyright © 2025 Glowskin. All rights reserved.</p>
      </div>
    </footer>
);

export default App;