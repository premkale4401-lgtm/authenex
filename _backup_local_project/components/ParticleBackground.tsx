
import React, { useEffect, useRef } from 'react';

/**
 * ParticleBackground Component
 * Renders an automated, high-performance neural network animation on a full-screen canvas.
 * This version is optimized for low CPU/GPU overhead and requires no user interaction.
 */
export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false }); // Optimization: disable alpha for the 2D context background
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // --- CONFIGURATION ---
    const PARTICLE_COUNT = 80;       // Balanced for performance and visual density
    const CONNECTION_DIST = 180;     // Max distance for a line to appear
    const SPEED_MULTIPLIER = 0.3;    // Slow, elegant movement
    const COLOR_PRIMARY = '56, 189, 248'; // Sky-400 (Authenex Brand)
    const BG_COLOR = '#020617';      // Deep slate/black background

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        // Random velocity for autonomous movement
        this.vx = (Math.random() - 0.5) * SPEED_MULTIPLIER;
        this.vy = (Math.random() - 0.5) * SPEED_MULTIPLIER;
        this.size = Math.random() * 1.2 + 0.8;
      }

      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Infinite loop: particles warp to opposite side when hitting boundaries
        // This provides a more continuous flow than bouncing
        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(${COLOR_PRIMARY}, 0.6)`;
        context.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      // Background clear
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw lines first (back layer)
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;
          const maxDistSq = CONNECTION_DIST * CONNECTION_DIST;

          if (distSq < maxDistSq) {
            const distance = Math.sqrt(distSq);
            // Dynamic opacity based on proximity
            const opacity = (1 - distance / CONNECTION_DIST) * 0.25;
            
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${COLOR_PRIMARY}, ${opacity})`;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles (front layer)
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height);
        particles[i].draw(ctx);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Auto-scale on resize
    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);
    
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: '#020617' }}
      aria-hidden="true"
    />
  );
};
