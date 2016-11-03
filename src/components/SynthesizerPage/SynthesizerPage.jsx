import React, { Component } from 'react';
import Helmet from 'react-helmet';
import isClient from '../../utils/isClient';
import './scss/SynthesizerPage.scss';

export default class SynthesizerPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {
      t
    } = this.props;

    const title = t('common:synthesizer');
    // let canvas;

    if (!isClient() && typeof document === 'undefined') {
      // canvas = (<div></div>);
    } else {
      // /* eslint-disable */
      // const ReactPIXI = require('react-pixi');
      // const PIXI = require('pixi.js');
      // const zombie = require('zombie');
      // /* eslint-disable */
      //
      // const Stage = ReactPIXI.Stage;
      // const TilingSprite = ReactPIXI.TilingSprite;
      // const Text = ReactPIXI.Text;
      //
      // canvas = (<Stage width={1366} height={this.props.height}>
      //   <TilingSprite image={zombie} width={1366} height={768} key="1" />
      // </Stage>);
    }

    return (
      <div>
        <Helmet title={title} />
        {/* {canvas} */}
      </div>
    )
  }
}
