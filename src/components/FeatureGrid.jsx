import { motion } from 'framer-motion';
import { Activity, Brain, Lock, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Realtime Insights',
    desc: 'Track patterns and trends to keep your digital life in a healthy rhythm.',
  },
  {
    icon: Brain,
    title: 'AI Guidance',
    desc: 'Personalized nudges and recommendations that adapt to you and your team.',
  },
  {
    icon: Lock,
    title: 'Privacy-first',
    desc: 'Transparent, secure, and compliant by design across every mode.',
  },
  {
    icon: Sparkles,
    title: 'Delightful UX',
    desc: 'Sleek visuals, subtle motion, and accessible interactions you’ll love.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Designed to keep you in flow</h2>
          <p className="mt-3 text-slate-600">Everything you need to stay focused, balanced, and informed.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-slate-900 text-white grid place-items-center shadow-md">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
