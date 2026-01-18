import React from 'react';

const Features = () => {
    const features = [
        {
            icon: 'fas fa-face-laugh-squint',
            title: 'Emotion Detection',
            description: 'Your webcam reads your expressions and posture to understand how you feel in real time.',
            delay: 100
        },
        {
            icon: 'fab fa-spotify',
            title: 'Spotify Integration',
            description: 'Harmony connects with the Spotify API to instantly fetch songs that match your emotional state.',
            delay: 200
        },
        {
            icon: 'fas fa-brain',
            title: 'Smart Recommendations',
            description: 'Combining emotion data + user input, Harmony delivers hyper‑personalized music suggestions.',
            delay: 300
        },
        {
            icon: 'fas fa-sliders-h',
            title: 'Automatic & Manual Modes',
            description: 'Let Harmony track you every 30 seconds — or simply type what you feel and get suggestions.',
            delay: 400
        },
        {
            icon: 'fas fa-headphones',
            title: 'Music Generation',
            description: 'Generates music according to your current mood and emotion.',
            delay: 400
        }
    ];

    return (
        <>
            <style>{`
        .section {
          padding: 100px 0;
          text-align: center;
        }

        .features-section {
          padding-top: 50px;
          background: #f9fbfd;
        }

        .features-section .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .features-section h2 {
          font-size: 2.5rem;
          color: #375FFF;
          font-weight: 700;
          line-height: 1.2;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 50px;
          text-align: left;
        }

        .feature-card {
          background: #eaf3ff;
          padding: 35px;
          border-radius: 12px;
          border: 2px solid transparent;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.18);
          border-color: #375FFF;
        }

        .icon-lg {
          font-size: 3rem;
          color: #5C7EFF;
          margin-bottom: 20px;
          display: block;
        }

        .feature-card h3 {
          color: #2c3e50;
          font-size: 1.5rem;
          margin-bottom: 12px;
          font-weight: 700;
          line-height: 1.2;
        }

        .feature-card p {
          font-weight: 400;
          color: #2c3e50;
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
          }

          .section {
            padding: 60px 0;
          }

          .features-section h2 {
            font-size: 2.2rem;
          }
        }
      `}</style>

            <section id="features" className="section features-section" data-aos="fade-up">
                <div className="container">
                    <h2>Why Harmony?</h2>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="feature-card"
                                data-aos="zoom-in"
                                data-aos-delay={feature.delay}
                            >
                                <i className={`${feature.icon} icon-lg`}></i>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
