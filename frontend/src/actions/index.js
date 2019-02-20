/**
 * @file Definition of the redux actions.
 */

import { createAction } from 'redux-starter-kit';

const setDataLoaded = createAction('setDataLoaded');
const setPhoneList = createAction('setPhoneList');
const setSelectedPhoneId = createAction('setSelectedPhoneId');

export { setDataLoaded, setPhoneList, setSelectedPhoneId };