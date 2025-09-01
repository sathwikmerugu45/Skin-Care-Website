import { motion } from 'framer-motion';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Transformation = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}
          className="text-4xl text-center font-bold tracking-tight mb-12"
        >
          Inspiring transformations from <span className="text-dark-purple">real people like you</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold">Anna, 49 years</h3>
            <p className="text-lg font-semibold text-dark-purple mt-1">Visible neck tightening in 4 weeks</p>
            <p className="mt-4 text-slate-gray">
              "I struggled with loose skin and early signs of aging on my neck. After using Glowskin Neck Cream consistently, I finally saw real lifting and firmness!"
            </p>
            <div className="mt-8 bg-white p-6 rounded-2xl border border-light-border shadow-md">
              <p className="font-semibold mb-4">Anna also has problems with</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-light-lavender rounded-lg font-medium"><span>Neck Firming</span> <FaArrowRight /></div>
                <div className="flex justify-between items-center p-3 bg-light-lavender rounded-lg font-medium"><span>Hair Growth</span> <FaArrowRight /></div>
                <div className="flex justify-between items-center p-3 bg-light-lavender rounded-lg font-medium"><span>Pigmentation</span> <FaArrowRight /></div>
              </div>
            </div>
             <div className="mt-6 flex items-center justify-between bg-white p-4 rounded-2xl border border-light-border shadow-md">
                <div>
                    <p className="font-bold">Neck Cream</p>
                    <p className="text-sm text-slate-gray">Neck Firming</p>
                </div>
                <button className="bg-charcoal text-white px-8 py-3 rounded-full font-semibold hover:bg-dark-purple transition-all duration-300">Get Started</button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-4xl overflow-hidden shadow-2xl">
              <img src="https://images.pexels.com/photos/4046399/pexels-photo-4046399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Before" className="absolute inset-0 w-full h-full object-cover"/>
              <div className="absolute inset-0 w-1/2 overflow-hidden">
                <img src="https://images.pexels.com/photos/4046313/pexels-photo-4046313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="After" className="absolute inset-0 w-[200%] h-full object-cover max-w-none"/>
              </div>
              <div className="absolute top-0 bottom-0 left-1/2 -ml-0.5 w-1 bg-white/70 backdrop-blur-sm"></div>
              <div className="absolute top-1/2 -mt-6 left-1/2 -ml-6 w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center cursor-pointer shadow-lg">
                <FaArrowLeft className="text-charcoal" /><FaArrowRight className="text-charcoal" />
              </div>
            </div>
             <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-slate-100">
                <p className="text-sm font-semibold">Your Improvements</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-right font-bold mt-1">75%</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;