import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import AppRouter from '../AppRouter';

import logo from '../../resources/logos/gs-logo.png';

//import './App.css';
import styles from './App.css.js';

const App = ({ classes }) => (
  <React.Fragment>
    <header className={classes.header}>
      {/**<img src={logo} alt="gs-logo" height="100"></img>*/}PhoneCatalogApp
    </header>
    <div className={classes.body}>
      <AppRouter />
    </div>
    <footer className={classes.footer}>Contact Us</footer>
  </React.Fragment>
);

export default withStyles(styles)(App);
