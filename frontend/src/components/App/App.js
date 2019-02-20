import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import teal from '@material-ui/core/colors/teal';

import AppRouter from '../AppRouter';

import logo from '../../resources/logos/gs-logo.png';

//import './App.css';
import styles from './App.css.js';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: pink
  },
  status: {
    danger: 'orange'
  }
});

const App = ({ classes, error, fetchData }) => (
  <MuiThemeProvider theme={theme}>
    <header className={classes.header}>
      <img src={logo} alt="gs-logo" height="100" />
      PhoneCatalogApp
    </header>
    <div className={classes.body}>
      <AppRouter />
      <Dialog
        open={error !== null}
        onClose={() => console.log('handleClose')}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{'Error'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{error}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClose={() => console.log('handleClose')} color="primary">
            Close
          </Button>
          <Button onClick={fetchData} color="primary" autoFocus>
            Try again
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    <footer className={classes.footer}>Contact Us</footer>
  </MuiThemeProvider>
);

export default withStyles(styles)(App);
