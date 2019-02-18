import _ from 'lodash';
import { connect } from 'react-redux';
import { compose, defaultProps, withPropsOnChange, withState } from 'recompose';

import PhoneListContainer from './PhoneListContainer';

const mapStateToProps = state => {
  const phoneList = _.get(state, 'phoneList');
  const brands = _.map(phoneList, 'brand');

  return {
    brandList: _.uniq(brands),
    phoneList
  };
};

const mapDispatchToProps = null;

const ReduxConnector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  ReduxConnector,
  defaultProps({
    brandList: [],
    phoneList: []
  }),
  withState('selectedBrands', 'setSelectedBrands', []),
  withPropsOnChange(['selectedBrands'], ({ phoneList, selectedBrands }) => ({
    filteredPhoneList: _.isEmpty(selectedBrands)
      ? phoneList
      : _.filter(phoneList, phone => {
          return _.includes(selectedBrands, phone.brand);
        })
  }))
)(PhoneListContainer);
