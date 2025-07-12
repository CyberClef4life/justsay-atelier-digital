import { useEffect, useRef } from 'react';

const ParallaxBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let scrollY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const particles: Array<{
      x: number;
      y: number;
      baseY: number;
      size: number;
      opacity: number;
      speed: number;
      depth: number;
    }> = [];

    // Create neutral particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight * 2,
        baseY: Math.random() * window.innerHeight * 2,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        speed: Math.random() * 0.5 + 0.2,
        depth: Math.random()
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create subtle gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(250, 250, 250, 0.02)');
      gradient.addColorStop(0.5, 'rgba(245, 245, 245, 0.01)');
      gradient.addColorStop(1, 'rgba(240, 240, 240, 0.02)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw particles with parallax effect
      particles.forEach((particle) => {
        const parallaxOffset = scrollY * particle.speed * particle.depth;
        const y = (particle.baseY + parallaxOffset) % (canvas.height + 100);
        
        ctx.save();
        ctx.globalAlpha = particle.opacity * (1 - particle.depth * 0.5);
        
        // Create subtle glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, y, 0,
          particle.x, y, particle.size * 3
        );
        gradient.addColorStop(0, `rgba(200, 200, 200, ${particle.opacity})`);
        gradient.addColorStop(1, 'rgba(200, 200, 200, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw core particle
        ctx.fillStyle = `rgba(180, 180, 180, ${particle.opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(particle.x, y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      scrollY = window.scrollY * 0.5;
    };

    const handleResize = () => {
      resize();
      // Redistribute particles on resize
      particles.forEach(particle => {
        if (particle.x > window.innerWidth) {
          particle.x = Math.random() * window.innerWidth;
        }
      });
    };

    resize();
    animate();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'linear-gradient(180deg, #fafafa 0%, #f5f5f5 50%, #f0f0f0 100%)' }}
    />
  );
};

export default ParallaxBackground;