/**
 * @file Component that displays a grid with all the available phones with some information about each one.
 */

import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';
import Select from '@material-ui/core/Select';

import PhonePreview from '../PhonePreview';
import styles from './styles.css.js';

/**
 * Component that displays a grid with all the available phones with some information about each one.
 * @param {Array}     brandList         - List of available brands.
 * @param {Object}    classes           - Object returned by withStyles method to apply CSS-in-JS styles to the component.
 * @param {Array}     filteredPhoneList - List of phones to be displayed.
 * @param {Array}     selectedBrands    - List of brands selected by the user.
 * @param {function}  setSelectedBrands - Function to update the brands selected by the user.
 */
const PhoneListContainer = ({
  brandList,
  classes,
  filteredPhoneList,
  selectedBrands,
  setSelectedBrands
}) => (
  <React.Fragment>
    <Grid container direction="row" spacing={16}>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <FormControl className={classes.filters} fullWidth>
          <InputLabel shrink htmlFor="brand-label-placeholder">
            Filter by brand
          </InputLabel>
          <Select
            value={selectedBrands}
            onChange={e => setSelectedBrands(e.target.value)}
            input={<Input name="brand" id="brand-label-placeholder" />}
            displayEmpty
            multiple
            name="brand">
            {brandList.map((brand, index) => (
              <MenuItem key={index} value={brand}>
                {brand}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
    <Grid container direction="row" spacing={16}>
      {filteredPhoneList.map((phone, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
          <PhonePreview phone={phone} />
        </Grid>
      ))}
    </Grid>
  </React.Fragment>
);

PhoneListContainer.propTypes = {
  brandList: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  filteredPhoneList: PropTypes.array.isRequired,
  selectedBrands: PropTypes.array.isRequired,
  setSelectedBrands: PropTypes.func.isRequired
};

export default withStyles(styles)(PhoneListContainer);
