import WAVEFORMS_MOCK_RESPONSE_DATA from '../../data/WAVEFORMS_MOCK_RESPONSE_DATA';

//
// CONSTANTS
//
// Must have "synthesizer/" prefix as a namespace.
// Asyncronous actions must have "_PENDING", "_SUCCESS", "_FAILURE"
// as a suffix and "LOAD_" as a prefix
//
// Syncronous actions should start with a verb indication the action. Eg.
// SHOW_NAV_BAR, ADD_NAV_ITEM, REMOVE_ADD_ITEM
const LOAD_WAVEFORMS_PENDING = 'synthesizer/LOAD_WAVEFORMS_PENDING';
const LOAD_WAVEFORMS_SUCCESS = 'synthesizer/LOAD_WAVEFORMS_SUCCESS';
const LOAD_WAVEFORMS_FAILURE = 'synthesizer/LOAD_WAVEFORMS_FAILURE';

//
// INITIAL STATE
//
// This is the initial state of what the reducer sets to the
// redux store.
const initialState = {
  sawtooth: {},
  sine: {},
  square: {},
  triangle: {},
  loading: false,
  loaded: false,
  error: undefined
};

//
// REDUCER
//
// The reducer should always be default exported.
// It takes a state and action. Based on the action type,
// the function should return a new state object.
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_WAVEFORMS_PENDING:
      return {
        ...state,
        loading: true
      };
    case LOAD_WAVEFORMS_SUCCESS:
      return {
        ...state,
        sawtooth: action.result.sawtooth,
        sine: action.result.sine,
        square: action.result.square,
        triangle: action.result.triangle,
        loading: false,
        loaded: true
      };
    case LOAD_WAVEFORMS_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

//
// Action Creators
//
// Traditionally, action creators return actions and are invoked
// as a parameter to the dispatch function.
//
// Action creators can be composed by returning a function
// that accepts dispatch, and invokes dispatch with an
// action creator as its parameter. This is due to a library
// redux-thunk.
//
// https://github.com/gaearon/redux-thunk
//
// Action creators always return actions with a type and any
// needed data to be used in the reducer.
//
// Action creators should be named as the action but camelCase.
//
// Async actions must be appended with Async to denote they can be
// promise chained.
export function loadWaveformsAsync() {
  return (dispatch) => {
    dispatch(loadWaveformsPending());
    return getWaveforms()
      .then(data => dispatch(loadWaveformsSuccess(data)))
      .catch(err => dispatch(loadWaveformsFailure(err)));
  };
}

export function loadWaveformsPending() {
  return {
    type: LOAD_WAVEFORMS_PENDING
  };
}

export function loadWaveformsSuccess(data) {
  return {
    type: LOAD_WAVEFORMS_SUCCESS,
    result: data
  };
}

export function loadWaveformsFailure(err) {
  return {
    type: LOAD_WAVEFORMS_FAILURE,
    error: err
  };
}

function getWaveforms() {
  return Promise.resolve(WAVEFORMS_MOCK_RESPONSE_DATA);
}
