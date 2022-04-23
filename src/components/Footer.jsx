import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <span>
        {'Developed by '}
        <a
          href="https://github.com/joaofelipelliccione"
          rel="noreferrer"
          target="_blank"
        >
          {' '}
          João Felipe Pelliccione
        </a>
      </span>
    </footer>
  );
}

export default Footer;
