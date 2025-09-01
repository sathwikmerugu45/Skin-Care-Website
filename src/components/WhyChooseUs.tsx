// src/components/WhyChooseUs.tsx
import { motion } from 'framer-motion';
import { FiCheckCircle, FiStar, FiUserCheck } from 'react-icons/fi';

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-8">Why Choose Glowskin?</h2>

          <div className="space-y-6">
             {/* Stat Counter - In a real app, you'd use a library like react-countup for the number animation */}
            <div className="bg-white p-4 rounded-2xl shadow-md">
                <p className="text-sm">Hair Volume | Test result</p>
                <div className="flex items-end gap-4">
                    <p className="text-5xl font-bold text-dark-purple">27%</p>
                    <p className="text-gray-600 mb-1">Improvements in 4 weeks</p>
                </div>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-md">
                <p className="text-sm">Trusted by thousands</p>
                <div className="flex items-end gap-4">
                    <p className="text-5xl font-bold text-dark-purple">25+</p>
                    {/* Placeholder for user avatars */}
                    <div className="flex -space-x-2 mb-1">
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/32?u=a" alt=""/>
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/32?u=b" alt=""/>
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/32?u=c" alt=""/>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-center md:text-left">
                <div className="p-2">
                    <FiCheckCircle size={24} className="mb-2 text-dark-purple mx-auto md:mx-0"/>
                    <h4 className="font-semibold">Clinically Proven</h4>
                    <p className="text-sm text-gray-600">Backed by science for visible results.</p>
                </div>
                 <div className="p-2">
                    <FiStar size={24} className="mb-2 text-dark-purple mx-auto md:mx-0"/>
                    <h4 className="font-semibold">Fast, Visible Results</h4>
                    <p className="text-sm text-gray-600">Most users notice changes within 2-4 weeks.</p>
                </div>
                 <div className="p-2">
                    <FiUserCheck size={24} className="mb-2 text-dark-purple mx-auto md:mx-0"/>
                    <h4 className="font-semibold">Personalized Support</h4>
                    <p className="text-sm text-gray-600">Expert guidance to help you achieve your goals.</p>
                </div>
            </div>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="w-full aspect-square rounded-3xl overflow-hidden shadow-2xl"
        >
          <img src="https://i.imgur.com/G5Y21Z5.jpg" alt="Happy woman with great skin" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;