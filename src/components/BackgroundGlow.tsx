import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const BackgroundGlow: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Cursor Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 pointer-events-none"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
        style={{
          background: 'radial-gradient(circle, rgba(182,0,168,0.35) 0%, rgba(118,33,176,0.2) 50%, transparent 80%)',
        }}
      />

      {/* Ambient Top Left Purple Orb */}
      <div 
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[160px] opacity-25 animate-pulse-slow pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(118,33,176,0.5) 0%, rgba(182,0,168,0.25) 50%, transparent 80%)',
        }}
      />

      {/* Ambient Top Right Cyan/Blue Orb */}
      <div 
        className="absolute top-1/4 -right-40 w-[700px] h-[700px] rounded-full blur-[180px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,180,216,0.4) 0%, rgba(118,33,176,0.2) 50%, transparent 80%)',
        }}
      />

      {/* Ambient Center Glow */}
      <div 
        className="absolute top-2/3 left-1/3 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[200px] opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(190,76,0,0.3) 0%, rgba(182,0,168,0.2) 50%, transparent 80%)',
        }}
      />
    </div>
  );
};
