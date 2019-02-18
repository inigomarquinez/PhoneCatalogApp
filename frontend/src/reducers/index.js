import { createReducer } from 'redux-starter-kit';

import { setDataLoaded, setPhoneList, setSelectedPhoneId } from '../actions';

// Initial state
const initialState = {
  isDataLoaded: false,
  phoneList: [],
  selectedPhoneId: null
};

// Reducers
const rootReducer = createReducer(initialState, {
  [setDataLoaded]: (state, action) => {
    return { ...state, isDataLoaded: action.payload };
  },
  [setPhoneList]: (state, action) => {
    return { ...state, phoneList: action.payload };
  },
  [setSelectedPhoneId]: (state, action) => {
    return { ...state, selectedPhoneId: action.payload };
  }
});

export default rootReducer;
