import { useEffect, useRef } from 'react';

const MakeupArtistSection = () => {
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

  const makeupServices = [
    {
      title: "BRIDAL MAKEUP",
      description: "Timeless elegance for your special day with luxury products and flawless application."
    },
    {
      title: "EDITORIAL MAKEUP",
      description: "High-fashion looks for photoshoots, campaigns, and artistic collaborations."
    },
    {
      title: "SPECIAL EVENTS",
      description: "Red carpet glamour and sophisticated looks for galas, premieres, and celebrations."
    },
    {
      title: "PERSONAL STYLING",
      description: "One-on-one makeup lessons and personalized beauty consultations."
    }
  ];

  return (
    <section id="makeup" ref={sectionRef} className="py-32 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left Column - Content */}
          <div className="space-y-12">
            <div className="fade-in-element opacity-0 transform translate-y-8 transition-all duration-1000">
              <h2 className="font-light text-4xl md:text-5xl tracking-wider text-gray-900 mb-8">
                MAKEUP ARTIST
              </h2>
              <div className="w-16 h-px bg-gray-900 mb-8"></div>
            </div>

            <div className="fade-in-element opacity-0 transform translate-y-8 transition-all duration-1000">
              <p className="text-lg font-light leading-relaxed text-gray-700 mb-8">
                Beyond modeling, JUSTSAY brings artistry to beauty through expert makeup application and creative vision.
              </p>
              
              <p className="text-base font-light leading-relaxed text-gray-600 mb-12">
                With years of experience in high-fashion and luxury beauty, she creates stunning looks that enhance natural beauty while pushing creative boundaries.
              </p>
            </div>

            <div className="fade-in-element opacity-0 transform translate-y-8 transition-all duration-1000">
              <div className="space-y-6">
                {makeupServices.map((service, index) => (
                  <div key={index} className="border-l-2 border-gray-200 pl-6">
                    <h3 className="text-sm font-light tracking-widest text-gray-500 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-base font-light text-gray-900 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="fade-in-element opacity-0 transform translate-y-8 transition-all duration-1000">
            <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-gray-400 font-light tracking-widest text-sm">
                  MAKEUP ARTISTRY
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeupArtistSection;