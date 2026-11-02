import { motion } from 'framer-motion';

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  number,
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-16 md:mb-20 ${isCenter ? 'text-center mx-auto max-w-2xl' : ''} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center gap-3 text-xs md:text-sm font-mono tracking-widest uppercase text-cyan-400 mb-3 ${
          isCenter ? 'justify-center' : ''
        }`}
      >
        <span className="inline-block w-8 h-[1px] bg-cyan-400/40" />
        <span>// {number}</span>
        <span className="text-slate-400 font-sans tracking-normal">| {subtitle || 'Portfolio Showcase'}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
      >
        {title}
      </motion.h2>
    </div>
  );
}

