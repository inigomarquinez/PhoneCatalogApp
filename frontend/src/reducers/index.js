/**
 * @file Definition of the redux reducers.
 */

import ACTIONS from '../actions';

// Initial state
const initialState = {
  isDataLoaded: false,
  phoneList: [],
  selectedPhoneId: null,
  lastSelectedPhoneId: null
};

// Root reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_DATA_LOADED:
      return { ...state, isDataLoaded: action.payload };

    case ACTIONS.SET_LAST_SELECTED_PHONE_ID:
      return { ...state, lastSelectedPhoneId: action.payload };

    case ACTIONS.SET_PHONE_LIST:
      return { ...state, phoneList: action.payload };

    case ACTIONS.SET_SELECTED_PHONE_ID:
      return { ...state, selectedPhoneId: action.payload };

    default:
      return state;
  }
};

export default rootReducer;
