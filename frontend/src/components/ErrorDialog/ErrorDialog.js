/**
 * @file Error modal window.
 */

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Error modal window.
 * @param {String}    error               - Error message, if any.
 * @param {function}  leftButtonHandler   - Function triggered when left button is pressed.
 * @param {String}    leftButtonText      - Text for left button.
 * @param {function}  rightButtonHandler  - Function triggered when right button is pressed.
 * @param {String}    rightButtonText     - Text for right button.
 */
const ErrorDialog = ({
  error,
  leftButtonHandler,
  leftButtonText,
  rightButtonHandler,
  rightButtonText
}) => (
  <Dialog
    open={error !== null}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description">
    <DialogTitle id="alert-dialog-title">{'Error'}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">{error}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={leftButtonHandler} color="primary">
        {leftButtonText}
      </Button>
      {rightButtonText && (
        <Button onClick={rightButtonHandler} color="primary">
          {rightButtonText}
        </Button>
      )}
    </DialogActions>
  </Dialog>
);

ErrorDialog.propTypes = {
  error: PropTypes.string,
  leftButtonHandler: PropTypes.func.isRequired,
  leftButtonText: PropTypes.string.isRequired,
  rightButtonHandler: PropTypes.func,
  rightButtonText: PropTypes.string
};

export default ErrorDialog;
