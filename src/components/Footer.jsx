import React from 'react';

const Footer = () => {
    const members = [
        {
            name: 'R.D.S.Dinal Ranbandara',
            email: '@iit.ac.lk',
            linkedin: 'https://linkedin.com/in/'
        },
        {
            name: 'D.T.D.Weerasinghe',
            email: '@iit.ac.lk',
            linkedin: 'https://linkedin.com/in/'
        },
        {
            name: 'G.Pooja Bachini Fernando',
            email: '@iit.ac.lk',
            linkedin: 'https://linkedin.com/in/'
        },
        {
            name: 'R.A.M.N.Ranaweera',
            email: 'malithi.20242105@iit.ac.lk',
            linkedin: 'www.linkedin.com/in/malithi-nadunika-0a940a353'
        },
        {
            name: 'S.Lavan',
            email: 'lavan.20241883@gmail.com',
            linkedin: 'www.linkedin.com/in/'
        },
        {
            name: 'Mesandu Gunawardhana',
            email: '@iit.ac.lk',
            linkedin: 'www.linkedin.com/in/'
        }
    ];

    return (
        <>
            <style>{`
        .footer {
          background: #2c3e50;
          color: #adbbc4;
          padding: 50px 0;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          text-align: left;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          gap: 30px;
        }

        .footer-col {
          padding: 10px 20px;
          min-width: 150px;
        }

        .footer-col.copyright-info {
          flex-basis: 20%;
        }

        .footer-col.social-links-col {
          flex-basis: 15%;
        }

        .footer-col.contact-emails {
          flex-basis: 20%;
        }

        .footer-col.members-section {
          flex-basis: 100%;
        }

        .footer-col h4 {
          color: white;
          font-size: 1.1rem;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .footer-col p {
          margin: 5px 0;
          font-size: 0.95rem;
        }

        .footer-col a {
          color: #adbbc4;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-col a:hover {
          color: #9EC0FF;
          text-decoration: underline;
        }

        .social-links {
          display: flex;
          gap: 15px;
          margin-top: 10px;
        }

        .social-links a {
          color: white;
          font-size: 1.5rem;
        }

        .social-links a:hover {
          color: #5C7EFF;
          transform: translateY(-2px);
        }

        .contact-emails i {
          color: #9EC0FF;
          margin-right: 5px;
        }

        .members-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 15px;
        }

        .member-card {
          background: rgba(255, 255, 255, 0.05);
          padding: 15px;
          border-radius: 8px;
          transition: background 0.3s ease;
        }

        .member-card:hover {
          background: rgba(255, 255, 255, 0.08);
        }

        .member-card strong {
          color: white;
          display: block;
          margin-bottom: 8px;
          font-size: 1rem;
        }

        .member-info {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .member-linkedin-icon {
          font-size: 1.1rem;
          color: #0077b5;
          text-decoration: none;
          transition: color 0.3s;
        }

        .member-linkedin-icon:hover {
          color: #9EC0FF;
        }

        @media (max-width: 992px) {
          .footer-col.copyright-info,
          .footer-col.social-links-col,
          .footer-col.contact-emails {
            flex-basis: 45%;
          }

          .members-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
          }

          .footer-col {
            flex-basis: 100%;
            padding: 20px 0;
          }

          .footer-col.copyright-info,
          .footer-col.social-links-col,
          .footer-col.contact-emails {
            flex-basis: 100%;
          }

          .social-links {
            justify-content: center;
          }

          .members-grid {
            grid-template-columns: 1fr;
          }

          .member-info {
            justify-content: center;
          }
        }
      `}</style>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-col copyright-info">
                        <p>© 2025 Harmony</p>
                        <p>Emotion-Driven Music Recommendation</p>
                    </div>

                    <div className="footer-col social-links-col">
                        <h4>Follow Us</h4>
                        <div className="social-links">
                            <a href="https://instagram.com/yourharmony" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://linkedin.com/company/yourharmony" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-col contact-emails">
                        <h4>Contact & Support</h4>
                        <p>
                            <i className="fas fa-envelope"></i>
                            <a href="mailto:harmonylk25@gmail.com">harmonylk25@gmail.com</a>
                        </p>
                    </div>

                    <div className="footer-col members-section">
                        <h4>Project Members</h4>
                        <div className="members-grid">
                            {members.map((member, index) => (
                                <div key={index} className="member-card">
                                    <strong>{member.name}</strong>
                                    <div className="member-info">
                                        <a href={`mailto:${member.email}`}>{member.email}</a>
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${member.name}'s LinkedIn`}
                                            className="member-linkedin-icon"
                                        >
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
