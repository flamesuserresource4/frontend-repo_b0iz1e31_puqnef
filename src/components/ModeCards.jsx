import { motion } from 'framer-motion';
import { Shield, Users, Building2 } from 'lucide-react';

const modes = [
  {
    key: 'youth',
    title: 'Youth Mode',
    description: 'Healthy screen time habits, gamified guidance, and guardian insights designed for younger audiences.',
    icon: Shield,
    href: 'https://enterprise-vamverse.vercel.app/',
    gradient: 'from-fuchsia-500 via-pink-500 to-rose-500',
  },
  {
    key: 'adult',
    title: 'Adult Mode',
    description: 'Deep focus tools, burnout prevention, and personal analytics to craft balanced digital days.',
    icon: Users,
    href: 'https://adultt-vamverse.vercel.app/',
    gradient: 'from-amber-500 via-orange-500 to-red-500',
  },
  {
    key: 'enterprise',
    title: 'Enterprise Mode',
    description: 'Organization-wide insights, policy orchestration, and privacy-first analytics for modern teams.',
    icon: Building2,
    href: 'https://youth-vamverse.vercel.app/',
    gradient: 'from-sky-500 via-blue-600 to-indigo-600',
  },
];

function ModeCard({ title, description, Icon, href, gradient }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative overflow-hidden rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-shadow"
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${gradient} mix-blend-multiply`} />
      <div className="relative z-10">
        <div className="h-12 w-12 rounded-xl bg-slate-900/90 text-white grid place-items-center shadow-lg">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{description}</p>
        <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-900">
          Go to {title}
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10m0-10h10v10" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
}

export default function ModeCards() {
  return (
    <section id="modes" className="relative py-16 md:py-24 bg-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.08),transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Choose your mode</h2>
          <p className="mt-2 text-slate-600">Start with a tailored experience crafted for your context.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modes.map((m) => (
            <ModeCard key={m.key} title={m.title} description={m.description} Icon={m.icon} href={m.href} gradient={m.gradient} />
          ))}
        </div>
      </div>
    </section>
  );
}
