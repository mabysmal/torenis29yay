'use client';
import React, { useEffect, useRef } from 'react';

interface ConfettiPiece {
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  amplitude: number;
  angle: number;
}

const ConfettiBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const colors = ['#84906c', '#f8a792', '#f7e4c3', '#e6e6e6'];
    const confetti: ConfettiPiece[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createConfetti = () => {
      // Aumentado de 100 a 1000 confetis
      for (let i = 0; i < 1000; i++) {
        if (!canvas) return;

        confetti.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 7 + 3, // Reducido el tamaño para mayor densidad
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: Math.random() * 3 + 1,
          amplitude: Math.random() * 2,
          angle: Math.random() * Math.PI * 2
        });
      }
    };

    const animateConfetti = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = confetti.length - 1; i >= 0; i--) {
        const piece = confetti[i];
        
        piece.y += piece.speed;
        piece.x += Math.sin(piece.angle) * piece.amplitude;

        if (piece.y > canvas.height) {
          confetti.splice(i, 1);
          // Añadir un nuevo confeti cuando uno sale de la pantalla
          if (!canvas) return;
          confetti.push({
            x: Math.random() * canvas.width,
            y: 0,
            size: Math.random() * 7 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 3 + 1,
            amplitude: Math.random() * 2,
            angle: Math.random() * Math.PI * 2
          });
        }

        ctx.beginPath();
        ctx.fillStyle = piece.color;
        ctx.arc(piece.x, piece.y, piece.size, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animateConfetti);
    };

    resizeCanvas();
    createConfetti();
    animateConfetti();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: 'none',
        width: '100%',
        height: '100%'
      }} 
    />
  );
};

export default ConfettiBackground;