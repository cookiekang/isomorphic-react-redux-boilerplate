import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import isClient from '../../utils/isClient';
import './scss/Synthesizer.scss';

const Synthesizer = ({
  synthesizersList,
  t,
}) => {

  const title = t('common:synthesizer');

  return (
    <div>
      <Helmet title={title} />
      <div className="page-header">
        <h1 className="synthesizer">{t('synthesizer:list of synthesizers')}</h1>
      </div>
    </div>
  );
};

Synthesizer.propTypes = {
  synthesizersList: PropTypes.object,
  t: PropTypes.func
};

export default Synthesizer;
