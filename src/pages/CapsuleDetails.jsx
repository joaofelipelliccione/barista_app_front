/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { BsShare, BsClipboardCheck } from 'react-icons/bs';
import squaresMachine from '../sharedFunctions/squaresMachine';
import Header from '../components/header/Header';
import Caption from '../components/Caption';
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

import '../styles/CapsuleDetails.css';
import '../styles/Alerts.css';

function CapsuleDetails() {
  const { id } = useParams();

  const allCapsulesArr = useSelector((state) => state.capsules).allCapsules;
  const capsuleInfo = allCapsulesArr.find(({ capsuleId }) => capsuleId === Number(id));
  const FIVE = 5;

  const [isShareBtnClicked, setIsShareBtnClicked] = React.useState(false);

  const cupSizesArray = [
    { size: 'ristretto25', imgPath: ristretto25, name: 'Ristretto', ml: 25 },
    { size: 'expresso40', imgPath: expresso40, name: 'Expresso', ml: 40 },
    { size: 'dblExpresso80', imgPath: dblExpresso80, name: 'Double Expresso', ml: 80 },
    { size: 'lungo110', imgPath: lungo110, name: 'Lungo', ml: 110 },
    { size: 'granLungo150', imgPath: granLungo150, name: 'Gran Lungo', ml: 150 },
    { size: 'coffe230', imgPath: coffe230, name: 'Coffe', ml: 230 },
    { size: 'carafe535', imgPath: carafe535, name: 'Carafe', ml: 535 },
    { size: 'cappuccino', imgPath: cappuccino, name: 'Cappuccino', ml: 180 },
    { size: 'dblCappuccino', imgPath: dblCappuccino, name: 'Double Cappuccino', ml: 360 },
  ];

  const onClickShareBtn = (capsuleId) => {
    const TWO_SECONDS = 2000;
    navigator.clipboard.writeText(`https://baristapp.vercel.app/capsule/${capsuleId}`);
    setIsShareBtnClicked(true);
    setTimeout(() => setIsShareBtnClicked(false), TWO_SECONDS);
  };

  return (
    <div className="capsuleDetailsPage">
      <Header />
      <main className="capsuleDetailsMain">
        <img
          className="capsuleBackgroundImg"
          src={ capsuleInfo.backgroundImgSrc }
          alt="Imagem de capa"
        />

        <section className="capsuleDetailsContainer0">
          <div className="capsuleNameAndImg">
            <img
              src={ capsuleInfo.capsuleImgSrc }
              alt="Imagem da capsula"
            />
            <h1>{ capsuleInfo.capsuleName }</h1>
          </div>
          <button
            className="capsuleDetailsShareBtn"
            type="button"
            onClick={ () => onClickShareBtn(id) }
            disabled={ isShareBtnClicked }
          >
            {isShareBtnClicked ? <BsClipboardCheck /> : <BsShare />}
          </button>
        </section>

        <section className="capsuleDetailsContainer1">
          <div className="capsuleDetailsContainer1-1">
            <h4>Medidas: </h4>
            { cupSizesArray.map(({ size, imgPath, name, ml }) => (
              capsuleInfo[size]
              && (
                <button
                  className="cups"
                  type="button"
                  key={ size }
                  onClick={ () => swal(name, `Tamanho da xícara: ${ml} ml`, 'info') }
                >
                  <img
                    src={ imgPath }
                    alt="Cup size"
                  />
                </button>)
            )) }
          </div>
          <h4 className="capsuleDetails">
            Intensidade:
            { capsuleInfo.capsuleType === 'Original' ? (
              <span>{` ${capsuleInfo.capsuleIntensity}/13`}</span>
            ) : (
              <span>{` ${capsuleInfo.capsuleIntensity}/11`}</span>
            )}
          </h4>
          <h4 className="capsuleDetails">
            Características:
            {' '}
            <span>{capsuleInfo.capsuleAspects}</span>
          </h4>
          <h4 className="capsuleDetails">
            Notas Aromáticas:
            {' '}
            <span>{capsuleInfo.capsuleAromaticNotes}</span>
          </h4>
          <h4 className="capsuleDetails">
            Origem:
            {' '}
            <span>{capsuleInfo.capsuleOrigin}</span>
          </h4>
          <div className="beanAspectsContainer">
            <div>
              <span>
                {`Torra: ${squaresMachine(capsuleInfo.capsuleRoastingLevel, FIVE)}`}
              </span>
              <span>
                {`Acidez: ${squaresMachine(capsuleInfo.capsuleAcidityLevel, FIVE)}`}
              </span>
            </div>
            <div>
              <span>
                {`Amargor: ${squaresMachine(capsuleInfo.capsuleBitternessLevel, FIVE)}`}
              </span>
              <span>
                {`Corpo: ${squaresMachine(capsuleInfo.capsuleRobustnessLevel, FIVE)}`}
              </span>
            </div>
          </div>
        </section>
      </main>
      <Caption />
      <Footer typeOfFooter="regularFooter" />
    </div>
  );
}

export default CapsuleDetails;
