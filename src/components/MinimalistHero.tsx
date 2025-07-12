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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline // Important for autoplay on mobile browsers
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        {/* IMPORTANT: Replace this with the actual path to your video file */}
        <source src="/path/to/your/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Content Overlay */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
        <h1 
          ref={titleRef}
          className="font-light text-6xl md:text-8xl lg:text-9xl tracking-wider text-white mb-8 opacity-0 transform translate-y-8 transition-all duration-1000"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          SAYMODEL
        </h1>
        
        <p 
          ref={subtitleRef}
          className="font-light text-lg md:text-xl tracking-widest text-gray-200 opacity-0 transform translate-y-4 transition-all duration-1000"
        >
          MODEL • HOST • AMBASSADOR
        </p>
      </div>

      {/* Scroll indicator - adjusted for better visibility on video */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-gray-400 relative">
          <div className="absolute top-0 w-px h-4 bg-white animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default MinimalistHero;