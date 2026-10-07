import React from 'react';
import { FadeIn } from './FadeIn';
import { Award, Trophy, Users, GraduationCap } from 'lucide-react';

const achievements = [
  {
    title: 'Winner, Epical Layouts Hackathon (Jul 2025)',
    description: 'Developed a highly scalable, real-time Employee Management Portal with GCP deployment.',
    icon: Trophy,
  },
  {
    title: 'Smart India Hackathon Participant (Sep 2025)',
    description: 'Collaborated with multidisciplinary engineering teams on high-impact AI/Data Science problem statements.',
    icon: Award,
  },
];

const certifications = [
  'AWS Cloud Practitioner',
  'Salesforce Agentforce Specialist',
  'NPTEL Introduction to IoT',
  'Cisco Programming Essentials in Python',
  'Cisco Introduction to Modern AI',
  'Coursera Foundations of UX Design',
];

const leadership = [
  {
    role: 'Ex-Secretary',
    org: 'Immerse Club',
    desc: 'Managed club operations, led technical projects, and coordinated student activities.',
  },
  {
    role: 'Lead Organizer',
    org: 'TALOS Technical Symposium',
    desc: 'Led technical sessions, hackathon event planning, speaker sessions, and team execution.',
  },
  {
    role: 'Lead Organizer',
    org: 'Takshashila Cultural Festival',
    desc: 'Coordinated logistics, program scheduling, sponsor outreach, and large-scale student engagement.',
  },
];

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-5 sm:px-8 md:px-10 bg-[#0C0C0C] text-[#D7E2EA] relative z-20">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Achievements & Awards */}
        <div>
          <FadeIn delay={0} y={40} className="text-center mb-12">
            <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,120px)] leading-none tracking-tight">
              Honors & Certs
            </h2>
            <p className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm mt-4 font-light">
              Hackathon Wins, Industry Certifications & Leadership
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={idx * 0.15} y={30}>
                  <div className="rounded-3xl border border-[#B600A8]/30 bg-gradient-to-br from-[#18011F] via-[#141518] to-[#0C0C0C] p-6 sm:p-8 flex items-start gap-4 hover:border-[#B600A8] transition-all duration-300 shadow-xl">
                    <div className="p-3.5 rounded-2xl bg-[#B600A8]/20 text-[#B600A8] border border-[#B600A8]/30">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white uppercase mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#D7E2EA]/75 leading-relaxed text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Certifications Badge Grid */}
        <FadeIn delay={0.2} y={30}>
          <div className="rounded-3xl border border-[#D7E2EA]/20 bg-[#141518]/70 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white uppercase mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-[#B600A8]" /> Verified Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0C0C0C] border border-[#D7E2EA]/10 hover:border-[#B600A8]/50 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[#B600A8]" />
                  <span className="text-sm font-medium text-[#D7E2EA]">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Leadership & Volunteering */}
        <div>
          <FadeIn delay={0.1} y={30} className="mb-8">
            <h3 className="text-2xl font-bold uppercase tracking-wider text-white flex items-center gap-3">
              <Users className="w-6 h-6 text-[#B600A8]" /> Leadership & Co-curricular
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((item, idx) => (
              <FadeIn key={item.org} delay={idx * 0.15} y={30}>
                <div className="rounded-3xl border border-[#D7E2EA]/15 bg-[#141518]/60 p-6 flex flex-col justify-between h-full hover:border-[#B600A8]/40 transition-colors">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#B600A8] block mb-1">
                      {item.role}
                    </span>
                    <h4 className="text-lg font-semibold text-white mb-3">{item.org}</h4>
                    <p className="text-sm text-[#D7E2EA]/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
