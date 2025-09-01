// src/components/Footer.tsx
import { FaInstagram, FaTiktok, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white rounded-t-[4rem] p-12 mt-12">
      <div className="container mx-auto max-w-7xl grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Your essential guide to daily skincare</h3>
          <button className="bg-white text-charcoal px-6 py-2 rounded-full font-semibold">Get Started</button>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Treatments</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Undereye Corrector</a></li>
            <li><a href="#" className="hover:text-white">Exfoliation Gel</a></li>
            <li><a href="#" className="hover:text-white">Wrinkle Fix</a></li>
            {/* ... more links */}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Subscribe to our News</h4>
          <p className="text-gray-300 text-sm mb-4">Stay Informed and Never Miss a Beat. Subscribe to Our Exclusive News Updates!</p>
          <div className="flex">
            <input type="email" placeholder="Enter your email" className="bg-gray-700 text-white px-4 py-2 rounded-l-full focus:outline-none w-full" />
            <button className="bg-dark-purple px-6 py-2 rounded-r-full">Subscribe</button>
          </div>
          <div className="mt-6">
            <p>Contact Us:</p>
            <p>hi@glowskin.com</p>
            <div className="flex gap-4 mt-2">
              <a href="#"><FaInstagram size={20} /></a>
              <a href="#"><FaTiktok size={20} /></a>
              <a href="#"><FaYoutube size={20} /></a>
              <a href="#"><FaTwitter size={20} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-12 border-t border-gray-700 pt-6">
        <p>Copyright © 2025 Glowskin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;