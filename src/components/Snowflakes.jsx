import React, { useEffect } from 'react';

const Snowflakes = () => {
  useEffect(() => {
    const canvas = document.getElementById('snow-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const snowflakes = [];
    const snowflakeCount = 100;
    
    for (let i = 0; i < snowflakeCount; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
      });
    }
    
    function animateSnow() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      snowflakes.forEach(flake => {
        flake.y += flake.speed;
        
        if (flake.y > canvas.height) {
          flake.y = -10;
          flake.x = Math.random() * canvas.width;
        }
        
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.fill();
      });
      
      requestAnimationFrame(animateSnow);
    }
    
    animateSnow();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return <canvas id="snow-canvas" className="fixed inset-0 pointer-events-none z-10" />;
};

export default Snowflakes;