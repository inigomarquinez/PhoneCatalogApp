import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import { setSelectedPhoneId } from '../../actions';
import PhonePreview from './PhonePreview';

export default compose(
  connect(
    null,
    null
  ),
  withHandlers({
    onLearnMoreClick: ({ dispatch, phone }) => () => {
      dispatch(setSelectedPhoneId(phone.id));
    }
  })
)(PhonePreview);
