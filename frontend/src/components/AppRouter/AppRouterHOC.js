/**
 * @file Higher-Order-Component to choose which component to render depending on the application current state.
 */

import _ from 'lodash';
import { branch, compose, renderComponent, renderNothing } from 'recompose';
import { connect } from 'react-redux';

import PhoneDetailComponent from '../PhoneDetailComponent';
import PhoneListContainer from '../PhoneListContainer';
import Spinner from '../Spinner';

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
  // Depending on the current application state, decide which component will be rendered.
  branch(({ isDataLoaded }) => !isDataLoaded, renderComponent(Spinner)),
  branch(
    ({ selectedPhoneId }) => selectedPhoneId === null,
    renderComponent(PhoneListContainer),
    renderComponent(PhoneDetailComponent)
  )
)(renderNothing());
