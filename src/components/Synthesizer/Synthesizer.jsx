import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
// import SynthethizersList from './SynthesizersList';
import './scss/Synthesizer.scss';

const Synthesizer = ({
  t,
  synthesizer
}) => {

  return (
    <div>
      <Helmet title="Synthesizer" />
      <div className="page-header">
        <h1 className="synthesizer">{t('synthesizer:list of synthesizers')}</h1>
      </div>
    </div>
  );
};

Synthesizer.propTypes = {
  synthesizer: PropTypes.object,
  t: PropTypes.func
};

export default Synthesizer;
