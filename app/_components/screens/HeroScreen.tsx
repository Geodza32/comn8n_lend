import React, { useEffect, useRef } from "react";

export default function HeroScreen() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;
    
    // Параллакс эффект на движение мыши
    const handleMouseMove = (e: MouseEvent) => {
      const planets = heroElement.querySelectorAll('.planet');
      const rect = heroElement.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      // Вычисляем позицию мыши от -1 до 1
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const moveX = (mouseX - centerX) / centerX;
      const moveY = (mouseY - centerY) / centerY;
      
      planets.forEach((planet, index) => {
        const depth = (index + 1) * 5;
        const translateX = moveX * depth;
        const translateY = moveY * depth;
        (planet as HTMLElement).style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    };
    
    heroElement.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      heroElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Генерируем 80 звезд для фона
  const stars = Array.from({ length: 80 }).map((_, i) => {
    const size = Math.random() * 2 + 1;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 3 + 2;
    
    return (
      <div
        key={i}
        className="absolute rounded-full bg-white opacity-70"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          top: `${top}%`,
          animation: `twinkle ${duration}s ease-in-out infinite`,
          animationDelay: `${delay}s`,
          boxShadow: `0 0 ${size * 2}px rgba(255, 255, 255, 0.8)`,
        }}
      />
    );
  });
  
  return (
    <section ref={heroRef} className="hero-gradient relative min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden rounded-xl">
      {/* Звездное небо */}
      {stars}
      
      {/* Планеты фона */}
      <div className="planet planet-1" style={{ boxShadow: '0 0 30px rgba(255, 165, 0, 0.6)' }} />
      <div className="planet planet-2" style={{ boxShadow: '0 0 20px rgba(115, 217, 200, 0.5)' }} />
      <div className="planet planet-3" style={{ boxShadow: '0 0 15px rgba(129, 158, 202, 0.5)' }} />
      <div className="planet planet-4" style={{ boxShadow: '0 0 10px rgba(232, 212, 164, 0.5)' }} />
      <div className="planet planet-5" style={{ boxShadow: '0 0 20px rgba(154, 126, 186, 0.5)' }} />
      
      {/* Главное солнце/планета */}
      <div 
        className="absolute h-80 w-80 rounded-full" 
        style={{
          background: 'radial-gradient(circle, rgba(255,147,50,1) 0%, rgba(255,106,0,1) 50%, rgba(199,61,0,1) 100%)',
          boxShadow: '0 0 100px rgba(255, 147, 50, 0.6), 0 0 60px rgba(255, 106, 0, 0.4) inset',
          right: '-100px',
          bottom: '-100px',
          zIndex: 0,
        }}
      />
      
      {/* Декоративная линия/гора */}
      <svg className="absolute bottom-0 left-0 right-0 w-full" height="120" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 70C840 80 960 100 1080 100C1200 100 1320 80 1380 70L1440 60V120H0Z"
          fill="url(#mountain1)"
        />
        <defs>
          <linearGradient id="mountain1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#1a1a2e" />
            <stop offset="0.5" stopColor="#4a3f6b" />
            <stop offset="1" stopColor="#1a1a2e" />
          </linearGradient>
        </defs>
      </svg>
      
      <svg className="absolute bottom-0 left-0 right-0 w-full" height="80" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M0 80L48 77.3C96 74.7 192 69.3 288 64C384 58.7 480 53.3 576 58.7C672 64 768 80 864 80C960 80 1056 64 1152 53.3C1248 42.7 1344 37.3 1392 34.7L1440 32V80H0Z"
          fill="url(#mountain2)"
        />
        <defs>
          <linearGradient id="mountain2" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#16162a" />
            <stop offset="0.5" stopColor="#322b4a" />
            <stop offset="1" stopColor="#16162a" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Силуэт человека */}
      <div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-60 h-60"
        style={{
          backgroundImage: 'url(/person-silhouette.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          zIndex: 5,
        }}
      >
        {/* Светящиеся элементы вокруг силуэта */}
        <div className="absolute top-10 left-10 w-3 h-3 rounded-full bg-amber-400 animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-20 right-12 w-2 h-2 rounded-full bg-cyan-400 animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 left-5 w-4 h-4 rounded-full bg-fuchsia-400 animate-ping" style={{ animationDuration: '5s' }} />
      </div>
      
      {/* Основной контент */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="animate-bounce-slow">
          <span className="animated-badge mb-6">
            Присоединяйтесь к ИИ сообществу
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold my-6 text-white tracking-tight" 
           style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0, 0, 0, 0.3)' }}>
          <span className="block">Сообщество, где автоматизация</span>
          <span className="block mt-2 bg-gradient-to-r from-amber-300 to-red-500 text-transparent bg-clip-text">
            превращается в прибыль
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8" 
           style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' }}>
          Это не курс. Это среда, где уже работают продвинутые специалисты:
          <br />создают агентов, передают им задачи и учатся у них.
        </p>
        
        <div className="styled-border bg-black/60 backdrop-blur-md p-6 mb-10 max-w-3xl mx-auto">
          <div className="text-left mb-6">
            <h3 className="text-xl font-semibold text-amber-300 mb-3">Здесь ты осваиваешь три ключевые формы автоматизации:</h3>
            <ul className="text-gray-300 space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-amber-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>процессы без кода (воркфлоу, CRM, рассылки, дашборды)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-amber-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>автоматизация на основе ИИ (агенты, генерация, анализ, поиск)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-amber-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>автоматизация с поддержкой ИИ (человек управляет, ИИ помогает)</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-amber-300 mb-3 text-left">Внутри сообщества:</h3>
            <ul className="text-left text-gray-300 space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-amber-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>готовые AI-агенты, которые строят процессы, отслеживают ошибки и считают экономику</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-amber-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>база по созданию собственных агентов и кастомных систем</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-amber-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>передовые инструменты: n8n, MCP, вайбкодинг, мультимодальные модели</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-amber-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>поддержка, живые разборы, архив решений, обмен практиками</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button className="gradient-button px-6 py-3 text-lg font-medium">
              Присоединиться к сообществу
            </button>
            <button className="gradient-button px-6 py-3 text-lg font-medium">
              Узнать больше
            </button>
          </div>
        </div>
        
        {/* Дополнительный текст */}
        <p className="text-lg text-white mb-6">
          Это максимум AI-технологичности на русском языке.
        </p>
        
        {/* Секция цены */}
        <div className="mb-10">
          <p className="text-xl bg-gradient-to-r from-amber-300 to-red-400 text-transparent bg-clip-text font-bold">
            Стоимость участия — 5000 ₽ в месяц
          </p>
        </div>
      </div>
    </section>
  );
} 