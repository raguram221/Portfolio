import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { PORTFOLIO_DATA } from '../../data/portfolio';
import { Code, Layout, Server, Database, Wrench, Sparkles } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Programming: <Code size={18} className="text-cyan-400" />,
  'Frontend Development': <Layout size={18} className="text-indigo-400" />,
  'Backend Development': <Server size={18} className="text-emerald-400" />,
  Database: <Database size={18} className="text-amber-400" />,
  'Tools & Testing': <Wrench size={18} className="text-purple-400" />,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCategories =
    activeCategory === 'all'
      ? PORTFOLIO_DATA.skillCategories
      : PORTFOLIO_DATA.skillCategories.filter(
          (cat) => cat.category.toLowerCase().includes(activeCategory.toLowerCase())
        );

  return (
    <section id="skills" className="relative py-28 sm:py-36 px-6 sm:px-12 bg-[#05070a] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[30rem] h-[30rem] rounded-full radial-glow-indigo pointer-events-none opacity-30" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="02"
          title="Tools I Work With."
          subtitle="Technical Competencies"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
              activeCategory === 'all'
                ? 'bg-white text-black font-semibold shadow-md'
                : 'glass-panel text-slate-400 hover:text-white border-white/5'
            }`}
          >
            All Disciplines
          </button>
          {PORTFOLIO_DATA.skillCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all flex items-center gap-2 ${
                activeCategory === cat.category
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                  : 'glass-panel text-slate-400 hover:text-white border-white/5'
              }`}
            >
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Grouped Category Grids */}
        <div className="space-y-12">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    {CATEGORY_ICONS[cat.category] || <Sparkles size={18} className="text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {cat.description}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  {cat.skills.length} competencies
                </span>
              </div>

              {/* Skills Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -5, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="p-5 rounded-xl glass-card border border-white/5 hover:border-cyan-500/30 group relative overflow-hidden"
                  >
                    {/* Top Accent Gradient on Hover */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-display text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="inline-block text-[11px] font-mono text-cyan-400/80 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/30 mt-1">
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors" />
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                      {skill.highlight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

