import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';
import { Terminal, Cpu, Database, Cloud, Sparkles } from 'lucide-react';

const projects = [
  {
    number: '01',
    name: 'Multimodal AI Emergency Detection System',
    category: 'YOLOv8 • OpenCV • Flask • Twilio',
    link: 'https://github.com/santhoshkumarsk07',
    icon: Cpu,
    description:
      'Developed a real-time multimodal AI system using OpenCV for CCTV video capture, frame processing, and preprocessing to detect emergency events including fire, weapons, accidents, and falls, achieving 85% mAP@0.5.',
    highlights: [
      '85% mAP@0.5 detection accuracy across diverse CCTV lighting conditions.',
      'Automated real-time SMS alert pipeline built with Twilio.',
      'High-throughput inference microservice deployed via Flask REST API.',
    ],
    tags: ['YOLOv8', 'OpenCV', 'Python', 'Flask', 'Twilio API', 'Real-Time Vision'],
  },
  {
    number: '02',
    name: 'RAG-Based Document Q&A Chatbot',
    category: 'Gemini • FAISS • Hugging Face • Streamlit',
    link: 'https://github.com/santhoshkumarsk07',
    icon: Sparkles,
    description:
      'Developed a Retrieval-Augmented Generation (RAG) pipeline for PDF, DOCX, and TXT documents with context-grounded LLM responses, eliminating hallucinations and ensuring accurate source attribution.',
    highlights: [
      'Implemented recursive document chunking & all-MiniLM-L6-v2 embeddings.',
      'Ultra-fast vector similarity search using FAISS.',
      'Gemini API integration with Streamlit interface featuring exact source citations.',
    ],
    tags: ['RAG Architecture', 'Gemini API', 'FAISS Vector Search', 'Hugging Face', 'Streamlit', 'NLP'],
  },
  {
    number: '03',
    name: 'Employee Management Portal - Real-Time Application',
    category: 'TypeScript • Apps Script • REST APIs • GCP',
    link: 'https://github.com/santhoshkumarsk07',
    icon: Cloud,
    description:
      'Built complete employee records, attendance, and payroll workflows with OAuth 2.0 authentication, role-based access control (RBAC), REST APIs, and automated CI/CD deployment on Google Cloud Platform.',
    highlights: [
      'Scalable TypeScript backend with Google Apps Script serverless functions.',
      'OAuth 2.0 authentication & granular Role-Based Access Control (RBAC).',
      'Automated enterprise workflows for employee data management on GCP.',
    ],
    tags: ['TypeScript', 'Google Apps Script', 'GCP', 'OAuth 2.0', 'REST APIs', 'MySQL'],
  },
];

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 pb-32 px-4 sm:px-6 md:px-10 z-30 overflow-hidden"
    >
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
            Projects
          </h2>
        </FadeIn>
      </div>

      {/* Sticky Stacking Project Cards Container */}
      <div className="max-w-5xl mx-auto flex flex-col gap-24 relative">
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - 1 - index) * 0.03;
          return (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={projects.length}
              progress={scrollYProgress}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
  totalCards: number;
  progress: any;
  targetScale: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  progress,
  targetScale,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, [index / totalCards, 1], [1, targetScale]);
  const Icon = project.icon;

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 h-auto flex items-center justify-center mb-12"
      style={{
        top: `calc(6rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA]/30 bg-[#121316]/95 backdrop-blur-2xl p-6 sm:p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.95)] flex flex-col justify-between gap-8 transition-colors hover:border-[#B600A8]/60"
      >
        {/* Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D7E2EA]/15 pb-6">
          <div className="flex items-baseline gap-4 flex-wrap">
            <span className="font-black text-[#B600A8] text-[clamp(2.5rem,6vw,5rem)] leading-none">
              {project.number}
            </span>
            <div>
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-light block mb-1">
                {project.category}
              </span>
              <h3 className="font-semibold uppercase text-white text-xl sm:text-2xl md:text-3xl tracking-tight">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton label="Live Project" href={project.link} />
        </div>

        {/* Project Body Description */}
        <div className="flex flex-col gap-6">
          <p className="text-[#D7E2EA]/90 text-base sm:text-lg md:text-xl leading-relaxed font-light">
            {project.description}
          </p>

          {/* Highlights bullet points */}
          <div className="bg-[#0C0C0C]/80 rounded-3xl p-5 sm:p-6 border border-white/10 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#B600A8] font-bold flex items-center gap-2">
              <Icon className="w-4 h-4 text-[#B600A8]" /> Key Engineering Highlights
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-[#D7E2EA]/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B600A8] mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-[#B600A8]/15 text-[#D7E2EA] border border-[#B600A8]/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
