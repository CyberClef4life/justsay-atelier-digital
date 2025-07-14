import { useEffect, useRef } from 'react';

const MinimalistContact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in-element');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-in');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <div className="fade-in-element opacity-0 transform translate-y-8 transition-all duration-1000 mb-16">
          <h2 className="font-light text-4xl md:text-6xl tracking-wider text-gray-900 mb-6">
            CONTACT
          </h2>
          <div className="w-24 h-px bg-gray-900 mx-auto"></div>
        </div>

        {/* Contact Content */}
        <div className="space-y-16">
          <div className="fade-in-element opacity-0 transform translate-y-8 transition-all duration-1000">
            <p className="text-xl font-light leading-relaxed text-gray-700 max-w-2xl mx-auto">
              Ready to create something extraordinary? Available for luxury campaigns, editorial shoots, and exclusive brand partnerships.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="fade-in-element opacity-0 transform translate-y-8 transition-all duration-1000">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <h3 className="text-sm font-light tracking-widest text-gray-500 mb-4">EMAIL</h3>
                <a 
                  href="mailto:say@vip.tov.ae"
                  className="text-base font-light text-gray-900 hover:text-gray-600 transition-colors duration-300"
                >
                  say@vip.tov.ae
                </a>
              </div>

              <div className="text-center">
                <h3 className="text-sm font-light tracking-widest text-gray-500 mb-4">WHATSAPP</h3>
                <a 
                  href="https://wa.me/971585812278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-light text-gray-900 hover:text-gray-600 transition-colors duration-300"
                >
                  +971-5858-1-2278
                </a>
              </div>

              <div className="text-center">
                <h3 className="text-sm font-light tracking-widest text-gray-500 mb-4">LOCATION</h3>
                <p className="text-base font-light text-gray-900">
                  Available Worldwide
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="fade-in-element opacity-0 transform translate-y-8 transition-all duration-1000">
            <a 
              href="/booking"
              className="inline-block text-sm font-light tracking-widest text-gray-900 border border-gray-900 px-12 py-4 hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              BOOK JUSTSAY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalistContact;