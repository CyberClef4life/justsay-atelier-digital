import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MakeupArtistSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    'https://vip.tov.ae/images/saymodel/justceybeauty-1.jpg',
    'https://vip.tov.ae/images/saymodel/justceybeauty-4.jpg',
    'https://vip.tov.ae/images/saymodel/justceybeauty-5.jpg',
    'https://vip.tov.ae/images/saymodel/justceybeauty-6.jpg'
  ];

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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

            {/* Book Now Button */}
            <div className="fade-in-element opacity-0 transform translate-y-8 transition-all duration-1000">
              <a 
                href="mailto:say@vip.tov.ae?subject=Makeup Artist Booking Inquiry"
                className="inline-block text-sm font-light tracking-widest text-gray-900 border border-gray-900 px-12 py-4 hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                BOOK NOW
              </a>
            </div>
          </div>

          {/* Right Column - Luxury Carousel */}
          <div className="fade-in-element opacity-0 transform translate-y-8 transition-all duration-1000">
            <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden group">
              {/* Carousel Images */}
              <div className="relative w-full h-full">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentSlide 
                        ? 'opacity-100 transform scale-100' 
                        : 'opacity-0 transform scale-105'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`JUSTSAY Makeup Artistry ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-gray-900" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-gray-900" />
              </button>

              {/* Dot Navigation */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-white scale-125 shadow-lg'
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 text-sm font-light tracking-wide">
                {currentSlide + 1} / {carouselImages.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeupArtistSection;