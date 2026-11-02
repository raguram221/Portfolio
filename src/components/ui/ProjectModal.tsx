import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';
import { ProjectItem } from '../../data/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto z-10 glass-panel rounded-2xl border border-white/10 shadow-2xl p-6 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="mb-6 pr-8">
            <span className="inline-block text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">
              Deep Dive Specification
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <div className="p-4 rounded-xl bg-surface-100/60 border border-white/5 mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
              <Cpu size={14} className="text-cyan-400" /> Executive Overview
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Architectural Features */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-400" /> Core Capabilities & Workflow
            </h4>
            <ul className="space-y-2.5">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology tags */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
              <Layers size={14} className="text-indigo-400" /> Verified Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 text-cyan-300 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-colors border border-white/10"
              >
                <GithubIcon size={16} />
                <span>View on GitHub</span>
                <ExternalLink size={14} className="text-slate-400" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg bg-surface-100 hover:bg-surface-50 text-slate-300 text-sm font-medium transition-colors border border-white/5 ml-auto"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

