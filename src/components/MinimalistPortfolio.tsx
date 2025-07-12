import { useEffect, useRef } from 'react';

const MinimalistPortfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const images = entry.target.querySelectorAll('.portfolio-image');
            images.forEach((img, index) => {
              setTimeout(() => {
                img.classList.add('animate-in');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const portfolioItems = [
    { id: 1, category: "EDITORIAL", title: "VOGUE PARIS" },
    { id: 2, category: "CAMPAIGN", title: "LUXURY BRAND" },
    { id: 3, category: "RUNWAY", title: "FASHION WEEK" },
    { id: 4, category: "PORTRAIT", title: "FINE ART" },
    { id: 5, category: "COMMERCIAL", title: "BEAUTY" },
    { id: 6, category: "ARTISTIC", title: "CONCEPTUAL" }
  ];

  return (
    <section id="portfolio" ref={sectionRef} className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-24">
          <h2 className="font-light text-4xl md:text-6xl tracking-wider text-gray-900 mb-6">
            PORTFOLIO
          </h2>
          <div className="w-24 h-px bg-gray-900 mx-auto"></div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id}
              className="portfolio-image opacity-0 transform translate-y-8 transition-all duration-1000 group cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="aspect-[3/4] bg-gray-100 mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-400 font-light tracking-widest text-sm">
                    {item.category}
                  </div>
                </div>
              </div>

              {/* Image Info */}
              <div className="text-center">
                <p className="text-xs font-light tracking-widest text-gray-500 mb-2">
                  {item.category}
                </p>
                <h3 className="text-lg font-light tracking-wide text-gray-900">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinimalistPortfolio;