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
            <p>{capsule.capsuleId}</p>
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
