import React, { PropTypes } from 'react';
import './sass/SynthesizerCanvas.scss';

const SynthesizerCanvas = ({
  t,
  waveforms
}) => (
  <div id="SynthesizerCanvas">
    <p>SynthesizerCanvas</p>
  </div>
);

SynthesizerCanvas.propTypes = {
  t: PropTypes.func.isRequired,
  waveforms: PropTypes.object.isRequired
};

export default SynthesizerCanvas;
