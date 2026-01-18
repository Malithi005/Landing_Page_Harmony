import React from 'react';

const HowItWorks = () => {
    const steps = [
        {
            icon: 'fas fa-video',
            title: '1. Detect',
            description: 'Webcam captures expression.',
            delay: 100
        },
        {
            icon: 'fas fa-hand-sparkles',
            title: '2. Analyze',
            description: 'AI determines your mood.',
            delay: 200
        },
        {
            icon: 'fas fa-music',
            title: '3. Recommend or Generate music',
            description: '',
            delay: 300
        }
    ];

    return (
        <>
            <style>{`
        .section {
          padding: 100px 0;
          text-align: center;
        }

        .how-it-works-section {
          background: #ffffff;
          padding-bottom: 120px;
        }

        .how-it-works-section .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .dark-text {
          color: #2c3e50;
        }

        .how-it-works-section h2 {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .subtitle {
          max-width: 800px;
          margin: 15px auto 60px;
          font-size: 1.2rem;
          color: #555;
        }

        .step-process {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: nowrap;
          margin-top: 40px;
        }

        .step-item {
          width: 260px;
          padding: 25px;
          background: #eaf3ff;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }

        .step-item:hover {
          transform: translateY(-5px);
        }

        .step-item i {
          font-size: 3.5rem;
          color: #375FFF;
          margin-bottom: 15px;
        }

        .step-item h4 {
          font-size: 1.3rem;
          color: #2c3e50;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .step-item p {
          font-weight: 400;
          color: #2c3e50;
        }

        .step-arrow {
          color: #9EC0FF;
          font-size: 2rem;
          margin: 0 30px;
        }

        @media (max-width: 992px) {
          .step-arrow {
            display: none;
          }

          .step-item {
            margin-bottom: 25px;
          }

          .step-process {
            flex-direction: column;
          }
        }

        @media (max-width: 768px) {
          .section {
            padding: 60px 0;
          }

          .how-it-works-section h2 {
            font-size: 2.2rem;
          }
        }
      `}</style>

            <section id="how" className="section how-it-works-section" data-aos="fade-up">
                <div className="container">
                    <h2 className="dark-text">How It Works</h2>
                    <p className="subtitle">
                        Harmony captures your facial expressions and posture through your webcam, identifies your emotional state, and
                        then selects music through the Spotify API that best fits your mood.
                    </p>
                    <div className="step-process">
                        {steps.map((step, index) => (
                            <React.Fragment key={index}>
                                <div
                                    className="step-item"
                                    data-aos="fade-right"
                                    data-aos-delay={step.delay}
                                >
                                    <i className={step.icon}></i>
                                    <h4>{step.title}</h4>
                                    <p>{step.description}</p>
                                </div>
                                {index < steps.length - 1 && (
                                    <i className="fas fa-arrow-right step-arrow"></i>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HowItWorks;
