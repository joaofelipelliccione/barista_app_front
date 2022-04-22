import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../styles/renderedCapsules/RenderedCapsules.css';

function RenderedCapsules({ capsulesToRender }) {
  return (
    <section className="renderedCapsulesContainer">
      <h1>Capsulas</h1>
      <article className="capsulesCardsContainer">
        {capsulesToRender.map((capsule) => (
          <Link
            to={ `/capsules/${capsule.capsuleId}` }
            key={ capsule.capsuleId }
            className="eachCapsuleCard"
          >
            <img
              src={ capsule.capsuleImgSrc }
              alt="Imagem da capsula"
            />
            <div>
              <h3>{ capsule.capsuleName }</h3>
              <h4>{ `linha: ${capsule.capsuleLine}` }</h4>
              <h5>
                { capsule.capsuleType === 'Original' ? (
                  `intensidade: ${capsule.capsuleIntensity}/13`
                ) : (
                  `intensidade: ${capsule.capsuleIntensity}/11`
                )}

              </h5>
            </div>
          </Link>
        ))}
      </article>
    </section>
  );
}

RenderedCapsules.propTypes = {
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
