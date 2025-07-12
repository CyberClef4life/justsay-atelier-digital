import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "Media", href: "#media" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <h3 className="font-serif text-3xl font-semibold text-primary">
              JustSay
            </h3>
            <p className="text-background/80 mt-2 text-sm">
              Model • Muse • Visionary
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-background/80 hover:text-primary transition-colors duration-300 text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="mb-8">
            <p className="text-background/60 text-sm mb-4">Follow the Journey</p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-background/80 hover:text-primary transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-background/20 pt-8">
            <p className="text-background/60 text-sm">
              © 2025 JustSay. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;