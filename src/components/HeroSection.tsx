import React from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';

export const HeroSection: React.FC = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <section className="relative h-screen flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] z-10 px-6 md:px-10">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full pt-6 md:pt-8 z-30">
        <nav className="flex items-center justify-between w-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading: SANTHOSH with 'kumar' small at the bottom-right (under 'sh') */}
      <div className="relative z-20 overflow-hidden w-full text-center mt-4 sm:mt-2 md:-mt-3 flex justify-center">
        <FadeIn delay={0.15} y={40}>
          <div className="relative inline-block">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[12vw] sm:text-[13.5vw] md:text-[15vw] lg:text-[16.5vw]">
              santhosh
            </h1>
            <span className="absolute right-2 sm:right-4 -bottom-3 sm:-bottom-4 md:-bottom-6 text-[2.4vw] sm:text-[2.8vw] md:text-[3.2vw] font-light tracking-[0.25em] uppercase text-[#BBCCD7] opacity-90">
              kumar
            </span>
          </div>
        </FadeIn>
      </div>

      {/* Centered Absolute Hero Portrait in Circle with User's Uploaded Yellow Image */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[390px] md:h-[390px] lg:w-[450px] lg:h-[450px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30} className="w-full h-full flex justify-center items-center">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full h-full"
          >
            <div className="relative w-full h-full group cursor-pointer">
              {/* Dynamic pulsing gradient aura behind the circular frame */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#B600A8] via-[#7621B0] to-[#FFD700] blur-2xl opacity-65 group-hover:opacity-95 transition-opacity duration-500 animate-pulse-slow" />
              
              {/* Circular photo container */}
              <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-white/40 ring-4 ring-[#B600A8]/30 bg-[#0C0C0C] shadow-[0_0_80px_rgba(182,0,168,0.5)] flex items-center justify-center">
                <img
                  src="/santhosh_yellow_profile.png"
                  alt="Santhoshkumar A Portrait"
                  className="w-full h-full object-cover object-[center_60%] scale-110 group-hover:scale-115 transition-all duration-700 filter contrast-[1.12] brightness-[1.06] saturate-[1.15] drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-20 flex justify-between items-end pb-7 sm:pb-8 md:pb-10 w-full">
        {/* Left Subtext */}
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
            an ai & ml engineer driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        {/* Right Contact Button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton label="Contact Me" href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
};
