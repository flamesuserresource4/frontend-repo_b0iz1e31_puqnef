import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ModeCards from './components/ModeCards';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ModeCards />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
