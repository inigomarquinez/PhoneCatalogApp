/**
 * Configuration of the redux store.
 */

import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import rootReducer from '../reducers';

export default function configureAppStore(preloadedState) {
  let loggerMiddleware = null;
  if (process.env.NODE_ENV !== 'production') {
    const { createLogger } = require('redux-logger');
    loggerMiddleware = createLogger();
  }

  const store = configureStore({
    // A single reducer function that will be used as the root reducer,
    // or an object of slice reducers that will be passed to combineReducers()
    reducer: rootReducer,
    // An array of Redux middlewares.  If not supplied, uses getDefaultMiddleware()
    middleware: [...getDefaultMiddleware(), loggerMiddleware],
    // Enable support for the Redux DevTools Extension. Defaults to true.
    devTools: true,
    // Same as current createStore.
    preloadedState
    // An optional array of Redux store enhancers
    //enhancers: ReduxStoreEnhancer[],
  });

  console.log('Initial redux state: %o', store.getState());


  // if (process.env.NODE_ENV !== 'production' && module.hot) {
  //   module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  // }

  return store;
}
