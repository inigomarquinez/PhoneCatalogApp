import _ from 'lodash';
import { connect } from 'react-redux';
import { branch, compose, renderComponent, renderNothing } from 'recompose';

import Spinner from '../Spinner';
import PhoneListContainer from '../PhoneListContainer';
import PhoneDetailComponent from '../PhoneDetailComponent';

const mapStateToProps = state => ({
  isDataLoaded: _.get(state, 'isDataLoaded'),
  phoneList: _.get(state, 'phoneList'),
  selectedPhoneId: _.get(state, 'selectedPhoneId')
});
const mapDispatchToProps = null;

const ReduxConnector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  ReduxConnector,
  branch(({ isDataLoaded }) => !isDataLoaded, renderComponent(Spinner)),
  branch(
    ({ selectedPhoneId }) => selectedPhoneId === null,
    renderComponent(PhoneListContainer),
    renderComponent(PhoneDetailComponent)
  )
)(renderNothing());


