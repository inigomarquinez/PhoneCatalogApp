/**
 * @file Application entry point.
 */

import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import configureAppStore from './store/configureAppStore';

// FontAwesome icons (https://fontawesome.com/)
import '@fortawesome/fontawesome-free/js/all.min';

ReactDOM.render(
  <Provider store={configureAppStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
