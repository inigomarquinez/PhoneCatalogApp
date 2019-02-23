/**
 * @file Component that displays full details of a phone.
 */

import _ from 'lodash';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import ErrorDialog from '../ErrorDialog';
import styles from './styles.css.js';

/**
 * Component that displays full details of a phone.
 * @param {Object}    classes       - Object returned by withStyles method to apply CSS-in-JS styles to the component.
 * @param {String}    error         - Text that contains information in case some error occurs.
 * @param {Object}    fetchData     - Function that triggers fetching phone information from back-end.
 * @param {function}  handleBuy     - Function that opens a new web page to buy the phone.
 * @param {function}  handleClose   - Function that closes the current dialog.
 * @param {Object}    phoneDetails  - Information about the phone.
 */
const PhoneDetailComponent = ({
  classes,
  error,
  fetchData,
  handleBuy,
  handleClose,
  phoneDetails
}) => (
  <React.Fragment>
    <Dialog
      fullScreen={true}
      open={true}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title">
      <DialogTitle id="responsive-dialog-title" disableTypography={true}>
        <Typography align="center" color="primary" variant="h3">
          {_.get(phoneDetails, 'name')}
        </Typography>
      </DialogTitle>
      <DialogContent className={classes.content}>
        <div className={classes.images}>
          {_.get(phoneDetails, 'images', []).map((tile, index) => (
            <img
              key={index}
              className={classes.img}
              src={`${window.location.protocol}//${window.location.hostname}:4000${tile}`}
              alt=""
              maxheight="100%"
              width="auto"
            />
          ))}
        </div>
        <div className={classes.tableContainer}>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.titleCell}>Brand</TableCell>
                <TableCell>{_.get(phoneDetails, 'brand')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.titleCell}>Launch year</TableCell>
                <TableCell>{_.get(phoneDetails, 'year')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.titleCell}>Price</TableCell>
                <TableCell>{_.get(phoneDetails, 'price')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.titleCell}>Available colors</TableCell>
                <TableCell>{_.get(phoneDetails, 'colors', []).join(', ')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.titleCell}>Description</TableCell>
                <TableCell>{_.get(phoneDetails, 'description')}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleBuy} variant="outlined">
          Buy
        </Button>
        <Button autoFocus color="primary" onClick={handleClose} variant="outlined">
          Close
        </Button>
      </DialogActions>
    </Dialog>
    <ErrorDialog
      error={error}
      leftButtonHandler={fetchData}
      leftButtonText={'Try again'}
      rightButtonHandler={handleClose}
      rightButtonText={'Close'}
    />
  </React.Fragment>
);

PhoneDetailComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  error: PropTypes.string,
  fetchData: PropTypes.func.isRequired,
  handleBuy: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  phoneDetails: PropTypes.object
};

export default withMobileDialog()(withStyles(styles)(PhoneDetailComponent));
