import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto max-w-7xl flex justify-between items-center bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/50">
        <h1 className="text-2xl font-bold text-charcoal">Glowskin</h1>
        <nav className="hidden md:flex items-center gap-6 text-slate-gray font-medium">
          <div 
            className="relative"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-dark-purple transition-colors">
              All Products <FiChevronDown />
            </button>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[500px] bg-white p-6 rounded-2xl shadow-lg border border-slate-100"
                >
                  <p className="text-charcoal">Mega Menu content from the video would go here.</p>
                  <p className="text-sm mt-2">Showcasing different product categories.</p>
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
        <button className="bg-charcoal text-white px-6 py-2 rounded-full font-semibold hover:bg-dark-purple transition-all duration-300 transform hover:scale-105 shadow-md">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;