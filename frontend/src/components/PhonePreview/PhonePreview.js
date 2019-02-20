import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

import styles from './styles.css.js';

const PhonePreview = ({ classes, onLearnMoreClick, phone }) => (
  <Card className={classes.card}>
    <CardHeader title={phone.name} />
    <CardMedia
      className={classes.media}
      image={`${window.location.protocol}//${window.location.hostname}:4000${phone.thumbnail}`}
      title={phone.name}
    />
    <CardContent>
      <Typography component="p">{phone.summary}</Typography>
    </CardContent>
    <CardActions className={classes.actions} disableActionSpacing>
      <TextField
        variant="filled"
        label="From"
        value={phone.price}
        InputProps={{
          readOnly: true,
          endAdornment: <InputAdornment position="end">€</InputAdornment>
        }}
      />
      <Button size="small" color="primary" onClick={onLearnMoreClick}>
        Learn More
      </Button>
      <IconButton aria-label="Add to favorites">
        <FavoriteIcon />
      </IconButton>
      {/**
      <IconButton aria-label="Share">
        <ShareIcon />
      </IconButton>
      */}
    </CardActions>
  </Card>
);

// const PhonePreview = ({ classes, onLearnMoreClick, phone }) => (
//   <Card className={classes.card}>
//     <CardActionArea>
//       <CardMedia
//         className={classes.media}
//         image={`${window.location.protocol}//${window.location.hostname}:4000${phone.thumbnail}`}
//         title={phone.name}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="h2">
//           {phone.name}
//         </Typography>
//         <Typography component="p">{phone.summary}</Typography>
//       </CardContent>
//     </CardActionArea>
//     <CardActions className={classes.actions}>
//       <TextField
//         variant="filled"
//         label="From"
//         value={phone.price}
//         InputProps={{
//           readOnly: true,
//           endAdornment: <InputAdornment position="end">€</InputAdornment>
//         }}
//       />
//       <Button size="small" color="primary" onClick={onLearnMoreClick}>
//         Learn More
//       </Button>
//     </CardActions>
//   </Card>
// );

PhonePreview.propTypes = {
  classes: PropTypes.object.isRequired,
  phone: PropTypes.object.isRequired
};

export default withStyles(styles)(PhonePreview);
