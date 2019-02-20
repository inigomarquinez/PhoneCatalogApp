import _ from 'lodash';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import { setSelectedPhoneId } from '../../actions';
import PhoneDetailComponent from './PhoneDetailComponent';

const mapStateToProps = state => {
  const phoneList = _.get(state, 'phoneList');
  const selectedPhoneId = _.get(state, 'selectedPhoneId');

  return {
    phone: _.find(phoneList, ['id', selectedPhoneId])
  };
};

const mapDispatchToProps = null;

const ReduxConnector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  ReduxConnector,
  withHandlers({
    handleBuy: ({ phone }) => () => {
      window.open(phone.web, '_blank');
    },
    handleClose: ({ dispatch }) => () => {
      dispatch(setSelectedPhoneId(null));
    }
  })
)(PhoneDetailComponent);
