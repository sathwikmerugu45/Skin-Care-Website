import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const Media = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Natural skincare routine'
    },
    {
      src: 'https://images.pexels.com/photos/7755515/pexels-photo-7755515.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Skincare products arrangement'
    },
    {
      src: 'https://images.pexels.com/photos/7755516/pexels-photo-7755516.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Luxury skincare collection'
    },
    {
      src: 'https://images.pexels.com/photos/7755514/pexels-photo-7755514.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Organic ingredients'
    }
  ];

  return (
    <section id="media" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience Luxe
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See our products in action and discover the transformative power of natural skincare.
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto">
            <div 
              className="relative bg-gradient-to-br from-primary-100 to-rose-100 rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setIsVideoOpen(true)}
            >
              <img 
                src="https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
                alt="Skincare routine video thumbnail"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-primary-600 ml-1" />
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">The Perfect Routine</h3>
                <p className="text-white/90">Watch how to achieve glowing skin in 3 simple steps</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
              >
                <X className="w-8 h-8" />
              </button>
              
              <div className="bg-black rounded-2xl overflow-hidden">
                <video 
                  controls 
                  autoPlay
                  className="w-full h-auto"
                  poster="https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
                >
                  <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-rose-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Skin?</h3>
            <p className="text-xl mb-6 text-white/90">
              Join thousands of satisfied customers who have discovered their best skin yet.
            </p>
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;