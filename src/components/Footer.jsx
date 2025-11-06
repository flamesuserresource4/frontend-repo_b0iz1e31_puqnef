export default function Footer() {
  return (
    <footer id="contact" className="relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© 2025 vamverse. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a className="text-slate-600 hover:text-slate-900" href="#">Privacy</a>
          <a className="text-slate-600 hover:text-slate-900" href="#">Terms</a>
          <a className="text-slate-600 hover:text-slate-900" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
