import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="font-serif text-3xl font-semibold text-foreground hover:text-primary transition-colors duration-300"
          >
            JustSay
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              About
            </a>
            
            {/* Portfolio Dropdown */}
            <div className="group relative">
              <a 
                href="#portfolio" 
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium cursor-pointer"
              >
                Portfolio
              </a>
              <div className="absolute top-full left-0 w-56 bg-background shadow-luxury border border-border rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2">
                <div className="py-2">
                  <a href="#portfolio-advertising" className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors">
                    Advertising
                  </a>
                  <a href="#portfolio-fashion" className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors">
                    Fashion/Lifestyle
                  </a>
                  <a href="#portfolio-sports" className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors">
                    Sports
                  </a>
                  <a href="#portfolio-lingerie" className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors">
                    Lingerie/Swimwear
                  </a>
                  <a href="#portfolio-portrait" className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors">
                    Portrait
                  </a>
                  <a href="#portfolio-runway" className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors">
                    Runway
                  </a>
                </div>
              </div>
            </div>

            <a href="#blog" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Blog
            </a>
            
            {/* Media Dropdown */}
            <div className="group relative">
              <a 
                href="#media" 
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium cursor-pointer"
              >
                Media
              </a>
              <div className="absolute top-full left-0 w-40 bg-background shadow-luxury border border-border rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2">
                <div className="py-2">
                  <a href="#media-photo" className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors">
                    Photo
                  </a>
                  <a href="#media-video" className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors">
                    Video
                  </a>
                </div>
              </div>
            </div>

            <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              variant="luxury" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Begin Your Journey
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-luxury">
            <div className="py-4 px-6 space-y-4">
              <a href="#home" className="block text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="#about" className="block text-foreground hover:text-primary transition-colors font-medium">
                About
              </a>
              <a href="#portfolio" className="block text-foreground hover:text-primary transition-colors font-medium">
                Portfolio
              </a>
              <a href="#blog" className="block text-foreground hover:text-primary transition-colors font-medium">
                Blog
              </a>
              <a href="#media" className="block text-foreground hover:text-primary transition-colors font-medium">
                Media
              </a>
              <a href="#contact" className="block text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </a>
              <div className="pt-4">
                <Button 
                  variant="luxury" 
                  size="lg" 
                  className="w-full"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                >
                  Begin Your Journey
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;