// src/components/ProductGrid.tsx
import { motion } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';

const products = [
  { name: 'Undereye Corrector', price: '49.99', oldPrice: '69.99', color: 'bg-red-50' },
  { name: 'Exfoliation Gel', price: '49.99', oldPrice: '69.99', color: 'bg-purple-50' },
  { name: 'Activator Shampoo', price: '49.99', oldPrice: '69.99', color: 'bg-gray-100' },
  { name: 'Pheromone spray', price: '49.99', oldPrice: '69.99', color: 'bg-green-50' },
  { name: 'Neck Cream', price: '49.99', oldPrice: '69.99', color: 'bg-yellow-50' },
  { name: 'Wrinkle Fix', price: '49.99', oldPrice: '69.99', color: 'bg-pink-50' },
  { name: 'Eye Cream', price: '49.99', oldPrice: '69.99', color: 'bg-gray-100' },
  { name: 'Joint pain relief gel', price: '49.99', oldPrice: '69.99', color: 'bg-blue-50' },
];

const ProductGrid = () => {
  return (
    <section className="py-24 px-4 bg-white rounded-t-[4rem]">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-center font-bold"
        >
          Find the perfect <span className="text-dark-purple">Solution for your goals</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="text-center group"
            >
              <div className={`${product.color} rounded-3xl p-6 aspect-square flex items-center justify-center`}>
                {/* Product image placeholder */}
                <img src={`https://via.placeholder.com/150`} alt={product.name} className="max-h-full transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="font-semibold mt-4">{product.name}</h3>
              <div className="flex justify-center items-center gap-4 mt-2">
                <p className="font-bold text-lg">${product.price}</p>
                <p className="text-gray-400 line-through">${product.oldPrice}</p>
                 <button className="bg-charcoal text-white rounded-full p-2 hover:bg-dark-purple transition-colors">
                  <FiPlus size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;