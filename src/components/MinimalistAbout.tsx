import { useEffect, useRef } from 'react';

const MinimalistAbout = () => {
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
              }, index * 300);
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
    <section id="about" ref={sectionRef} className="py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left Column - Image */}
          <div className="fade-in-element opacity-0 transform translate-y-8 transition-all duration-1000">
            <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden">
              <img
                src="https://vip.tov.ae/images/saymodel/saymodel-8.jpg"
                alt="JUSTSAY Portrait"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-12">
            <div className="fade-in-element opacity-0 transform translate-y-8 transition-all duration-1000">
              <h2 className="font-light text-4xl md:text-5xl tracking-wider text-gray-900 mb-8">
                ABOUT
              </h2>
              <div className="w-16 h-px bg-gray-900 mb-8"></div>
            </div>

            <div className="fade-in-element opacity-0 transform translate-y-8 transition-all duration-1000">
              <p className="text-lg font-light leading-relaxed text-gray-700 mb-8">
                A vision of ethereal beauty and magnetic presence, JUSTSAY transforms every lens into poetry, every campaign into art.
              </p>
              
              <p className="text-base font-light leading-relaxed text-gray-600 mb-12">
                From haute couture catwalks to luxury brand campaigns, she embodies the perfect fusion of elegance, sensuality, and sophistication that fashion's elite seek for their most prestigious projects.
              </p>
            </div>

            <div className="fade-in-element opacity-0 transform translate-y-8 transition-all duration-1000">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-light tracking-widest text-gray-500 mb-3">EXPERIENCE</h3>
                  <p className="text-base font-light text-gray-900">International Fashion Magazines</p>
                </div>
                <div>
                  <h3 className="text-sm font-light tracking-widest text-gray-500 mb-3">SPECIALTY</h3>
                  <p className="text-base font-light text-gray-900">Luxury Brand Campaigns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalistAbout;