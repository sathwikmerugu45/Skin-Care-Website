import React from 'react';
import { Leaf, Heart, Award, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Natural Ingredients',
      description: 'Sourced from organic farms worldwide, our ingredients are pure and sustainable.'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every product is crafted with care and attention to detail in small batches.'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized by beauty experts and loved by customers around the globe.'
    },
    {
      icon: Shield,
      title: 'Dermatologist Tested',
      description: 'All products are clinically tested and approved by certified dermatologists.'
    }
  ];

  return (
    <section id="about" className="section-padding gradient-bg">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Philosophy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Luxe Skincare, we believe that true beauty comes from within and radiates outward. 
            Our mission is to enhance your natural glow with products that nourish, protect, and 
            celebrate your unique skin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Crafted for Your Skin's Journey
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              We understand that every skin is unique, with its own story and needs. That's why 
              we've dedicated ourselves to creating products that work in harmony with your skin's 
              natural processes, not against them.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              From our sustainable sourcing practices to our innovative formulations, every step 
              of our process is guided by our commitment to quality, efficacy, and environmental 
              responsibility.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
              alt="Natural skincare ingredients"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center shadow-xl">
              <Leaf className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl glass-effect hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;