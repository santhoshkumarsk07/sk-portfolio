import React, { useEffect, useRef, useState } from 'react';

import photo1 from '../assets/photos/photo1.jpg';
import photo2 from '../assets/photos/photo2.jpg';
import photo3 from '../assets/photos/photo3.jpg';
import photo4 from '../assets/photos/photo4.jpg';
import photo5 from '../assets/photos/photo5.jpg';
import photo6 from '../assets/photos/photo6.jpg';
import photo7 from '../assets/photos/photo7.jpg';
import photo8 from '../assets/photos/photo8.jpg';

const uploadedPhotos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
];

// Split into 2 rows and duplicate for continuous seamless marquee scrolling
const imagesRow1 = [
  uploadedPhotos[0],
  uploadedPhotos[1],
  uploadedPhotos[2],
  uploadedPhotos[3],
];

const imagesRow2 = [
  uploadedPhotos[4],
  uploadedPhotos[5],
  uploadedPhotos[6],
  uploadedPhotos[7],
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(scrollOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Multiply lists for rich seamless horizontal scrolling
  const tripledRow1 = [...imagesRow1, ...imagesRow1, ...imagesRow1, ...imagesRow1];
  const tripledRow2 = [...imagesRow2, ...imagesRow2, ...imagesRow2, ...imagesRow2];

  return (
    <div
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden relative z-10"
    >
      <div className="flex flex-col gap-5">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-5 transition-transform duration-75 ease-out"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {tripledRow1.map((src, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 w-[300px] h-[200px] sm:w-[380px] sm:h-[240px] md:w-[440px] md:h-[280px] rounded-3xl overflow-hidden border-2 border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.8)] hover:border-[#B600A8]/80 hover:shadow-[0_0_35px_rgba(182,0,168,0.4)] group relative transition-all duration-500 bg-[#141518]"
            >
              {/* Backlight Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#B600A8]/30 via-transparent to-[#00B4D8]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

              {/* Enhanced Photo with Color Grading Filters */}
              <img
                src={src}
                alt={`Santhoshkumar showcase ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter contrast-[1.14] brightness-[1.06] saturate-[1.18]"
              />

              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20 opacity-40 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-5 transition-transform duration-75 ease-out"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {tripledRow2.map((src, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 w-[300px] h-[200px] sm:w-[380px] sm:h-[240px] md:w-[440px] md:h-[280px] rounded-3xl overflow-hidden border-2 border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.8)] hover:border-[#B600A8]/80 hover:shadow-[0_0_35px_rgba(182,0,168,0.4)] group relative transition-all duration-500 bg-[#141518]"
            >
              {/* Backlight Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#B600A8]/30 via-transparent to-[#00B4D8]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

              {/* Enhanced Photo with Color Grading Filters */}
              <img
                src={src}
                alt={`Santhoshkumar showcase ${index + 5}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter contrast-[1.14] brightness-[1.06] saturate-[1.18]"
              />

              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20 opacity-40 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
