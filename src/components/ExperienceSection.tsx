import React from 'react';
import { FadeIn } from './FadeIn';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Machine Learning Intern',
    company: 'Valeo',
    period: 'Mar 2025 – May 2025',
    type: 'Machine Learning / Data Analytics',
    points: [
      'Analyzed real-time industrial data to optimize CAD tool utilization across global engineering teams and developed ML models for usage optimization and demand forecasting.',
      'Used Python and SQL to deliver data-driven insights supporting cost reduction, productivity, and workflow efficiency.',
    ],
    tags: ['Python', 'SQL', 'Demand Forecasting', 'Data Analytics', 'CAD Optimization'],
  },
  {
    role: 'Web Development Intern',
    company: 'Epical Layouts',
    period: 'Jul 2025 – Aug 2025',
    type: 'Full-Stack Development',
    points: [
      'Developed an Employee Management Portal using TypeScript and Google Apps Script, implementing OAuth 2.0 authentication, role-based access control, and REST API integrations.',
      'Deployed the application on Google Cloud Platform (GCP) and integrated Google services to automate employee data management and streamline business workflows.',
    ],
    tags: ['TypeScript', 'Apps Script', 'OAuth 2.0', 'REST APIs', 'GCP', 'MySQL'],
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-5 sm:px-8 md:px-10 bg-[#0C0C0C] text-[#D7E2EA] relative z-20">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40} className="text-center mb-16">
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,120px)] leading-none tracking-tight">
            Experience
          </h2>
          <p className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm mt-4 font-light">
            Professional Internships & Engineering Impact
          </p>
        </FadeIn>

        <div className="flex flex-col gap-10">
          {experiences.map((exp, idx) => (
            <FadeIn key={exp.company} delay={idx * 0.15} y={30}>
              <div className="rounded-3xl border border-[#D7E2EA]/20 bg-[#141518]/80 backdrop-blur-xl p-6 sm:p-8 md:p-10 hover:border-[#B600A8]/50 transition-all duration-300 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#D7E2EA]/10 pb-6 mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#B600A8]/20 text-[#B600A8] border border-[#B600A8]/30 mb-2">
                      {exp.type}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white uppercase">
                      {exp.role} <span className="text-[#B600A8]">@ {exp.company}</span>
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-[#D7E2EA]/70 text-sm font-medium">
                    <Calendar className="w-4 h-4 text-[#B600A8]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-[#D7E2EA]/85 text-base sm:text-lg leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-[#B600A8] mt-2.5 flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-[#0C0C0C] text-[#D7E2EA]/70 border border-white/10"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
