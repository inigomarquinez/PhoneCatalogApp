/**
 * @file Configuration of the redux store.
 */

import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers'

export default () => {
  if (process.env.NODE_ENV === 'production') {
    return createStore(
      rootReducer,
      applyMiddleware(
        thunkMiddleware // lets us dispatch() functions
      )
    );
  } else {
    const { createLogger } = require('redux-logger');

    const loggerMiddleware = createLogger();

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
      rootReducer,
      composeEnhancers(
        applyMiddleware(
          thunkMiddleware, // lets us dispatch() functions
          loggerMiddleware // neat middleware that logs actions
        )
      )
    );

    console.log('Initial redux state: %o', store.getState());

    return store;
  }
};
