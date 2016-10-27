const LOAD_FOOTER_PENDING = 'twc/LOAD_FOOTER_PENDING';
const LOAD_FOOTER_SUCCESS = 'twc/LOAD_FOOTER_SUCCESS';
const LOAD_FOOTER_FAILURE = 'twc/LOAD_FOOTER_FAILURE';

import FOOTER_MOCK_DATA from '../../data/FOOTER_MOCK_DATA';

const initialState = {
  loading: false,
  loaded: false,
  currentYear: ''
};

//
// REDUCER
//
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_FOOTER_PENDING:
      return {
        ...state,
        loading: true
      };
    case LOAD_FOOTER_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        currentYear: action.result.currentYear
      };
    case LOAD_FOOTER_FAILURE:
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
// ACTION CREATORS
//
export function loadFooterAsync() {
  return (dispatch) => {
    dispatch(loadFooterPending());

    return getFooter()
      .then((data) => dispatch(loadFooterSuccess(data)))
      .catch((err) => dispatch(loadFooterFailure(err)));
  };
}

export function loadFooterPending() {
  return {
    type: LOAD_FOOTER_PENDING
  };
}

export function loadFooterSuccess(result) {
  return {
    type: LOAD_FOOTER_SUCCESS,
    result
  };
}

export function loadFooterFailure(error) {
  return {
    type: LOAD_FOOTER_FAILURE,
    error
  };
}

function getFooter() {
  return Promise.resolve(FOOTER_MOCK_DATA);
}
