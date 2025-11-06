import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 grid place-items-center shadow-lg shadow-blue-600/20">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-slate-800 text-lg">vamverse</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#modes" className="hover:text-slate-900 transition-colors">Modes</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>
        <a href="#modes" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium shadow hover:shadow-md transition-shadow">Get Started</a>
      </div>
    </header>
  );
}
