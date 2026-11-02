import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { PORTFOLIO_DATA } from '../../data/portfolio';
import { ShieldCheck, Flag, Users, CheckCircle2 } from 'lucide-react';

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28 sm:py-36 px-6 sm:px-12 bg-[#05070a] overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 -translate-y-1/2 rounded-full radial-glow-indigo pointer-events-none opacity-20" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="04"
          title="Milestones & Recognition."
          subtitle="Hackathons & Technical Engagements"
        />

        {/* Editorial Timeline Grid */}
        <div className="space-y-12">
          {PORTFOLIO_DATA.achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 sm:p-10 rounded-2xl glass-card border border-white/5 hover:border-cyan-500/30 overflow-hidden"
            >
              {/* Top Meta Line */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase block">
                      {item.domain}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-start sm:self-auto">
                  {item.team && (
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10 flex items-center gap-1.5">
                      <Users size={12} className="text-cyan-400" />
                      Team: {item.team}
                    </span>
                  )}
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-800/40 flex items-center gap-1.5">
                    <Flag size={12} />
                    {item.year}
                  </span>
                </div>
              </div>

              {/* Role & Objective */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4 space-y-3">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
                    My Core Role
                  </span>
                  <div className="text-base font-semibold text-white">
                    {item.role}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specific Contributions */}
                <div className="md:col-span-8 space-y-3 bg-surface-100/40 p-5 rounded-xl border border-white/5">
                  <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest block mb-2">
                    Key Contributions &amp; Research Responsibilities
                  </span>
                  <ul className="space-y-2.5">
                    {item.contributions.map((con, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

