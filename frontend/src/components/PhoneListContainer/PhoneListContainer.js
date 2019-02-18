import React from 'react';
import Grid from '@material-ui/core/Grid';

import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import PhonePreview from '../PhonePreview';

const PhoneListContainer = ({ brandList, filteredPhoneList, selectedBrands, setSelectedBrands }) => (
  <React.Fragment>
    <FormControl>
      <InputLabel shrink htmlFor="brand-label-placeholder">
        Brand
      </InputLabel>
      <Select
        value={selectedBrands}
        onChange={e => setSelectedBrands(e.target.value)}
        input={<Input name="brand" id="brand-label-placeholder" />}
        displayEmpty
        multiple
        name="brand">
        {brandList.map((brand, index) => (
          <MenuItem key={index} value={brand}>{brand}</MenuItem>
        ))}
      </Select>
      <FormHelperText>You can filter by brand</FormHelperText>
    </FormControl>

    <Grid container direction="row" spacing={16}>
      {filteredPhoneList.map((phone, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
          <PhonePreview phone={phone} />
        </Grid>
      ))}
    </Grid>
  </React.Fragment>
);

export default PhoneListContainer;
