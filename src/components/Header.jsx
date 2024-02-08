import React from 'react';
import './styles/Header.scss';
import logo from '../img/myPos-logo.png';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="MyPos Logo" className="logo-img"/>
      </div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item"><a href="#">Home</a></li>
          <li className="nav-item"><a href="#">About</a></li>
          <li className="nav-item"><a href="#">Services</a></li>
          <li className="nav-item"><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
