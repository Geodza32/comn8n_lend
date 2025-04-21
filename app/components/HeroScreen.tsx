import { useEffect, useRef } from 'react';

export default function HeroScreen() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const planets = container.querySelectorAll('.planet');
      planets.forEach((planet) => {
        const speed = parseFloat(planet.getAttribute('data-speed') || '2');
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        (planet as HTMLElement).style.transform = `translate(${xOffset * 30}px, ${yOffset * 30}px)`;
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="hero-gradient relative min-h-screen flex items-center justify-center px-4 py-16">
      <div className="planet planet-1" data-speed="2" />
      <div className="planet planet-2" data-speed="3" />
      <div className="planet planet-3" data-speed="1.5" />
      <div className="planet planet-4" data-speed="2.5" />
      <div className="planet planet-5" data-speed="1.8" />
      
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="animated-badge mb-6 mx-auto">
          Присоединяйтесь к нам
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-600">
          Сообщество AI разработчиков
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Создавайте будущее вместе с лучшими специалистами в области искусственного интеллекта
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="gradient-button">
            Присоединиться сейчас
          </button>
          <button className="styled-border px-6 py-3 bg-opacity-20 bg-white hover:bg-opacity-30 transition-all">
            Узнать больше
          </button>
        </div>
      </div>
    </section>
  );
} 