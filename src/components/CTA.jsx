import React from 'react';

const CTASection = () => {
    return (
        <>
            <style>{`
        .section {
          padding: 100px 0;
          text-align: center;
        }

        .cta-section {
          background: linear-gradient(135deg, #5C7EFF 0%, #9EC0FF 100%);
          color: white;
          padding: 80px 0;
          border-radius: 15px;
          margin: 0 20px 80px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .cta-section .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .cta-section h2 {
          color: white;
          font-size: 2.8rem;
          margin-bottom: 20px;
          font-weight: 700;
          line-height: 1.2;
        }

        .cta-section p {
          font-size: 1.3rem;
          max-width: 700px;
          margin: 0 auto 40px;
          opacity: 0.9;
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

        .secondary-btn {
          background: #375FFF;
          color: white;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }

        .secondary-btn:hover {
          background: #5C7EFF;
          transform: translateY(-3px);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
        }

        .secondary-btn:active {
          transform: translateY(0);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 992px) {
          .cta-section {
            margin: 0 15px 60px;
          }
        }

        @media (max-width: 768px) {
          .cta-section h2 {
            font-size: 2.2rem;
          }

          .cta-section p {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .cta-section {
            margin: 0 10px 40px;
            padding: 60px 0;
          }

          .cta-section h2 {
            font-size: 1.8rem;
          }

          .cta-button {
            padding: 12px 25px;
            font-size: 1rem;
          }
        }
      `}</style>

            <section id="cta" className="section cta-section" data-aos="fade-up">
                <div className="container">
                    <h2>Experience Emotion‑Driven Music</h2>
                    <p>Your mood. Your music. Automatically. Start your free trial today.</p>
                    <button className="cta-button secondary-btn">Launch Harmony Today</button>
                </div>
            </section>
        </>
    );
};

export default CTASection;
