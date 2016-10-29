import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
const pixi = isClient() ? require('pixi.js') : '';
const { Stage, Sprite, VectorText } = isClient() ? require('react-pixi') : '';
// import {Stage, Sprite, VectorText} from 'react-pixi';
import isClient from '../../utils/isClient';
import './scss/Synthesizer.scss';

const Synthesizer = ({
  synthesizersList,
  t,
}) => {

  const title = t('common:synthesizer');

  console.log(pixi);

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
