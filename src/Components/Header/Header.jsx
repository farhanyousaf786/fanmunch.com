import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <Link to="/" className="logo-link">
            <div className="logo">Fanmunch</div>
          </Link>
        </div>
        
        <nav className={`navigation ${isMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>HOME</Link>
          <Link to="/avenues" className="nav-link" onClick={closeMenu}>OUR AVENUES</Link>
          <Link to="/goal" className="nav-link" onClick={closeMenu}>OUR GOAL</Link>
          <Link to="/alliances" className="nav-link" onClick={closeMenu}>STRATEGIC ALLIANCE</Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>ABOUT US</Link>
          <Link to="/contact" className="nav-link" onClick={closeMenu}>CONTACT US</Link>
        </nav>
        
        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
