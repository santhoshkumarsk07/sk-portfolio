import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-5 sm:px-8 md:px-10 bg-[#0C0C0C] text-[#D7E2EA] relative z-20">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40} className="text-center mb-16">
          <h2 className="hero-heading font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
            Contact
          </h2>
          <p className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm sm:text-base mt-4 font-light max-w-xl mx-auto">
            Have a project in mind or interested in collaboration? Let's talk!
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Left Info Column */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <FadeIn delay={0.1} y={30}>
              <div className="rounded-3xl border border-[#D7E2EA]/20 bg-[#141518]/80 backdrop-blur-xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl">
                <h3 className="text-xl font-bold uppercase text-white tracking-wider border-b border-[#D7E2EA]/10 pb-4">
                  Get In Touch
                </h3>

                <a
                  href="mailto:stormysk07@gmail.com"
                  className="flex items-center gap-4 group p-3 rounded-2xl bg-[#0C0C0C] border border-[#D7E2EA]/10 hover:border-[#B600A8]/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-[#B600A8]/20 text-[#B600A8] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 block">Email Me</span>
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#B600A8] transition-colors">
                      stormysk07@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/santhosh-kumar-805a99374/?isSelfProfile=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-3 rounded-2xl bg-[#0C0C0C] border border-[#D7E2EA]/10 hover:border-[#B600A8]/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-[#0077B5]/20 text-[#0077B5] group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 block">LinkedIn</span>
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#0077B5] transition-colors">
                      santhoshkumarsk
                    </span>
                  </div>
                </a>

                <a
                  href="https://github.com/santhoshkumarsk07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-3 rounded-2xl bg-[#0C0C0C] border border-[#D7E2EA]/10 hover:border-[#B600A8]/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-[#333]/30 text-white group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 block">GitHub</span>
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#B600A8] transition-colors">
                      santhoshkumarsk07
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-2xl bg-[#0C0C0C] border border-[#D7E2EA]/10">
                  <div className="p-3 rounded-xl bg-[#BE4C00]/20 text-[#BE4C00]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 block">Location</span>
                    <span className="text-sm sm:text-base font-semibold text-white">
                      Chennai, Tamil Nadu, India
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Form Column */}
          <div className="md:col-span-7">
            <FadeIn delay={0.2} y={30}>
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-[#D7E2EA]/20 bg-[#141518]/80 backdrop-blur-xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl"
              >
                <h3 className="text-xl font-bold uppercase text-white tracking-wider border-b border-[#D7E2EA]/10 pb-4">
                  Send a Message
                </h3>

                {submitted ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center gap-4 text-emerald-400">
                    <CheckCircle2 className="w-16 h-16 animate-bounce" />
                    <h4 className="text-2xl font-bold text-white uppercase">Message Sent!</h4>
                    <p className="text-sm text-[#D7E2EA]/80 max-w-sm">
                      Thank you for reaching out! Santhosh will respond to your message shortly.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-widest text-[#D7E2EA]/70 font-semibold">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-2xl bg-[#0C0C0C] border border-[#D7E2EA]/20 px-4 py-3.5 text-white placeholder:text-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-widest text-[#D7E2EA]/70 font-semibold">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-2xl bg-[#0C0C0C] border border-[#D7E2EA]/20 px-4 py-3.5 text-white placeholder:text-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-widest text-[#D7E2EA]/70 font-semibold">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell me about your project or inquiry..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-2xl bg-[#0C0C0C] border border-[#D7E2EA]/20 px-4 py-3.5 text-white placeholder:text-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <ContactButton label="Send Message" className="w-full" />
                    </div>
                  </>
                )}
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
