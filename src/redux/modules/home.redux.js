//
// CONSTANTS
//
// Must have "synthesizer/" prefix as a namespace.
// Asyncronous actions must have "_PENDING", "_SUCCESS", "_FAILURE"
// as a suffix and "LOAD_" as a prefix
//
// Syncronous actions should start with a verb indication the action. Eg.
// SHOW_NAV_BAR, ADD_NAV_ITEM, REMOVE_ADD_ITEM
const SHOW_WELCOME_MESSAGE = 'synthesizer/SHOW_WELCOME_MESSAGE';

//
// INITIAL STATE
//
// This is the initial state of what the reducer sets to the
// redux store.
const initialState = {
  isWelcomeMessage: false
};

//
// REDUCER
//
// The reducer should always be default exported.
// It takes a state and action. Based on the action type,
// the function should return a new state object.
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SHOW_WELCOME_MESSAGE:
      return {
        ...state,
        isWelcomeMessage: true
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

export function showWelcomeMessage() {
  return {
    type: SHOW_WELCOME_MESSAGE
  };
}
