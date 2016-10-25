import settle from 'promise-settle';
import { combineReducers } from 'redux';
import synthesizersList, { loadSynthesizersListAsync } from './synthesizersList.redux';

export default combineReducers({
  synthesizersList
});

export function loadSynthesizerPageAsync() {
  return (dispatch) => settle([
    dispatch(loadSynthesizersListAsync())
  ]);
}
