import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { PORTFOLIO_DATA } from '../../data/portfolio';
import { Code, Lightbulb, Compass, Award, GraduationCap, MapPin } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 px-6 sm:px-12 bg-[#06070a] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 rounded-full radial-glow-cyan pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="01"
          title={PORTFOLIO_DATA.personal.aboutHeading}
          subtitle="Philosophy & Context"
        />

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual Portrait & Live Bio Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Visual Portrait Container */}
            <div className="relative group rounded-2xl p-1 bg-gradient-to-b from-white/10 via-white/5 to-transparent border border-white/10 overflow-hidden shadow-2xl">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-[#0c1322] via-[#090d16] to-[#05070c] flex flex-col items-center justify-center p-8 text-center">
                {/* Subtle mesh background inside portrait */}
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Monogram / Profile Graphic */}
                <div className="relative z-10 w-28 h-28 rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-cyan-400/30 flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform duration-500">
                  <span className="font-display text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-200">
                    RM
                  </span>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-cyan-400 border-2 border-[#090d16] flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {PORTFOLIO_DATA.personal.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-4">
                    CSE • 2024–2028
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-xs text-slate-400 border border-white/5">
                    <MapPin size={12} className="text-cyan-400" />
                    <span>Sri Krishna College of Engg &amp; Tech</span>
                  </div>
                </div>

                {/* Replace image hint for future customization */}
                <div className="absolute bottom-3 text-[10px] font-mono text-slate-600 opacity-60">
                  [Profile Picture Ready Canvas]
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl glass-card border-white/5">
                <div className="flex items-center gap-2 text-cyan-400 mb-1">
                  <GraduationCap size={16} />
                  <span className="text-xs font-mono">DEGREE</span>
                </div>
                <div className="text-sm font-semibold text-white">B.E. CSE</div>
                <div className="text-xs text-slate-400">Class of 2028</div>
              </div>

              <div className="p-4 rounded-xl glass-card border-white/5">
                <div className="flex items-center gap-2 text-indigo-400 mb-1">
                  <Award size={16} />
                  <span className="text-xs font-mono">FOCUS</span>
                </div>
                <div className="text-sm font-semibold text-white">Full-Stack &amp; Logic</div>
                <div className="text-xs text-slate-400">Java • React • Spring</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Principles (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Primary Bio Statement */}
            <div className="space-y-5">
              <p className="text-xl sm:text-2xl text-slate-200 font-light leading-relaxed">
                {PORTFOLIO_DATA.personal.aboutBio}
              </p>
              <p className="text-base text-slate-400 leading-relaxed font-sans">
                Whether architecting database schemas for procurement logistics, integrating real-time communication APIs, or building resilient full-stack systems, I view software as a medium to construct durable, intuitive solutions.
              </p>
            </div>

            {/* Core Approaches & Pillars */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Core Philosophy &amp; Mindset
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PORTFOLIO_DATA.aboutHighlights.map((highlight, index) => {
                  const icons = [Code, Lightbulb, Compass];
                  const IconComponent = icons[index % icons.length];
                  return (
                    <motion.div
                      key={highlight.title}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="p-5 rounded-xl glass-card border-white/5 flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                          <IconComponent size={16} />
                        </div>
                        <h5 className="font-display text-base font-semibold text-white mb-1.5">
                          {highlight.title}
                        </h5>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Research & Engineering Interests */}
            <div className="p-6 rounded-2xl glass-panel border border-white/5">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-300">
                  Current Areas of Technical Curiosity
                </h4>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {[
                  'Enterprise Java Architectures',
                  'High-Performance React Frameworks',
                  'Asynchronous Event Pipelines',
                  'Computer Vision & Assistive Tech',
                  'Database Normalization & Indexing',
                  'Automated Test Verification'
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-white/5 text-slate-300 border border-white/5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

