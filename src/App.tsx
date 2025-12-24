import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Unified gradient background spanning entire page */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-purple-50/40 to-pink-50/30 dark:from-blue-950/15 dark:via-purple-950/20 dark:to-pink-950/15" />
      </div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}