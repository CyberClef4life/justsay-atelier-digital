const MinimalistFooter = () => {
  return (
    <footer className="py-16 px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="font-light text-xl tracking-wider text-gray-900 mb-8 md:mb-0">
            JUSTSAY
          </div>

          {/* Links */}
          <div className="flex items-center space-x-8 mb-8 md:mb-0">
            <a href="#portfolio" className="text-sm font-light tracking-wide text-gray-600 hover:text-gray-900 transition-colors duration-300">
              PORTFOLIO
            </a>
            <a href="#about" className="text-sm font-light tracking-wide text-gray-600 hover:text-gray-900 transition-colors duration-300">
              ABOUT
            </a>
            <a href="#contact" className="text-sm font-light tracking-wide text-gray-600 hover:text-gray-900 transition-colors duration-300">
              CONTACT
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs font-light tracking-widest text-gray-500">
            © 2025 JUSTSAY
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MinimalistFooter;