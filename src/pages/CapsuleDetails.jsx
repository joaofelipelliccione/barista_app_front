import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import '../styles/capsuleDetails/CapsuleDetails.css';

function CapsuleDetails() {
  const { id } = useParams();
  const allCapsulesArr = useSelector((state) => state.capsules).allCapsules;
  const capsuleInfo = allCapsulesArr.find(({ capsuleId }) => capsuleId === Number(id));

  return (
    <div className="capsuleDetailsPage">
      {console.log(capsuleInfo)}
      <Header />
      <main className="capsuleDetailsMain">
        <img
          className="capsuleBackgroundImg"
          src={ capsuleInfo.backgroundImgSrc }
          alt="Imagem de capa"
        />
        <div className="capsuleNameAndImg">
          <img
            src={ capsuleInfo.capsuleImgSrc }
            alt="Imagem da capsula"
          />
          <h1>{ capsuleInfo.capsuleName }</h1>
        </div>
        <section className="capsuleDetailsContainer1">
          OI
        </section>
      </main>
      <Footer />
    </div>
  );
}

// SearchMethods.propTypes = {
//   searchMethod: PropTypes.string.isRequired,
// };

export default CapsuleDetails;
