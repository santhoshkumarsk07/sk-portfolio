import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0C0C0C] border-t border-[#D7E2EA]/10 py-10 px-6 md:px-10 relative z-20 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-left">
          <span className="hero-heading font-black text-2xl uppercase tracking-tighter block">
            Santhoshkumar A
          </span>
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50">
            B.Tech AI & Data Science • Chennai Institute of Technology
          </span>
        </div>

        <div className="text-xs text-[#D7E2EA]/50 uppercase tracking-wider">
          © {new Date().getFullYear()} Santhoshkumar A. Crafted with Passion & High Precision.
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/santhoshkumarsk07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA]/70 hover:text-white transition-colors uppercase text-xs tracking-widest"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/santhoshkumarsk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA]/70 hover:text-white transition-colors uppercase text-xs tracking-widest"
          >
            LinkedIn
          </a>
          <a
            href="mailto:stormysk07@gmail.com"
            className="text-[#D7E2EA]/70 hover:text-white transition-colors uppercase text-xs tracking-widest"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
