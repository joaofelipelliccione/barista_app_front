import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import squaresMachine from '../sharedFunctions/squaresMachine';
import spilledCoffe from '../images/spilled-coffe.jpg';
import '../styles/RenderedCapsules.css';

function RenderedCapsules({ isFetching, capsulesToRender }) {
  const FIVE = 5;

  return (
    <section className="renderedCapsulesContainer">
      { isFetching ? (<h1>Buscando...</h1>) : (
        <h1>
          { capsulesToRender.length !== 0 ? (
            'Cápsulas (Original & Vertuo)'
          ) : ('Nenhuma Cápsula Encontrada') }
        </h1>
      ) }
      { capsulesToRender.length !== 0 ? (
        <article className="capsulesCardsContainer">
          {capsulesToRender.map((capsule) => (
            <Link
              to={ `/capsule/${capsule.capsuleId}` }
              key={ capsule.capsuleId }
              className="eachCapsuleCard"
            >
              <img
                src={ capsule.capsuleImgSrc }
                alt="Imagem da capsula"
              />
              <div className="eachCapsuleCardContainer1">
                <h2>{ capsule.capsuleName }</h2>
                <h3>{ capsule.capsuleLine }</h3>
                <h4>
                  { capsule.capsuleType === 'Original' ? (
                    `intensidade: ${capsule.capsuleIntensity}/13`
                  ) : (
                    `intensidade: ${capsule.capsuleIntensity}/11`
                  )}
                </h4>
                <div className="eachCapsuleCardContainer1-1">
                  <div className="eachCapsuleCardContainer1-1-1">
                    <span>
                      {`Torra: ${squaresMachine(capsule.capsuleRoastingLevel, FIVE)}`}
                    </span>
                    <span>
                      {`Acidez: ${squaresMachine(capsule.capsuleAcidityLevel, FIVE)}`}
                    </span>
                  </div>
                  <div className="eachCapsuleCardContainer1-1-2">
                    <span>
                      {`Amargor: ${squaresMachine(capsule.capsuleBitternessLevel, FIVE)}`}
                    </span>
                    <span>
                      {`Corpo: ${squaresMachine(capsule.capsuleRobustnessLevel, FIVE)}`}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </article>
      ) : (
        <article className="capsulesCardsContainer">
          <img
            className="capsulesNotFound"
            src={ spilledCoffe }
            alt="Capsules Not Found"
          />
        </article>) }
    </section>
  );
}

RenderedCapsules.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  capsulesToRender: PropTypes.arrayOf(PropTypes.shape({
    capsuleId: PropTypes.number,
    capsuleType: PropTypes.string,
    capsuleLine: PropTypes.string,
    capsuleName: PropTypes.string,
    decaf: PropTypes.bool,
    capsuleIntensity: PropTypes.number,
    capsuleRoastingLevel: PropTypes.number,
    capsuleBitternessLevel: PropTypes.number,
    capsuleAcidityLevel: PropTypes.number,
    capsuleRobustnessLevel: PropTypes.number,
    capsuleAspects: PropTypes.string,
    capsuleAromaticNotes: PropTypes.string,
    capsuleOrigin: PropTypes.string,
    ristretto25: PropTypes.bool,
    expresso40: PropTypes.bool,
    dblExpresso80: PropTypes.bool,
    lungo110: PropTypes.bool,
    granLungo150: PropTypes.bool,
    coffe230: PropTypes.bool,
    carafe535: PropTypes.bool,
    cappuccino: PropTypes.bool,
    dblCappuccino: PropTypes.bool,
    capsuleImgSrc: PropTypes.string,
    backgroundImgSrc: PropTypes.string,
  })).isRequired,
};

export default RenderedCapsules;
