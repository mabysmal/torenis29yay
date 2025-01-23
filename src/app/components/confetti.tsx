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
    // Verificación de nulidad al inicio
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
      // Solo crear confeti si el canvas existe
      if (!canvas) return;

      confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 10 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 3 + 1,
        amplitude: Math.random() * 2,
        angle: Math.random() * Math.PI * 2
      });
    };

    const animateConfetti = () => {
      // Verificaciones de seguridad
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = confetti.length - 1; i >= 0; i--) {
        const piece = confetti[i];
        
        piece.y += piece.speed;
        piece.x += Math.sin(piece.angle) * piece.amplitude;

        if (piece.y > canvas.height) {
          confetti.splice(i, 1);
          createConfetti();
        }

        ctx.beginPath();
        ctx.fillStyle = piece.color;
        ctx.arc(piece.x, piece.y, piece.size, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animateConfetti);
    };

    // Configuración inicial
    resizeCanvas();
    createConfetti();
    animateConfetti();

    // Listener de redimensionamiento
    window.addEventListener('resize', resizeCanvas);

    // Limpieza
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []); // Array de dependencias vacío para ejecutar solo una vez

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