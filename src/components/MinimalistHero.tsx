import { useEffect, useRef } from 'react';

const MinimalistHero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

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

  // The unique ID of your YouTube video
  const videoId = '_z-26j2nO48';

  // Construct the YouTube embed URL with the correct parameters
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube Iframe Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <iframe
          className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"
          style={{ width: '177.77vh', height: '100vw' }} // Scales the video to cover the screen
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
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

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-gray-400 relative">
          <div className="absolute top-0 w-px h-4 bg-white animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default MinimalistHero;