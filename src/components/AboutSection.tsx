import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

export const AboutSection: React.FC = () => {
  const bioText =
    "I am a B.Tech Artificial Intelligence and Data Science student at Chennai Institute of Technology (2023 - 2027) with an 8.8 CGPA. I specialize in building real-time Machine Learning models, RAG LLM pipelines, Computer Vision systems, and modern Web Applications. Driven by crafting striking, high-performance digital experiences. Let's build something incredible together!";

  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] z-10 overflow-hidden">
      {/* Decorative 3D Images in Corners */}
      
      {/* Top-Left Moon Icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Decorative 3D Moon"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto drop-shadow-2xl animate-spin-slow opacity-80"
        />
      </FadeIn>

      {/* Bottom-Left 3D Object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="Decorative 3D Object"
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto drop-shadow-2xl opacity-80"
        />
      </FadeIn>

      {/* Top-Right Lego Icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Decorative 3D Lego"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto drop-shadow-2xl opacity-80"
        />
      </FadeIn>

      {/* Bottom-Right 3D Group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="Decorative 3D Group"
          className="w-[130px] sm:w-[170px] md:w-[220px] h-auto drop-shadow-2xl opacity-80"
        />
      </FadeIn>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-10 sm:gap-14 md:gap-16">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>

        {/* Character-by-character scroll animated text */}
        <div className="w-full max-w-[560px]">
          <AnimatedText
            text={bioText}
            className="font-medium text-[#D7E2EA] leading-relaxed text-[clamp(1rem,2vw,1.35rem)] text-center"
          />
        </div>

        {/* Contact Button */}
        <div className="pt-6 sm:pt-10 md:pt-12">
          <FadeIn delay={0.4} y={20}>
            <ContactButton label="Contact Me" href="#contact" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
