import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import './scss/Boilerplate.scss';

const Boilerplate = ({ t, boilerplate }) => (
  <div>
    <Helmet title="Synthesizer" />
    <h1 className="boilerplate">{t('boilerplate:boilerplate')} Boilerplate Page</h1>
    <p>{boilerplate}</p>
  </div>
);

Boilerplate.propTypes = {
  boilerplate: PropTypes.object,
  t: PropTypes.func
};

export default Boilerplate;
