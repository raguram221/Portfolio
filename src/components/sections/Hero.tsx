import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles, Terminal, Code2 } from 'lucide-react';
import { CloudShader } from '../ui/cloud-shader';
import { MagneticButton } from '../ui/MagneticButton';
import { PORTFOLIO_DATA } from '../../data/portfolio';

export function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const opacityText = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#05070c]"
    >
      {/* Signature Aceternity UI Cloud Shader Background */}
      <div className="absolute inset-0 w-full h-full">
        <CloudShader
          speed={0.8}
          count={5}
          cloudColor="#1e293b"
          skyTopColor="#05070c"
          skyBottomColor="#0e1726"
          className="w-full h-full opacity-70"
        />
        {/* Cinematic Vignette & Radial Atmospheric Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] via-transparent to-[#06070a]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Floating editorial grid decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Foreground Hero Content */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 py-32 flex flex-col items-center text-center"
      >
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel text-xs font-mono text-cyan-300 border border-cyan-500/20 mb-8 shadow-lg shadow-cyan-950/30"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-slate-300">Available for innovative projects &amp; collaborations</span>
        </motion.div>

        {/* Master Name with expressive typography */}
        <div className="relative mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <span className="text-xs sm:text-sm font-mono tracking-[0.35em] text-slate-400 uppercase mb-3 flex items-center gap-2">
              <Terminal size={14} className="text-cyan-400" /> Creative Technologist
            </span>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white leading-none">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-sm">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Professional Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 sm:gap-3 text-sm sm:text-lg md:text-xl font-mono text-cyan-400/90 mb-6 tracking-wide"
        >
          <span>Developer</span>
          <span className="text-slate-600">•</span>
          <span>Problem Solver</span>
          <span className="text-slate-600">•</span>
          <span>Technology Enthusiast</span>
        </motion.div>

        {/* Hero Introduction & Supporting Line */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed mb-10 font-sans"
        >
          <p className="font-medium text-white/90 mb-2">
            "{PORTFOLIO_DATA.personal.heroIntro}"
          </p>
          <p className="text-sm sm:text-base text-slate-400">
            {PORTFOLIO_DATA.personal.heroSubline}
          </p>
        </motion.div>

        {/* Interactive CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          <MagneticButton
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-sm text-black bg-white hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] flex items-center justify-center gap-2"
          >
            <Code2 size={16} />
            <span>Explore My Work</span>
          </MagneticButton>

          <MagneticButton
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-sm text-white glass-panel hover:bg-white/10 border-white/15 hover:border-cyan-400/50 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles size={16} className="text-cyan-400" />
            <span>Let's Connect</span>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}

