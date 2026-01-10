import React, { useEffect, useRef } from 'react';
import { LAB_INFO } from '../constants';
import { ArrowDown } from 'lucide-react';

interface Photon {
  x: number;
  y: number;       // Current Y position
  targetY: number; // The Y position of the lane it's aiming for
  speed: number;
  color: string;
  size: number;
  trail: {x: number, y: number}[];
  switching: boolean; // Is it currently changing lanes?
}

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 64; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let photons: Photon[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Configuration
    const laneHeight = 40; // Distance between tracks
    const colors = ['#00A3FF', '#4facfe', '#FFD700', '#FFFFFF']; // Blue, Light Blue, Gold, White
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    const createPhoton = (startAtBeginning: boolean = false): Photon => {
      const laneIndex = Math.floor(Math.random() * (height / laneHeight));
      const laneY = laneIndex * laneHeight + (laneHeight / 2); // Center of the lane
      
      // Speed variation for parallax depth feel
      const speed = Math.random() * 3 + 2; 

      return {
        x: startAtBeginning ? -100 : Math.random() * width,
        y: laneY,
        targetY: laneY,
        speed: speed,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 1.5 + 1,
        trail: [],
        switching: false
      };
    };

    // Initialize photons
    const particleCount = Math.floor(width / 20); // Density based on screen width
    for (let i = 0; i < particleCount; i++) {
      photons.push(createPhoton(false));
    }

    const draw = () => {
      // Create a fade effect for trails instead of clearing completely
      // This leaves a ghost image of previous frames
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'; 
      ctx.fillRect(0, 0, width, height);
      // However, since we have a background image, we actually want to clear 
      // but manually manage trails for better performance and transparency control
      ctx.clearRect(0, 0, width, height);

      photons.forEach((p, index) => {
        // 1. Movement Logic
        p.x += p.speed;

        // Lane Switching Logic
        if (!p.switching) {
          // Small chance to switch lane
          if (Math.random() < 0.005) { // 0.5% chance per frame
            const direction = Math.random() > 0.5 ? 1 : -1;
            const nextLaneY = p.targetY + (direction * laneHeight);
            
            // Boundary check
            if (nextLaneY > 0 && nextLaneY < height) {
              p.targetY = nextLaneY;
              p.switching = true;
            }
          }
        } else {
          // Smoothly interpolate Y towards targetY
          const dy = p.targetY - p.y;
          p.y += dy * 0.1; // Ease factor

          // Snap if close enough
          if (Math.abs(dy) < 0.5) {
            p.y = p.targetY;
            p.switching = false;
          }
        }

        // Reset if off screen
        if (p.x > width + 100) {
          photons[index] = createPhoton(true);
          return;
        }

        // 2. Trail Logic
        p.trail.push({ x: p.x, y: p.y });
        // Trail length depends on speed (faster = longer trail)
        const maxTrail = 15 * p.speed * 0.5; 
        if (p.trail.length > maxTrail) {
          p.trail.shift();
        }

        // 3. Drawing
        if (p.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(p.trail[0].x, p.trail[0].y);
          
          // Draw curves for smoother look
          for (let i = 1; i < p.trail.length - 1; i++) {
             const xc = (p.trail[i].x + p.trail[i+1].x) / 2;
             const yc = (p.trail[i].y + p.trail[i+1].y) / 2;
             ctx.quadraticCurveTo(p.trail[i].x, p.trail[i].y, xc, yc);
          }
          ctx.lineTo(p.x, p.y);

          // Gradient stroke for the trail (fading out at the tail)
          const gradient = ctx.createLinearGradient(
            p.trail[0].x, p.trail[0].y, 
            p.x, p.y
          );
          gradient.addColorStop(0, `rgba(0,0,0,0)`); // Transparent tail
          gradient.addColorStop(1, p.color); // Solid head color

          ctx.strokeStyle = gradient;
          ctx.lineWidth = p.size;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          // Add a glow effect
          ctx.shadowBlur = 10;
          ctx.shadowColor = p.color;
          ctx.stroke();
          
          // Reset shadow for performance
          ctx.shadowBlur = 0;
        }

        // Draw Head (The Photon) - Bright white core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
        
        // Outer Glow for Head
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.5;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-black">
      {/* 1. Background Image (Static Texture) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2070&auto=format&fit=crop" 
          alt="Integrated Chip Background" 
          className="w-full h-full object-cover scale-105"
        />
      </div>

      {/* 2. Gradient Overlay for readability and depth */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>

      {/* 3. Canvas Layer (The Flowing Light Streams) */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none mix-blend-screen"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wide text-gray-200 mb-6 uppercase">
          {LAB_INFO.university}
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight drop-shadow-2xl">
          Designing the Future of <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 animate-pulse">
            Integrated Photonics
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-200 leading-relaxed text-balance drop-shadow-lg">
          {LAB_INFO.description}
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollTo('research')}
            className="px-8 py-3 rounded-full bg-white text-apple-dark font-medium hover:bg-gray-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Our Research
          </button>
          <button 
            onClick={() => scrollTo('contact')}
            className="px-8 py-3 rounded-full bg-transparent text-white border border-white/40 font-medium hover:bg-white/10 transition-colors active:scale-95 backdrop-blur-sm"
          >
            Join Us
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollTo('news')}
          className="text-white/60 hover:text-white transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;