import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTASection from './components/CTA';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <>
      <style>{`
        /* Base Styles & Typography */
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background: #f9fbfd;
          color: #2c3e50;
          line-height: 1.6;
          overflow-x: hidden;
        }

        * {
          box-sizing: border-box;
        }

        h1,
        h2,
        h3 {
          font-weight: 700;
          line-height: 1.2;
        }

        p {
          font-weight: 400;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
      `}</style>

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
            <CTASection />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}