/**
 * @file Definition of the redux actions.
 */

const ACTIONS = {
  SET_DATA_LOADED: 'SET_DATA_LOADED',
  SET_LAST_SELECTED_PHONE_ID: 'SET_LAST_SELECTED_PHONE_ID',
  SET_PHONE_LIST: 'SET_PHONE_LIST',
  SET_SELECTED_PHONE_ID: 'SET_SELECTED_PHONE_ID'
};

const setDataLoaded = payload => ({
  type: ACTIONS.SET_DATA_LOADED,
  payload
});

const setLastSelectedPhoneId = payload => ({
  type: ACTIONS.SET_LAST_SELECTED_PHONE_ID,
  payload
});

const setPhoneList = payload => ({
  type: ACTIONS.SET_PHONE_LIST,
  payload
});

const setSelectedPhoneId = payload => ({
  type: ACTIONS.SET_SELECTED_PHONE_ID,
  payload
});

export default ACTIONS;
export { setDataLoaded, setLastSelectedPhoneId, setPhoneList, setSelectedPhoneId };