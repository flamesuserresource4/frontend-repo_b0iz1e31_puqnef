import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-screen overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/80 via-white/20 to-white/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-slate-900 text-white shadow-md shadow-slate-900/10">
            Digital Well‑being • Productivity • AI
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            vamverse
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-600 leading-relaxed">
            Monitor, nurture, and elevate digital well‑being and productivity across ages and organizations. Tailored modes for youth, adults, and enterprises with actionable insights and delightful UX.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#modes" className="pointer-events-auto inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 text-white font-medium shadow-lg shadow-slate-900/20 hover:shadow-xl transition-all">
              Explore Modes
            </a>
            <a href="#about" className="pointer-events-auto inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-medium border border-slate-200 hover:border-slate-300 shadow-sm">
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
