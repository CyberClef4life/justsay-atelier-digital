import { useState, useEffect } from "react";

const MinimalistNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-light text-2xl tracking-wider text-gray-900">
            JUSTSAY
          </div>

          {/* Minimal Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#portfolio" className="text-sm font-light tracking-wide text-gray-700 hover:text-gray-900 transition-colors duration-300">
              PORTFOLIO
            </a>
            <a href="#about" className="text-sm font-light tracking-wide text-gray-700 hover:text-gray-900 transition-colors duration-300">
              ABOUT
            </a>
            <a href="#contact" className="text-sm font-light tracking-wide text-gray-700 hover:text-gray-900 transition-colors duration-300">
              CONTACT
            </a>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a 
              href="#contact"
              className="text-sm font-light tracking-wide text-gray-900 border-b border-gray-900 pb-1 hover:border-gray-600 transition-colors duration-300"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MinimalistNavigation;