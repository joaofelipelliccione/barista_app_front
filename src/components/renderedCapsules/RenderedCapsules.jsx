import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/renderedCapsules/RenderedCapsules.css';

function RenderedCapsules({ capsulesToRender }) {
  return (
    <section className="renderedCapsulesContainer">
      <h1>Capsulas</h1>
      {console.log(capsulesToRender)}
    </section>
  );
}

RenderedCapsules.propTypes = {
  capsulesToRender: PropTypes.arrayOf(PropTypes.shape({
    capsule_id: PropTypes.number,
    capsule_type: PropTypes.string,
    capsule_line: PropTypes.string,
    capsule_name: PropTypes.string,
    decaf: PropTypes.bool,
    capsule_intensity: PropTypes.number,
    capsule_roasting_level: PropTypes.number,
    capsule_bitterness_level: PropTypes.number,
    capsule_acidity_level: PropTypes.number,
    capsule_robustness_level: PropTypes.number,
    capsule_aspects: PropTypes.string,
    capsule_aromatic_notes: PropTypes.string,
    capsule_origin: PropTypes.string,
    ristretto25: PropTypes.bool,
    expresso40: PropTypes.bool,
    dbl_expresso80: PropTypes.bool,
    lungo110: PropTypes.bool,
    gran_lungo150: PropTypes.bool,
    coffe230: PropTypes.bool,
    carafe535: PropTypes.bool,
    cappuccino: PropTypes.bool,
    dbl_cappuccino: PropTypes.bool,
    capsule_img_src: PropTypes.string,
    background_img_src: PropTypes.string,
  })).isRequired,
};

export default RenderedCapsules;
