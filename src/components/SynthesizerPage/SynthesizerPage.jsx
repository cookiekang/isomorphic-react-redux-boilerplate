import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import isClient from '../../utils/isClient';
// import SynthesizerCanvas from './SynthesizerCanvas';
import './scss/SynthesizerPage.scss';

export default class SynthesizerPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      t,
      waveforms
    } = this.props;

    const title = t('common:synthesizer');
    // let synthesizerCanvas;
    //
    // if (!isClient() && typeof document === 'undefined') {
    //   synthesizerCanvas = (<div></div>);
    // } else {
    //   /* eslint-disable */
    //   const makeSound = require('../../utils/makeSound');
    //   /* eslint-disable */
    //
    //   synthesizerCanvas = (<SynthesizerCanvas makeSound={makeSound}/>);
    // }

    return (
      <div>
        <Helmet title={title} />
        {/* {synthesizerCanvas} */}
      </div>
    )
  }
}
