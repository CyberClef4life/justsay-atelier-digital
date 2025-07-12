import { useEffect, useRef } from 'react';

const MinimalistPortfolio = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const portfolioImages = [
    'https://vip.tov.ae/images/saymodel/saymodel-1.jpg',
    'https://vip.tov.ae/images/saymodel/saymodel-2.jpg',
    'https://vip.tov.ae/images/saymodel/saymodel-3.jpg',
    'https://vip.tov.ae/images/saymodel/saymodel-4.jpg',
    'https://vip.tov.ae/images/saymodel/saymodel-5.jpg',
    'https://vip.tov.ae/images/saymodel/saymodel-6.jpg',
    'https://vip.tov.ae/images/saymodel/saymodel-7.jpg',
    'https://vip.tov.ae/images/saymodel/saymodel-8.jpg',
    'https://vip.tov.ae/images/saymodel/saymodel-9.jpg',
    'https://vip.tov.ae/images/saymodel/saymodel-12.jpg'
  ];

  const openModal = (imageSrc: string) => {
    const modal = document.getElementById('flipCardModal');
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    
    if (modal && modalImage) {
      modalImage.src = imageSrc;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    const modal = document.getElementById('flipCardModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    // Close modal when clicking outside the card
    const modal = document.getElementById('flipCardModal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal();
        }
      });
    }

    // Close modal with escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Create rows with distributed images
  const createRows = () => {
    const rows = [[], [], [], []] as string[][];
    portfolioImages.forEach((img, index) => {
      rows[index % 4].push(img);
    });
    
    // Fill remaining slots with repeated images for visual consistency
    const totalSlotsPerRow = 7;
    rows.forEach(row => {
      while (row.length < totalSlotsPerRow) {
        row.push(portfolioImages[Math.floor(Math.random() * portfolioImages.length)]);
      }
    });
    
    return rows;
  };

  const rows = createRows();

  return (
    <>
      {/* Flip Card Modal */}
      <div id="flipCardModal" className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black bg-opacity-90 opacity-0 invisible transition-all duration-300">
        <div className="w-4/5 h-4/5" style={{ perspective: '1000px' }}>
          <div className="relative w-full h-full text-center transition-transform duration-700 ease-out" style={{ transformStyle: 'preserve-3d' }}>
            <div className="absolute w-full h-full flex items-center justify-center text-white text-2xl font-light rounded-2xl" style={{ 
              background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)',
              backfaceVisibility: 'hidden'
            }}>
              Click to reveal image
            </div>
            <div className="absolute w-full h-full bg-white flex items-center justify-center rounded-2xl" style={{ 
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden'
            }}>
              <button 
                className="absolute top-5 right-5 bg-black bg-opacity-70 text-white border-none w-12 h-12 rounded-full cursor-pointer text-2xl flex items-center justify-center transition-all duration-300 z-10 hover:bg-opacity-90 hover:scale-110"
                onClick={closeModal}
              >
                ×
              </button>
              <img id="modalImage" className="w-full h-full object-cover rounded-2xl" src="" alt="Full size image" />
            </div>
          </div>
        </div>
      </div>

      <section id="portfolio" ref={sectionRef} className="h-screen w-full overflow-hidden relative">
        {/* Section Title */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30 text-center fade-in-element opacity-0 transform translate-y-8 transition-all duration-1000">
          <h2 className="font-light text-4xl md:text-6xl tracking-wider text-white mb-4">
            PORTFOLIO
          </h2>
          <div className="w-24 h-px bg-white mx-auto"></div>
        </div>

        {/* Noise overlay */}
        <div className="absolute inset-0 pointer-events-none z-10 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, transparent 1px, rgba(255,255,255,0.05) 1px)',
          backgroundSize: '10px 10px'
        }}></div>

        <div className="h-full w-full overflow-hidden">
          <section className="w-full h-full overflow-hidden relative flex items-center justify-center bg-gradient-radial from-black to-transparent">
            <div className="w-full h-full flex items-center justify-center" style={{ perspective: '1200px', perspectiveOrigin: '50% 30%' }}>
              <div className="gap-4 flex-none relative w-[150vw] h-[150vh] grid grid-rows-4 grid-cols-1 z-20" style={{
                transform: 'rotateX(32deg) rotateZ(-15deg)',
                willChange: 'transform',
                transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)'
              }}>
                {/* Row 1 */}
                <div className="grid gap-4 grid-cols-7" style={{
                  animation: 'floatRight 8s ease-in-out infinite'
                }}>
                  {rows[0].map((img, index) => (
                    <div 
                      key={`row1-${index}`}
                      className="relative w-full h-full overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                      onClick={() => openModal(img)}
                    >
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${img})` }}
                      ></div>
                    </div>
                  ))}
                </div>

                {/* Row 2 */}
                <div className="grid gap-4 grid-cols-7" style={{
                  animation: 'floatLeft 6s ease-in-out infinite'
                }}>
                  {rows[1].map((img, index) => (
                    <div 
                      key={`row2-${index}`}
                      className="relative w-full h-full overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                      onClick={() => openModal(img)}
                    >
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${img})` }}
                      ></div>
                    </div>
                  ))}
                </div>

                {/* Row 3 */}
                <div className="grid gap-4 grid-cols-7" style={{
                  animation: 'floatRight 7s ease-in-out infinite'
                }}>
                  {rows[2].map((img, index) => (
                    <div 
                      key={`row3-${index}`}
                      className="relative w-full h-full overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                      onClick={() => openModal(img)}
                    >
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${img})` }}
                      ></div>
                    </div>
                  ))}
                </div>

                {/* Row 4 */}
                <div className="grid gap-4 grid-cols-7" style={{
                  animation: 'floatLeft 9s ease-in-out infinite'
                }}>
                  {rows[3].map((img, index) => (
                    <div 
                      key={`row4-${index}`}
                      className="relative w-full h-full overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                      onClick={() => openModal(img)}
                    >
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${img})` }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <style jsx>{`
          @keyframes floatLeft {
            0%, 100% { transform: translateX(-50px); }
            50% { transform: translateX(50px); }
          }
          @keyframes floatRight {
            0%, 100% { transform: translateX(50px); }
            50% { transform: translateX(-50px); }
          }
          
          #flipCardModal.active {
            opacity: 1;
            visibility: visible;
          }
          
          #flipCardModal.active .relative > div:first-child {
            transform: rotateY(180deg);
          }
        `}</style>
      </section>
    </>
  );
};

export default MinimalistPortfolio;