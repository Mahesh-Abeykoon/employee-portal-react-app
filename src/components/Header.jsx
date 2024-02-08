import React from 'react';
import './styles/Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="logo">myPos Solutions</div>
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
