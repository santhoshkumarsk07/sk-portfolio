import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const targetRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');

  return (
    <p ref={targetRef} className={`relative flex flex-wrap justify-center ${className}`}>
      {characters.map((char, i) => {
        const start = i / characters.length;
        const end = start + 1 / characters.length;
        return (
          <Character key={i} char={char} range={[start, end]} progress={scrollYProgress} />
        );
      })}
    </p>
  );
};

interface CharacterProps {
  char: string;
  range: [number, number];
  progress: any;
}

const Character: React.FC<CharacterProps> = ({ char, range, progress }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-20 select-none">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0 text-[#D7E2EA]">
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};
