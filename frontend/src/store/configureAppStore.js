import { configureStore } from 'redux-starter-kit';

import rootReducer from '../reducers';

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer
  })

  // if (process.env.NODE_ENV !== 'production' && module.hot) {
  //   module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  // }

  return store;
}