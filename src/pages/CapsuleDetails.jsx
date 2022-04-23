import React from 'react';
// import PropTypes from 'prop-types';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import '../styles/capsuleDetails/CapsuleDetails.css';

function CapsuleDetails() {
  return (
    <div className="capsuleDetailsPage">
      <Header />
      <main className="capsuleDetailsMain">
        Oi
      </main>
      <Footer />
    </div>
  );
}

// SearchMethods.propTypes = {
//   searchMethod: PropTypes.string.isRequired,
// };

export default CapsuleDetails;
