/**
 * @file Dispays brief information of a phone.
 */

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import styles from './styles.css.js';

/**
 * Component to display brief information of a phone.
 * @param {Object}    classes           - Object returned by withStyles method to apply CSS-in-JS styles to the component.
 * @param {boolean}   favorite          - Flag toindicate if the user hasmarked the phone as favorite.
 * @param {boolean}   focus             - Flag to indicate if the card should have the focus.
 * @param {function}  onLearnMoreClick  - Function that opens a dialog with detailed information about the phone.
 * @param {Object}    phone             - Brief information of the phone.
 * @param {function}  toogleFavorite    - Funtion to toggle if the user marks the phone as favorite or not.
 */
const PhonePreview = ({ classes, favorite, focus, onLearnMoreClick, phone, toogleFavorite }) => (
  <Card raised={true} className={classes.card} focus={focus.toString()}>
    <CardHeader
      className={classes.header}
      title={phone.name}
      titleTypographyProps={{ color: 'primary', variant: 'h6' }}
    />
    <CardMedia
      className={classes.media}
      image={`${window.location.protocol}//${window.location.hostname}:4000${phone.thumbnail}`}
      title={phone.name}
    />
    <CardContent className={classes.content}>
      <Typography variant="body2">{phone.summary}</Typography>
    </CardContent>
    <CardActions>
      <Grid container alignItems="center" direction="row" spacing={16}>
        <Grid item xs={5}>
          <TextField
            InputLabelProps={{
              color: 'primary'
            }}
            InputProps={{
              readOnly: true,
              endAdornment: <InputAdornment position="end">€</InputAdornment>
            }}
            label="From"
            fullWidth
            value={phone.price}
            variant="filled"
          />
        </Grid>
        <Grid item xs={2}>
          <IconButton aria-label="Add to favorites" onClick={toogleFavorite}>
            <FavoriteIcon color={favorite ? 'secondary' : 'inherit'} />
          </IconButton>
        </Grid>
        <Grid item xs={5}>
          <Button
            size="small"
            color="primary"
            className={classes.learMore}
            fullWidth
            onClick={onLearnMoreClick}>
            Learn More
          </Button>
        </Grid>
      </Grid>
    </CardActions>
  </Card>
);

PhonePreview.propTypes = {
  classes: PropTypes.object.isRequired,
  favorite: PropTypes.bool.isRequired,
  focus: PropTypes.bool.isRequired,
  onLearnMoreClick: PropTypes.func.isRequired,
  phone: PropTypes.object.isRequired,
  toogleFavorite: PropTypes.func.isRequired
};

export default withStyles(styles)(PhonePreview);
