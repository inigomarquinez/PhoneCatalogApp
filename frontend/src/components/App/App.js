/**
 * @file Application component (root component).
 */

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';

import AppRouter from '../AppRouter';
import ErrorDialog from '../ErrorDialog';
import logo from '../../resources/logos/gs-logo.png';
import styles from './styles.css.js';

/**
 * Application component.
 * @param {Object}    classes   - Object returned by withStyles method to apply CSS-in-JS styles to the component.
 * @param {function}  contactUs - Function that triggers opening an external page to contact GuideSmiths.
 * @param {String}    error     - Text that contains information in case some error occurs.
 * @param {Object}    fetchData - Function that triggers fetching phones information from back-end.
 */
const App = ({ classes, contactUs, error, fetchData }) => (
  <div className={classes.root}>
    <header className={classes.header}>
      <img src={logo} alt="gs-logo" height="50px" />
      <Typography color="primary" variant="h4">
        PhoneCatalogApp
      </Typography>
    </header>
    <div className={classes.body}>
      <AppRouter />
      <ErrorDialog
        error={error}
        leftButtonHandler={fetchData}
        leftButtonText={'Try again'}
      />
    </div>
    <footer className={classes.footer}>
      <Button color="primary" onClick={contactUs}>
        Contact Us
      </Button>
    </footer>
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
  contactUs: PropTypes.func.isRequired,
  error: PropTypes.string,
  fetchData: PropTypes.func.isRequired
};

export default withStyles(styles)(App);
