import React from 'react';
import { FadeIn } from './FadeIn';

const services = [
  {
    number: '01',
    name: 'Machine Learning & AI',
    description:
      'Creation of predictive ML models, demand forecasting, and real-time industrial data analytics tailored to optimize cost, productivity, and operational workflows.',
  },
  {
    number: '02',
    name: 'GenAI & RAG Architecture',
    description:
      'Engineering context-grounded Retrieval-Augmented Generation (RAG) pipelines using LLMs, FAISS vector search, Hugging Face transformers, and interactive Streamlit frontends.',
  },
  {
    number: '03',
    name: 'Computer Vision & Video AI',
    description:
      'Real-time object detection and CCTV video frame preprocessing using YOLOv8 & OpenCV, paired with automated SMS/Webhook emergency alert pipelines.',
  },
  {
    number: '04',
    name: 'Full-Stack Web Development',
    description:
      'Building scalable Employee Management Portals, RESTful APIs, OAuth 2.0 authentication, role-based access control, and GCP deployments using TypeScript.',
  },
  {
    number: '05',
    name: 'Data Preprocessing & Analytics',
    description:
      'Transforming complex raw datasets into clear visual stories through Python, SQL, Pandas, EDA, feature engineering, and high-impact dashboard visualizations.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="font-black uppercase text-center text-[#0C0C0C] tracking-tight leading-none text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
            Services
          </h2>
        </FadeIn>

        {/* Vertical List of Services */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <FadeIn key={service.number} delay={index * 0.1} y={30}>
              <div className="flex flex-col md:flex-row md:items-center justify-between py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 transition-all duration-300 hover:px-4 hover:bg-[#0C0C0C]/[0.02] rounded-xl">
                {/* Left: Huge Number */}
                <div className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] leading-none min-w-[140px] md:min-w-[200px] mb-4 md:mb-0">
                  {service.number}
                </div>

                {/* Right: Stacked Name & Description */}
                <div className="flex flex-col gap-2 flex-grow">
                  <h3 className="font-medium uppercase text-[#0C0C0C] text-[clamp(1rem,2.2vw,2.1rem)] tracking-tight">
                    {service.name}
                  </h3>
                  <p className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
