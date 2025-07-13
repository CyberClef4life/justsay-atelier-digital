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

  useEffect(() => {
    // Initialize horizontal gallery after component mounts
    const initializeGallery = () => {
      const panelsContainer = document.querySelector(".makeup-panels-container");
      const panels = document.querySelectorAll(".makeup-panel");
      const progressFill = document.querySelector(".makeup-nav-progress-fill");
      const navText = document.querySelector(".makeup-nav-text");
      const leftMenu = document.querySelector(".makeup-left-menu");
      const menuBtn = document.querySelector(".makeup-menu-btn");
      const sectionNavItems = document.querySelectorAll(".makeup-section-nav-item");
      const horizontalContainer = document.querySelector(".makeup-horizontal-container");

      if (!panelsContainer || !panels.length) return;

      const SMOOTH_FACTOR = 0.065;
      const PANEL_COUNT = 4;

      let targetX = 0;
      let currentX = 0;
      let panelWidth = window.innerWidth;
      let maxScroll = (PANEL_COUNT - 1) * panelWidth;
      let isAnimating = false;
      let currentPanel = 0;
      let menuExpanded = false;
      let isDragging = false;
      let startX = 0;
      let startScrollX = 0;

      const lerp = (start, end, factor) => start + (end - start) * factor;
      const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

      // Menu functionality
      menuBtn?.addEventListener("click", () => {
        menuExpanded = !menuExpanded;
        leftMenu?.classList.toggle("expanded");
        document.body.classList.toggle("makeup-menu-expanded");

        if (menuExpanded) {
          setTimeout(() => {
            sectionNavItems.forEach((item, index) => {
              setTimeout(() => item.classList.add("animate-in"), index * 30);
            });
          }, 150);
        } else {
          sectionNavItems.forEach(item => item.classList.remove("animate-in"));
        }

        setTimeout(updateDimensions, 400);
      });

      const updateDimensions = () => {
        panelWidth = window.innerWidth;
        maxScroll = (PANEL_COUNT - 1) * panelWidth;
        targetX = currentPanel * panelWidth;
        currentX = targetX;

        panels.forEach(panel => {
          panel.style.width = `${panelWidth}px`;
        });

        panelsContainer.style.transform = `translateX(-${currentX}px)`;
      };

      // Navigation
      sectionNavItems.forEach((item) => {
        item.addEventListener("click", () => {
          const index = parseInt(item.getAttribute("data-index"));
          targetX = index * panelWidth;

          sectionNavItems.forEach(navItem => navItem.classList.remove("active"));
          item.classList.add("active");

          startAnimation();

          if (menuExpanded) {
            menuExpanded = false;
            leftMenu?.classList.remove("expanded");
            document.body.classList.remove("makeup-menu-expanded");
            sectionNavItems.forEach(item => item.classList.remove("animate-in"));
            setTimeout(updateDimensions, 400);
          }
        });
      });

      const updateProgress = () => {
        const progress = currentX / maxScroll;
        if (progressFill) {
          progressFill.style.transform = `scaleX(${progress})`;
        }
      };

      const updatePageCount = () => {
        const currentPanelIndex = Math.round(currentX / panelWidth) + 1;
        const formatted = currentPanelIndex.toString().padStart(2, '0');
        if (navText) {
          navText.textContent = `${formatted} / 04`;
        }

        sectionNavItems.forEach((item, index) => {
          if (index === currentPanelIndex - 1) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      };

      const updateActivePanel = () => {
        const newPanel = Math.round(currentX / panelWidth);
        if (newPanel !== currentPanel) {
          panels[currentPanel]?.classList.remove("active");
          panels[newPanel]?.classList.add("active");
          currentPanel = newPanel;
        }
      };

      const animate = () => {
        currentX = lerp(currentX, targetX, SMOOTH_FACTOR);
        panelsContainer.style.transform = `translateX(-${currentX}px)`;

        updateProgress();
        updatePageCount();
        updateActivePanel();

        if (Math.abs(targetX - currentX) > 0.1 || isAnimating) {
          requestAnimationFrame(animate);
        } else {
          isAnimating = false;
        }
      };

      const startAnimation = () => {
        if (!isAnimating) {
          isAnimating = true;
          requestAnimationFrame(animate);
        }
      };

      // Event handlers
      horizontalContainer?.addEventListener("wheel", (e) => {
        e.preventDefault();
        targetX = clamp(targetX + e.deltaY, 0, maxScroll);
        startAnimation();
      });

      horizontalContainer?.addEventListener("mousedown", (e) => {
        if (e.target.closest(".makeup-left-menu")) return;
        isDragging = true;
        startX = e.clientX;
        startScrollX = currentX;
        document.body.style.cursor = "grabbing";
        e.preventDefault();
      });

      window.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        targetX = clamp(startScrollX - dx, 0, maxScroll);
        startAnimation();
      });

      window.addEventListener("mouseup", () => {
        if (!isDragging) return;
        isDragging = false;
        document.body.style.cursor = "grab";
        
        const nearestPanel = Math.round(targetX / panelWidth);
        targetX = nearestPanel * panelWidth;
        startAnimation();
      });

      window.addEventListener("resize", updateDimensions);

      // Initialize
      updateDimensions();
      panels[0]?.classList.add("active");
      sectionNavItems[0]?.classList.add("active");
      startAnimation();
    };

    // Delay initialization to ensure DOM is ready
    setTimeout(initializeGallery, 100);
  }, []);

  return (
    <>
      <style jsx>{`
        .makeup-gallery {
          --color-primary: #000000;
          --color-secondary: #111111;
          --color-accent: #ffffff;
          --color-text: #ffffff;
          --color-text-muted: rgba(255, 255, 255, 0.7);
          --menu-width: 200px;
          --menu-collapsed-width: 60px;
          --transition-slow: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .makeup-gallery * {
          box-sizing: border-box;
        }

        .makeup-gallery {
          font-family: 'Playfair Display', serif;
          overflow: hidden;
          cursor: grab;
          background-color: var(--color-primary);
          color: var(--color-text);
          position: relative;
          height: 100vh;
        }

        .makeup-gallery:active { cursor: grabbing; }

        .makeup-left-menu {
          position: fixed;
          left: 0;
          top: 0;
          height: 100vh;
          width: var(--menu-collapsed-width);
          background-color: var(--color-secondary);
          z-index: 100;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: width var(--transition-slow);
          overflow: hidden;
          border-right: 1px solid #333;
        }

        .makeup-left-menu.expanded {
          width: var(--menu-width);
        }

        body.makeup-menu-expanded .makeup-page-container {
          left: var(--menu-width);
        }

        .makeup-page-container {
          position: fixed;
          top: 0;
          left: var(--menu-collapsed-width);
          right: 0;
          bottom: 0;
          transition: left var(--transition-slow);
        }

        .makeup-left-menu-top {
          position: absolute;
          top: 1.5rem;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .makeup-left-menu-middle {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          transform: translateY(-50%);
        }

        .makeup-logo {
          font-weight: 300;
          letter-spacing: 2px;
          font-size: 0.7rem;
          color: var(--color-text);
          transform: rotate(-90deg);
          transition: opacity 0.3s;
        }

        .makeup-left-menu.expanded .makeup-logo {
          opacity: 0;
        }

        .makeup-menu-btn {
          width: 20px;
          height: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
          background: transparent;
          border: none;
          padding: 0;
        }

        .makeup-menu-btn span {
          display: block;
          width: 100%;
          height: 2px;
          background-color: var(--color-text);
          transition: transform 0.3s, opacity 0.3s;
        }

        .makeup-left-menu.expanded .makeup-menu-btn span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .makeup-left-menu.expanded .makeup-menu-btn span:nth-child(2) {
          opacity: 0;
        }

        .makeup-left-menu.expanded .makeup-menu-btn span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        .makeup-section-nav {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s, visibility 0.3s;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding-left: var(--menu-collapsed-width);
          padding-right: 1rem;
          background-color: var(--color-secondary);
        }

        .makeup-left-menu.expanded .makeup-section-nav {
          opacity: 1;
          visibility: visible;
        }

        .makeup-section-nav-item {
          color: var(--color-text-muted);
          text-decoration: none;
          margin: 1rem 0;
          font-size: 0.8rem;
          opacity: 0;
          transition: opacity var(--transition-slow), transform var(--transition-slow), color 0.2s;
          cursor: pointer;
          transform: translateX(-20px);
          display: flex;
          align-items: center;
          font-weight: 300;
        }

        .makeup-section-nav-item.animate-in {
          opacity: 0.7;
          transform: translateX(0);
        }

        .makeup-section-nav-item:hover,
        .makeup-section-nav-item.active {
          opacity: 1;
          color: var(--color-accent);
        }

        .makeup-section-nav-item-number {
          font-weight: 400;
          font-size: 0.7rem;
          opacity: 0.6;
          margin-right: 0.5rem;
          min-width: 20px;
        }

        .makeup-horizontal-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .makeup-panels-container {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          display: flex;
          will-change: transform;
        }

        .makeup-panel {
          position: relative;
          height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .makeup-panel-content {
          width: 90%;
          max-width: 900px;
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .makeup-panel.active .makeup-panel-content {
          opacity: 1;
          transform: translateY(0);
        }

        .makeup-chapter {
          text-transform: uppercase;
          margin-bottom: 3rem;
          font-size: 0.8rem;
          letter-spacing: 3px;
          color: var(--color-text-muted);
          font-weight: 400;
        }

        .makeup-title {
          font-size: clamp(3rem, 8vw, 8rem);
          margin-bottom: 3rem;
          line-height: 1;
          font-weight: 300;
          color: var(--color-text);
          letter-spacing: -0.02em;
        }

        .makeup-mega-text {
          font-size: clamp(6rem, 20vw, 20rem);
          line-height: 0.8;
          font-weight: 300;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: 2rem;
          letter-spacing: -0.05em;
        }

        .makeup-text {
          font-size: clamp(1rem, 1.5vw, 1.2rem);
          line-height: 1.6;
          color: var(--color-text-muted);
          font-weight: 300;
          max-width: 700px;
          margin: 0 auto;
        }

        .makeup-image-panel {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .makeup-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3));
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .makeup-navigation {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 1.5rem;
          z-index: 100;
          color: white;
        }

        .makeup-nav-progress {
          width: 100px;
          height: 2px;
          background-color: #333;
          position: relative;
          overflow: hidden;
        }

        .makeup-nav-progress-fill {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: white;
          transform-origin: left;
          transform: scaleX(0);
          will-change: transform;
        }

        .makeup-nav-text {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 300;
        }

        .makeup-panel-1 {
          background-color: #000000;
        }

        .makeup-panel-2 {
          background-color: #111111;
        }

        .makeup-panel-3 {
          background-color: #1a1a1a;
        }

        .makeup-panel-4 {
          background-color: #000000;
        }

        @media (max-width: 768px) {
          .makeup-title {
            font-size: clamp(2rem, 8vw, 4rem);
          }

          .makeup-mega-text {
            font-size: clamp(3rem, 15vw, 8rem);
          }
        }
      `}</style>

      <section id="makeup" ref={sectionRef} className="makeup-gallery">
        {/* Left Menu */}
        <div className="makeup-left-menu">
          <div className="makeup-left-menu-top">
            <button className="makeup-menu-btn" aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="makeup-left-menu-middle">
            <div className="makeup-logo">MAKEUP</div>
          </div>
          <div className="makeup-section-nav">
            <a className="makeup-section-nav-item" data-index="0">
              <span className="makeup-section-nav-item-number">01</span>
              <span>Artistry</span>
            </a>
            <a className="makeup-section-nav-item" data-index="1">
              <span className="makeup-section-nav-item-number">02</span>
              <span>Beauty</span>
            </a>
            <a className="makeup-section-nav-item" data-index="2">
              <span className="makeup-section-nav-item-number">03</span>
              <span>Elegance</span>
            </a>
            <a className="makeup-section-nav-item" data-index="3">
              <span className="makeup-section-nav-item-number">04</span>
              <span>Perfection</span>
            </a>
          </div>
        </div>

        <div className="makeup-page-container">
          <div className="makeup-horizontal-container">
            <div className="makeup-panels-container">
              {/* Panel 1: Artistry */}
              <section 
                className="makeup-panel makeup-panel-1 makeup-image-panel" 
                data-index="0"
                style={{ backgroundImage: 'url(https://vip.tov.ae/images/saymodel/justceybeauty-1.jpg)' }}
              >
                <div className="makeup-image-overlay">
                  <div className="makeup-panel-content">
                    <div className="makeup-chapter">MAKEUP ARTISTRY</div>
                    <h1 className="makeup-title">ARTISTRY</h1>
                    <div className="makeup-text">
                      <p>Beyond modeling, JUSTSAY brings artistry to beauty through expert makeup application and creative vision.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Panel 2: Beauty */}
              <section 
                className="makeup-panel makeup-panel-2 makeup-image-panel" 
                data-index="1"
                style={{ backgroundImage: 'url(https://vip.tov.ae/images/saymodel/justceybeauty-4.jpg)' }}
              >
                <div className="makeup-image-overlay">
                  <div className="makeup-panel-content">
                    <div className="makeup-chapter">LUXURY BEAUTY</div>
                    <div className="makeup-mega-text">BEAUTY</div>
                    <div className="makeup-text">
                      <p>Timeless elegance for your special day with luxury products and flawless application techniques.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Panel 3: Elegance */}
              <section 
                className="makeup-panel makeup-panel-3 makeup-image-panel" 
                data-index="2"
                style={{ backgroundImage: 'url(https://vip.tov.ae/images/saymodel/justceybeauty-5.jpg)' }}
              >
                <div className="makeup-image-overlay">
                  <div className="makeup-panel-content">
                    <div className="makeup-chapter">EDITORIAL WORK</div>
                    <div className="makeup-mega-text">ELEGANCE</div>
                    <div className="makeup-text">
                      <p>High-fashion looks for photoshoots, campaigns, and artistic collaborations with industry professionals.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Panel 4: Perfection */}
              <section 
                className="makeup-panel makeup-panel-4 makeup-image-panel" 
                data-index="3"
                style={{ backgroundImage: 'url(https://vip.tov.ae/images/saymodel/justceybeauty-6.jpg)' }}
              >
                <div className="makeup-image-overlay">
                  <div className="makeup-panel-content">
                    <div className="makeup-chapter">PERSONAL STYLING</div>
                    <div className="makeup-mega-text">PERFECTION</div>
                    <div className="makeup-text">
                      <p>One-on-one makeup lessons and personalized beauty consultations for the discerning client.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="makeup-navigation">
          <div className="makeup-nav-text">SCROLL</div>
          <div className="makeup-nav-progress">
            <div className="makeup-nav-progress-fill"></div>
          </div>
          <div className="makeup-nav-text">01 / 04</div>
        </div>
      </section>
    </>
  );
};

export default MakeupArtistSection;