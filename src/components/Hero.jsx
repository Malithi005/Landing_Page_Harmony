import React from 'react';

const Hero = () => {
    return (
        <>
            <style>{`
        .hero {
          position: relative;
          background: linear-gradient(135deg, #375FFF 0%, #5C7EFF 100%);
          color: #ecf0f1;
          min-height: 550px;
          display: flex;
          align-items: center;
          clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
          padding-bottom: 80px;
        }

        .hero .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero-content {
          padding-top: 50px;
          max-width: 800px;
          text-align: left;
        }

        .hero h1 {
          font-size: 3.8rem;
          margin-bottom: 20px;
          font-weight: 700;
          line-height: 1.2;
        }

        .hero p {
          font-size: 1.4rem;
          opacity: 0.95;
          max-width: 650px;
          margin-bottom: 40px;
          font-weight: 400;
        }

        .cta-button {
          padding: 16px 40px;
          border-radius: 8px;
          font-size: 1.15rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .primary-btn {
          background: white;
          color: #375FFF;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }

        .primary-btn:hover {
          background: #e0e0e0;
          transform: translateY(-3px);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
        }

        .primary-btn:active {
          transform: translateY(0);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 992px) {
          .hero h1 {
            font-size: 3rem;
          }

          .hero-content {
            text-align: center;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }

          .hero p {
            font-size: 1.1rem;
          }

          .hero-content {
            padding-top: 30px;
          }
        }

        @media (max-width: 480px) {
          .hero {
            clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
            padding-bottom: 50px;
            min-height: 450px;
          }

          .hero h1 {
            font-size: 2rem;
            margin-bottom: 15px;
          }

          .hero p {
            font-size: 1rem;
            margin-bottom: 30px;
          }

          .cta-button {
            padding: 12px 25px;
            font-size: 1rem;
          }
        }
      `}</style>

            <section className="hero" data-aos="fade-up">
                <div className="container hero-content">
                    <h1>A Music Experience that Understands Your **Emotions**</h1>
                    <p>
                        Harmony uses real‑time facial emotion and posture detection to recommend the perfect song from Spotify —
                        automatically and intelligently.
                    </p>
                    <button className="cta-button primary-btn">
                        Try Harmony Now <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </section>
        </>
    );
};

export default Hero;
