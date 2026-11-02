import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectModal } from '../ui/ProjectModal';
import { PORTFOLIO_DATA, ProjectItem } from '../../data/portfolio';
import { ArrowUpRight, Sparkles, CheckCircle, Terminal } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative py-28 sm:py-36 px-6 sm:px-12 bg-[#06070a] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-[35rem] h-[35rem] rounded-full radial-glow-cyan pointer-events-none opacity-20 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="03"
          title="Things I've Built."
          subtitle="Featured Engineering Projects"
        />

        {/* Large Editorial Project Showcases (Alternating) */}
        <div className="space-y-24 sm:space-y-32">
          {PORTFOLIO_DATA.projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Visual Showcase Block (7 cols) */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? '' : 'lg:col-start-6'
                  }`}
                >
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="group relative cursor-pointer rounded-2xl overflow-hidden border border-white/10 glass-panel shadow-2xl transition-all duration-500 hover:border-cyan-500/40"
                  >
                    {/* Visual Stage Canvas / Simulation */}
                    <div
                      className="relative aspect-[16/10] w-full flex flex-col justify-between p-6 sm:p-8 overflow-hidden"
                      style={{ background: project.imagePlaceholder }}
                    >
                      {/* Grid Pattern */}
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

                      {/* Top Bar inside mockup */}
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-[11px] font-mono text-white/50 tracking-widest uppercase">
                          // ARCHITECTURE {project.id.toUpperCase()}
                        </span>
                      </div>

                      {/* Center Graphical Representation */}
                      <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center transform group-hover:scale-105 transition-transform duration-700 ease-out">
                        <div className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-xl mb-3">
                          <Terminal size={36} className="text-cyan-400" />
                        </div>
                        <h4 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                          {project.title.split('–')[0]}
                        </h4>
                        <p className="text-xs font-mono text-cyan-300 mt-1 max-w-sm">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Bottom status badge */}
                      <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono text-slate-300">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          Verified Architecture
                        </span>
                        <span className="inline-flex items-center gap-1 text-cyan-300 group-hover:translate-x-1 transition-transform">
                          Inspect Specs <ArrowUpRight size={14} />
                        </span>
                      </div>

                      {/* Hover Overlay Glow */}
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Content Block (5 cols) */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? '' : 'lg:col-start-1 lg:row-start-1'
                  }`}
                >
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
                      <Sparkles size={13} />
                      <span>Project // 0{index + 1}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-cyan-300/80">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Highlights checklist */}
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 pt-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-slate-200 text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 shadow-lg shadow-white/10"
                    >
                      <span>View Project</span>
                      <ArrowUpRight size={14} />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-full glass-panel hover:bg-white/10 text-white text-xs font-medium transition-colors flex items-center gap-2 border border-white/10"
                      >
                        <GithubIcon size={15} />
                        <span>Repository</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

