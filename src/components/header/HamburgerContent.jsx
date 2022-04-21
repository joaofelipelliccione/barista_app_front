/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';

function HamburgerContent() {
  return (
    <div className="hambContentContainer">
      <div className="hambContentSubContainer1">
        <Link
          className="capsulesLinks"
          to="/capsules/original"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor">
            <path
              d="M26.996 24.438L24.964 8.183 19.123 5h-6.254L7.036 8.184l-2.03 16.233c-.26 1.55-1.937 1.582-2.008 1.583L3 27h26l.002-1c-.073-.001-1.788-.032-2.006-1.563zM7.964 8.816L13.124 6h5.745l5.167 2.816 1.969 15.754c.088.617.342 1.075.665 1.43H5.304c.326-.357.588-.817.692-1.438L7.964 8.816z"
              stroke="wheat"
              strokeWidth="0.9"
            />
            <path d="M22 8.972H10v1h12v-1z" stroke="wheat" strokeWidth="0.9" />
          </svg>
          <h3>Original</h3>
        </Link>
        <Link
          className="capsulesLinks"
          to="/capsules/vertuo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none">
            <path d="M0.960022 23.04H31.04" stroke="wheat" strokeMiterlimit="10" strokeLinejoin="bevel" />
            <path d="M27.84 23.0399V22.6559C27.84 21.7919 27.776 20.8959 27.616 20.0319C26.528 13.9839 22.208 9.47192 16 9.47192C10.176 9.47192 6.11203 13.4399 4.67203 18.9439C4.32003 20.2239 4.19203 21.5679 4.16003 22.9119V23.0399" stroke="wheat" strokeMiterlimit="10" strokeLinejoin="bevel" />
            <path d="M16 12.48V23.04" stroke="wheat" strokeMiterlimit="10" strokeLinejoin="bevel" />
            <path d="M8.35199 23.2959C8.35199 23.2959 8.73599 15.5199 10.016 14.9119" stroke="wheat" strokeMiterlimit="10" strokeLinejoin="bevel" />
            <path d="M23.744 23.2959C23.744 23.2959 23.36 15.5199 22.08 14.9119" stroke="wheat" strokeMiterlimit="10" strokeLinejoin="bevel" />
          </svg>
          <h3>Vertuo</h3>
        </Link>
      </div>
    </div>
  );
}

export default HamburgerContent;
