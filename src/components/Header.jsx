import React, { useState } from 'react';
import harmonyLogo from '../assets/harmony.png';

const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsMenuActive(false);

        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <style>{`
        header {
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          position: relative;
          margin-left: 20px;
          margin-right: 20px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 15px 20px;
        }

        .logo1 {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .logo-img {
          height: 50px;
          width: 50px;
          object-fit: contain;
        }

        header h2 {
          margin: 0;
          font-size: 1.8rem;
          color: black;
        }

        header nav {
          display: flex;
          align-items: center;
        }

        header nav a {
          margin-left: 30px;
          text-decoration: none;
          color: #2c3e50;
          font-weight: 600;
          transition: color 0.3s, transform 0.3s ease;
          position: relative;
        }

        header nav a:hover {
          color: #375FFF;
        }

        header nav a:not(.nav-cta)::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          display: block;
          margin-top: 5px;
          right: 0;
          background: #375FFF;
          transition: width 0.3s ease;
        }

        header nav a:not(.nav-cta)::hover::after {
          width: 100%;
          left: 0;
        }

        .nav-cta {
          background-color: #375FFF;
          color: white !important;
          padding: 10px 24px;
          border-radius: 50px;
          margin-left: 30px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(55, 95, 255, 0.2);
        }

        .nav-cta:hover {
          background-color: #5C7EFF;
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(55, 95, 255, 0.3);
        }

        .hamburger {
          display: none;
          font-size: 1.8rem;
          color: #2c3e50;
          cursor: pointer;
          z-index: 1001;
        }

        .head {
          display: flex;
          align-items: center;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: block;
          }

          header nav {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #ffffff;
            flex-direction: column;
            align-items: center;
            padding: 30px 0;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            opacity: 0;
            transform: translateY(-20px);
            pointer-events: none;
            transition: all 0.3s ease;
          }

          header nav.active {
            opacity: 1;
            transform: translateY(0);
            pointer-events: all;
          }

          header nav a {
            margin: 15px 0;
            font-size: 1.1rem;
          }

          .nav-cta {
            margin-left: 0;
            margin-top: 10px;
            width: 80%;
            text-align: center;
          }
        }
      `}</style>

            <header>
                <div className="header-content">
                    <div className="logo1">
                        <img src={harmonyLogo} alt="Harmony Logo" className="logo-img" />
                        <h2>Harmony</h2>
                    </div>
                    <div className="hamburger" onClick={toggleMenu}>
                        <i className={`fas ${isMenuActive ? 'fa-times' : 'fa-bars'}`}></i>
                    </div>
                    <nav className={`head ${isMenuActive ? 'active' : ''}`}>
                        <a href="#features" onClick={(e) => handleNavClick(e, '#features')}>
                            Features
                        </a>
                        <a href="#how" onClick={(e) => handleNavClick(e, '#how')}>
                            How It Works
                        </a>
                        <a href="#cta" className="nav-cta" onClick={(e) => handleNavClick(e, '#cta')}>
                            Get Started
                        </a>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
