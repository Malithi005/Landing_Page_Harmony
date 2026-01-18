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
          margin: 0;
          font-weight: 700;
          line-height: 1.2;
        }

        p {
          margin: 0;
          font-weight: 400;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* App Layout Styles */
        .app-container {
          min-height: 100vh;
          position: relative;
          background-color: #f9fbfd;
        }

        .background-gradient {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 0;
          background: linear-gradient(to bottom, 
            rgba(239, 246, 255, 0.3), 
            rgba(250, 245, 255, 0.4), 
            rgba(253, 242, 248, 0.3)
          );
        }

        .content-wrapper {
          position: relative;
          z-index: 10;
        }
      `}</style>

      <div className="app-container">
        {/* Unified gradient background spanning entire page */}
        <div className="background-gradient" />

        <div className="content-wrapper">
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