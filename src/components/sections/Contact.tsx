import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { PORTFOLIO_DATA } from '../../data/portfolio';
import { Mail, Send, Copy, Check, MessageSquare, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Functional mailto fallback without fake simulated backend
    const subjectEncoded = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const bodyEncoded = encodeURIComponent(
      `Hi Raguram,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 px-6 sm:px-12 bg-[#05070a] overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute bottom-0 left-1/3 w-[30rem] h-[30rem] rounded-full radial-glow-cyan pointer-events-none opacity-20" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="06"
          title="Have an Idea? Let's Build Something."
          subtitle="Get In Touch"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Reach & Social Links (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Let's start a conversation.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                I'm always interested in exploring new ideas, collaborating on meaningful projects and connecting with people who enjoy building technology.
              </p>
            </div>

            {/* Email Contact Card with Copy Action */}
            <div className="p-5 rounded-2xl glass-card border border-white/10 space-y-3">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
                Direct Email Channel
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="text-base sm:text-lg font-mono font-medium text-white hover:text-cyan-300 transition-colors truncate"
                >
                  {PORTFOLIO_DATA.personal.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex-shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
              {copied && (
                <p className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  ✓ Email copied to clipboard!
                </p>
              )}
            </div>

            {/* Professional Profiles */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
                Professional Networks
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl glass-card border border-white/5 hover:border-cyan-500/30 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 text-cyan-400">
                      <LinkedinIcon size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-cyan-300">LinkedIn</div>
                      <div className="text-[11px] font-mono text-slate-500">Connect with me</div>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-slate-500 group-hover:text-cyan-300 transition-colors" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl glass-card border border-white/5 hover:border-cyan-500/30 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 text-slate-300">
                      <GithubIcon size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-cyan-300">GitHub</div>
                      <div className="text-[11px] font-mono text-slate-500">View code repositories</div>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-slate-500 group-hover:text-cyan-300 transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Dispatch Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-2xl glass-panel border border-white/10 space-y-6 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                  <MessageSquare size={14} /> Send a Dispatch
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  Direct Mailto Transport
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-2 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-2 uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-2 uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Collaboration Opportunity / Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-2 uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your inquiry or technical project..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 text-sm transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-[11px] font-mono text-slate-500 order-2 sm:order-1 text-center sm:text-left">
                  Transfers directly to your default email client.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-black hover:bg-slate-200 text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/15 order-1 sm:order-2"
                >
                  <span>Transmit Message</span>
                  <Send size={14} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

