import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/Footer';

import ristretto25 from '../images/cupSizes/img-ristretto25.svg';
import expresso40 from '../images/cupSizes/img-expresso40.svg';
import dblExpresso80 from '../images/cupSizes/img-dbl_expresso80.svg';
import lungo110 from '../images/cupSizes/img-lungo110.svg';
import granLungo150 from '../images/cupSizes/img-gran_lungo150.svg';
import coffe230 from '../images/cupSizes/img-coffe230.svg';
import carafe535 from '../images/cupSizes/img-carafe535.svg';
import cappuccino from '../images/cupSizes/img-cappuccino.svg';
import dblCappuccino from '../images/cupSizes/img-dbl_cappuccino.svg';

import '../styles/capsuleDetails/CapsuleDetails.css';

function CapsuleDetails() {
  const { id } = useParams();
  const allCapsulesArr = useSelector((state) => state.capsules).allCapsules;
  const capsuleInfo = allCapsulesArr.find(({ capsuleId }) => capsuleId === Number(id));
  const cupSizesArray = [
    { size: 'ristretto25', imgPath: ristretto25 },
    { size: 'expresso40', imgPath: expresso40 },
    { size: 'dblExpresso80', imgPath: dblExpresso80 },
    { size: 'lungo110', imgPath: lungo110 },
    { size: 'granLungo150', imgPath: granLungo150 },
    { size: 'coffe230', imgPath: coffe230 },
    { size: 'carafe535', imgPath: carafe535 },
    { size: 'cappuccino', imgPath: cappuccino },
    { size: 'dblCappuccino', imgPath: dblCappuccino },
  ];

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
          <div className="capsuleDetailsContainer1-1">
            <h4>Medidas: </h4>
            { cupSizesArray.map(({ size, imgPath }) => (
              capsuleInfo[size]
              && <img key={ size } src={ imgPath } alt="Cup size" className="cups" />
            )) }
          </div>
          <h4 className="capsuleDetailsIntensity">
            { capsuleInfo.capsuleType === 'Original' ? (
              `Intensidade: ${capsuleInfo.capsuleIntensity}/13`
            ) : (
              `Intensidade: ${capsuleInfo.capsuleIntensity}/11`
            )}
          </h4>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CapsuleDetails;
