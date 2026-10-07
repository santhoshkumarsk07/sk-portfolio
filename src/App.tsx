import React from 'react';
import { BackgroundGlow } from './components/BackgroundGlow';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-kanit overflow-x-clip selection:bg-[#B600A8] selection:text-white">
      {/* Background Interactive Glowing Effect */}
      <BackgroundGlow />

      {/* Main Wrapper Sections */}
      <main className="relative z-10 w-full overflow-x-clip">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
