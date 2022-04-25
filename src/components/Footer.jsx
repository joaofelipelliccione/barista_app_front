import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Footer.css';

function Footer({ typeOfFooter }) {
  return (
    <footer className={ typeOfFooter }>
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

Footer.propTypes = {
  typeOfFooter: PropTypes.string.isRequired,
};

export default Footer;
