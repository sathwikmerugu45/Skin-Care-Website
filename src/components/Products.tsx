import React, { useState } from 'react';
import { ShoppingBag, Star, Heart } from 'lucide-react';

const Products = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: 'Radiance Renewal Serum',
      description: 'A powerful vitamin C serum that brightens and evens skin tone while providing deep hydration.',
      price: '$89',
      originalPrice: '$120',
      image: 'https://images.pexels.com/photos/7755515/pexels-photo-7755515.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
      rating: 4.9,
      reviews: 234,
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Hydrating Night Cream',
      description: 'Rich, nourishing night cream with retinol and peptides for overnight skin renewal.',
      price: '$75',
      originalPrice: '$95',
      image: 'https://images.pexels.com/photos/7755516/pexels-photo-7755516.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
      rating: 4.8,
      reviews: 189,
      badge: 'New'
    },
    {
      id: 3,
      name: 'Gentle Cleansing Foam',
      description: 'A mild, pH-balanced cleanser that removes impurities while maintaining skin barrier.',
      price: '$45',
      originalPrice: '$60',
      image: 'https://images.pexels.com/photos/7755514/pexels-photo-7755514.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
      rating: 4.7,
      reviews: 156,
      badge: 'Eco-Friendly'
    },
    {
      id: 4,
      name: 'Brightening Eye Cream',
      description: 'Targeted treatment for dark circles and fine lines around the delicate eye area.',
      price: '$65',
      originalPrice: '$85',
      image: 'https://images.pexels.com/photos/7755513/pexels-photo-7755513.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
      rating: 4.9,
      reviews: 98,
      badge: 'Limited Edition'
    },
    {
      id: 5,
      name: 'Exfoliating Toner',
      description: 'Gentle AHA/BHA toner that refines pores and improves skin texture.',
      price: '$55',
      originalPrice: '$70',
      image: 'https://images.pexels.com/photos/7755512/pexels-photo-7755512.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
      rating: 4.6,
      reviews: 203,
      badge: 'Dermatologist Approved'
    },
    {
      id: 6,
      name: 'Moisturizing Sunscreen',
      description: 'Broad-spectrum SPF 50 protection with hydrating ingredients for daily use.',
      price: '$38',
      originalPrice: '$50',
      image: 'https://images.pexels.com/photos/7755511/pexels-photo-7755511.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
      rating: 4.8,
      reviews: 167,
      badge: 'Essential'
    }
  ];

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Premium Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of skincare essentials, 
            each formulated to deliver visible results and lasting beauty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300"
                >
                  <Heart 
                    className={`w-5 h-5 transition-colors duration-300 ${
                      favorites.includes(product.id) 
                        ? 'text-red-500 fill-current' 
                        : 'text-gray-600'
                    }`} 
                  />
                </button>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary-600">
                      {product.price}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  
                  <button className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 group">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Products
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;