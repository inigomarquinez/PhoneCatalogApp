import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import PropTypes from 'prop-types';
import React from 'react';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import styles from './styles.css.js';

const PhoneDetailComponent = ({ classes, fullScreen, handleBuy, handleClose, phone }) => (
  <Dialog
    fullScreen={true}
    open={true}
    onClose={handleClose}
    aria-labelledby="responsive-dialog-title">
    <DialogTitle id="responsive-dialog-title">{phone.name}</DialogTitle>
    <DialogContent>
      <GridList className={classes.gridList} cols={1}>
        {phone.images.map((tile, index) => (
          <GridListTile key={index}>
            <img
              src={`${window.location.protocol}//${window.location.hostname}:4000${tile}`}
              alt=""
            />
          </GridListTile>
        ))}
      </GridList>
      <DialogContentText>Brand: {phone.brand}</DialogContentText>
      <DialogContentText>Launch year: {phone.year}</DialogContentText>
      <DialogContentText>{phone.description}</DialogContentText>
      <DialogContentText>{phone.price}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleBuy} color="primary">
        Buy
      </Button>
      <Button onClick={handleClose} color="primary" autoFocus>
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

PhoneDetailComponent.propTypes = {
  fullScreen: PropTypes.bool.isRequired
};

export default withMobileDialog()(withStyles(styles)(PhoneDetailComponent));
