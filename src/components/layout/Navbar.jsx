import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__logo">Acerite</div>
        <div className="navbar__menu">
          <Link to="/" className="navbar__link navbar__link--active">Home</Link>
          <Link to="/features" className="navbar__link">Features</Link>
          <Link to="/pricing" className="navbar__link">Pricing</Link>
          <Link to="/contact" className="navbar__link">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;