import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import './scss/SynthesizerPage.scss';

const SynthesizerPage = ({ t, synthesizerPage }) => (
  <div>
    <Helmet title="SynthesizerPage" />
    <h1 className="synthesizerPage">{t('synthesizerPage:list of synthesizers')}</h1>
    <p>{synthesizerPage}</p>
  </div>
);

SynthesizerPage.propTypes = {
  synthesizerPage: PropTypes.object,
  t: PropTypes.func
};

export default SynthesizerPage;
