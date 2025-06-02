import React, { useEffect } from 'react';

const AnimatedBackground = ({ theme }) => {
  useEffect(() => {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const shapes = [];
    const shapeCount = theme === 'dark' ? 150 : 80;
    
    // Create shapes
    for (let i = 0; i < shapeCount; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (theme === 'dark' ? 3 : 20) + (theme === 'dark' ? 1 : 10),
        speedX: (Math.random() - 0.5) * (theme === 'dark' ? 0.5 : 1),
        speedY: (Math.random() - 0.5) * (theme === 'dark' ? 0.5 : 1),
        opacity: Math.random() * (theme === 'dark' ? 0.5 : 0.3) + (theme === 'dark' ? 0.2 : 0.1),
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        type: theme === 'dark' ? 'circle' : ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)]
      });
    }
    
    function drawShape(shape) {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      
      if (shape.type === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
        ctx.fillStyle = theme === 'dark' 
          ? `rgba(139, 69, 19, ${shape.opacity})` 
          : `rgba(99, 102, 241, ${shape.opacity})`;
        ctx.fill();
      } else if (shape.type === 'square') {
        ctx.fillStyle = `rgba(236, 72, 153, ${shape.opacity})`;
        ctx.fillRect(-shape.size/2, -shape.size/2, shape.size, shape.size);
      } else if (shape.type === 'triangle') {
        ctx.beginPath();
        ctx.moveTo(0, -shape.size/2);
        ctx.lineTo(-shape.size/2, shape.size/2);
        ctx.lineTo(shape.size/2, shape.size/2);
        ctx.closePath();
        ctx.fillStyle = `rgba(34, 197, 94, ${shape.opacity})`;
        ctx.fill();
      }
      
      ctx.restore();
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      shapes.forEach(shape => {
        // Update position
        shape.x += shape.speedX;
        shape.y += shape.speedY;
        shape.rotation += shape.rotationSpeed;
        
        // Wrap around edges
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
        if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size;
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
        
        drawShape(shape);
        
        // Draw connections only in dark mode
        if (theme === 'dark') {
          shapes.forEach(otherShape => {
            const dx = shape.x - otherShape.x;
            const dy = shape.y - otherShape.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(shape.x, shape.y);
              ctx.lineTo(otherShape.x, otherShape.y);
              ctx.strokeStyle = `rgba(139, 69, 19, ${0.1 * (1 - distance / 100)})`;
              ctx.stroke();
            }
          });
        }
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [theme]);
  
  return <canvas id="bg-canvas" className="fixed inset-0 pointer-events-none" />;
};

export default AnimatedBackground;