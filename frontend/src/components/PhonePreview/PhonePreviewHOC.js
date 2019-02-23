import { connect } from 'react-redux';
import { compose, withHandlers, withStateHandlers } from 'recompose';

import { setSelectedPhoneId } from '../../actions';
import PhonePreview from './PhonePreview';

export default compose(
  connect(
    null,
    null
  ),
  withStateHandlers(
    () => ({
      favorite: false
    }),
    {
      toogleFavorite: ({ favorite }) => () => ({ favorite: !favorite })
    }
  ),
  withHandlers({
    onLearnMoreClick: ({ dispatch, phone }) => () => {
      dispatch(setSelectedPhoneId(phone.id));
    }
  })
)(PhonePreview);
