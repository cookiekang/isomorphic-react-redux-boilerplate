import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
// import SynthethizersList from './SynthesizersList';
import './scss/SynthesizerPage.scss';

const SynthesizerPage = ({
  t,
  synthesizerPage
}) => {

  return (
    <div>
      <Helmet title="SynthesizerPage" />
      <div className="page-header">
        <h1 className="synthesizerPage">{t('synthesizerPage:list of synthesizers')}</h1>
      </div>
    </div>
  );
};

SynthesizerPage.propTypes = {
  synthesizerPage: PropTypes.object,
  t: PropTypes.func
};

export default SynthesizerPage;
