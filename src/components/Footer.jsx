import React from 'react';
import '../styles/Footer.scss';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Mahesh Abeykoon | All rights reserved.</p>
    </footer>
  );
}

export default Footer;
