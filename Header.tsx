import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 border-2 border-amber-600 rotate-45 flex items-center justify-center">
              <span className={`text-xl font-bold -rotate-45 ${isScrolled ? 'text-black' : 'text-amber-800'}`}>G</span>
            </div>
            <span className={`text-2xl font-bold uppercase tracking-wider ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              <span className="text-amber-700">FINE</span> GLAZE
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-medium text-gray-800 hover:text-amber-600 transition-colors bg-white/80 px-3 py-1 rounded">Home</a>
            <a href="#about" className="font-medium text-white drop-shadow-md hover:text-amber-300 transition-colors mix-blend-difference">About Us</a>
            <a href="#projects" className="font-medium text-white drop-shadow-md hover:text-amber-300 transition-colors mix-blend-difference">Projects</a>
            <a href="#contact" className="font-medium text-white drop-shadow-md hover:text-amber-300 transition-colors mix-blend-difference">Contact Us</a>
            
            <a href="tel:+918369233566" className="bg-gray-500/80 hover:bg-gray-600 text-white px-4 py-2 rounded shadow-sm flex items-center transition-all">
              <Phone className="w-4 h-4 mr-2" />
              +91 83692 33566
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 p-2 focus:outline-none bg-white/50 rounded"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-800 font-medium hover:bg-amber-50" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-800 font-medium hover:bg-amber-50" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <a href="#projects" className="block px-3 py-2 text-gray-800 font-medium hover:bg-amber-50" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" className="block px-3 py-2 text-gray-800 font-medium hover:bg-amber-50" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          </div>
        </div>
      )}
    </header>
  );
};