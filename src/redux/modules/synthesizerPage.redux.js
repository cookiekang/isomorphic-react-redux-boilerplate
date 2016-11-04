import settle from 'promise-settle';
import { combineReducers } from 'redux';
import waveforms, { loadWaveformsAsync } from './waveforms.redux';

export default combineReducers({
  waveforms
});

export function loadSynthesizerPageAsync() {
  return (dispatch) => settle([
    dispatch(loadWaveformsAsync())
  ]);
}
