import React from 'react';
import { FadeIn } from './FadeIn';

const skillCategories = [
  {
    category: 'Programming & Databases',
    skills: ['Python', 'TypeScript', 'SQL', 'MySQL', 'JavaScript', 'C', 'Java'],
  },
  {
    category: 'Machine Learning & AI',
    skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Keras', 'CNN', 'RNN', 'PyCaret', 'Optuna', 'Pandera'],
  },
  {
    category: 'GenAI & NLP',
    skills: ['LLMs', 'RAG Pipelines', 'Transformers', 'Hugging Face', 'FAISS', 'Prompt Engineering', 'LangChain'],
  },
  {
    category: 'Computer Vision',
    skills: ['OpenCV', 'YOLOv8', 'Object Detection', 'Video Preprocessing', 'Image Processing', 'Real-Time Inference'],
  },
  {
    category: 'Frameworks & Web',
    skills: ['React.js', 'REST APIs', 'Flask', 'Google Apps Script', 'Node.js', 'HTML5 / CSS3', 'Tailwind CSS'],
  },
  {
    category: 'DevOps, Tools & Design',
    skills: ['Docker', 'GitHub', 'Selenium', 'Google Cloud Platform (GCP)', 'PowerBI', 'Figma', 'Salesforce'],
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-5 sm:px-8 md:px-10 bg-[#0C0C0C] text-[#D7E2EA] relative z-20">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40} className="text-center mb-16">
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,120px)] leading-none tracking-tight">
            Technical Stack
          </h2>
          <p className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm mt-4 font-light">
            Technologies & Tools I Master
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <FadeIn key={cat.category} delay={idx * 0.1} y={30}>
              <div className="h-full rounded-3xl border border-[#D7E2EA]/20 bg-[#141518]/70 backdrop-blur-md p-6 hover:border-[#B600A8]/50 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <h3 className="font-semibold text-lg text-white uppercase tracking-wider mb-4 border-b border-[#D7E2EA]/10 pb-2">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#D7E2EA]/10 text-[#D7E2EA] border border-[#D7E2EA]/15 hover:bg-[#B600A8]/20 hover:border-[#B600A8]/40 transition-colors cursor-default"
                    >
                      {skill}
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
