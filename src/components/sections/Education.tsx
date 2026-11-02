import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { PORTFOLIO_DATA } from '../../data/portfolio';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="relative py-28 sm:py-36 px-6 sm:px-12 bg-[#06070a] overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full radial-glow-cyan pointer-events-none opacity-20" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="05"
          title="Learning Never Stops."
          subtitle="Academic Foundation & Verified Certifications"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Formal Academic Foundation (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400">
              <GraduationCap size={16} />
              <span>Higher Education</span>
            </div>

            <div className="p-8 rounded-2xl glass-card border border-white/10 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-800/40 mb-3">
                  <Calendar size={12} />
                  Batch: {PORTFOLIO_DATA.education.batch}
                </span>
                <h3 className="font-display text-2xl font-bold text-white mb-1">
                  {PORTFOLIO_DATA.education.degree}
                </h3>
                <h4 className="text-base text-cyan-300/90 font-medium mb-3">
                  {PORTFOLIO_DATA.education.institution}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <MapPin size={12} className="text-cyan-400" />
                  <span>{PORTFOLIO_DATA.education.location}</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-sans pt-4 border-t border-white/10">
                {PORTFOLIO_DATA.education.description}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Core Engineering Curriculum
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Data Structures & Algorithms',
                    'Object-Oriented Programming (Java)',
                    'Database Management Systems',
                    'Operating Systems',
                    'Computer Networks',
                    'Software Engineering'
                  ].map((subject) => (
                    <span
                      key={subject}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-white/5 text-slate-300 border border-white/5"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Certifications Timeline / Badges (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400">
                <Award size={16} />
                <span>Industry &amp; Academic Certifications</span>
              </div>
              <span className="text-xs font-mono text-slate-500">
                {PORTFOLIO_DATA.certifications.length} verified credentials
              </span>
            </div>

            <div className="space-y-4">
              {PORTFOLIO_DATA.certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-xl glass-card border border-white/5 hover:border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-400/30 transition-colors">
                      <BookOpen size={16} />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-mono text-slate-400 mt-0.5">
                        Issuing Authority: <span className="text-slate-200">{cert.issuer}</span>
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-2.5">
                        {cert.skillsCovered.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400 border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="self-start sm:self-center">
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-800/40">
                      <CheckCircle size={12} />
                      Verified
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

