import { LOAD, SAVE } from 'redux-storage';

const initialState = {
  loaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loaded: true
      };
    case SAVE:
      console.log('Added a new location to localForage!');
      return state;
    default:
      return state;
  }
}
