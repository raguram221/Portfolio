import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { PORTFOLIO_DATA } from '../../data/portfolio';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#040508] py-12 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-lg font-display font-bold tracking-wider text-white">
              {PORTFOLIO_DATA.personal.name}
            </span>
          </div>
          <p className="text-xs text-slate-500 max-w-sm">
            Crafted with passion for cinematic web engineering, modern aesthetics, and performance.
          </p>
        </div>

        {/* Center credits & status */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <span>Engineered with React, WebGL &amp; Motion</span>
        </div>

        {/* Right socials & scroll top */}
        <div className="flex items-center gap-4">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/5 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/30 text-xs font-mono transition-all"
            aria-label="Back to top"
          >
            <span>TOP</span>
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>

      {/* Copyright row */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/[0.03] flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-600 font-mono">
        <div>
          &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.
        </div>
        <div className="mt-2 sm:mt-0 flex items-center gap-1">
          <span>Sri Krishna College of Engineering &amp; Technology</span>
        </div>
      </div>
    </footer>
  );
}

