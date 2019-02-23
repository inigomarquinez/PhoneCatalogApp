/**
 * @file Component to show while waiting for the data to be fetched from the back-end.
 */

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';

import styles from './styles.css.js';

/**
 * Component to show while waiting for the data to be fetched from the back-end.
 * @param {Object} classes - Object returned by withStyles method to apply CSS-in-JS styles to the component.
 */
const Spinner = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.content}>
      <Typography align="center" color="primary" variant="h4">
        Loading. Please, wait...
      </Typography>
      <div className={classes.spinner}>
        <i className="fas fa-spinner fa-pulse fa-10x" />
      </div>
    </div>
  </div>
);

Spinner.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Spinner);
