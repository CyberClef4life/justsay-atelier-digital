import { useEffect, useRef } from 'react';

const MinimalistHero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    if (title && subtitle) {
      // Animate on load
      setTimeout(() => {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }, 500);

      setTimeout(() => {
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }, 800);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-8">
        <h1 
          ref={titleRef}
          className="font-light text-6xl md:text-8xl lg:text-9xl tracking-wider text-gray-900 mb-8 opacity-0 transform translate-y-8 transition-all duration-1000"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          JUSTSAY
        </h1>
        
        <p 
          ref={subtitleRef}
          className="font-light text-lg md:text-xl tracking-widest text-gray-600 opacity-0 transform translate-y-4 transition-all duration-1000"
        >
          MODEL • MUSE • VISIONARY
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-gray-300 relative">
          <div className="absolute top-0 w-px h-4 bg-gray-900 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default MinimalistHero;