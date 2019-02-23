/**
 * @file Definition of the material-ui theme used in the application.
 */

import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import teal from '@material-ui/core/colors/teal';

export default createMuiTheme({
  typography: {
    useNextVariants: true
  },
  // Custom palette
  palette: {
    primary: teal,
    secondary: pink
  }
});
