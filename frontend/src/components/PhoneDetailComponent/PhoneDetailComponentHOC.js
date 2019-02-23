import _ from 'lodash';
import { connect } from 'react-redux';
import { compose, withHandlers, withState, lifecycle } from 'recompose';
import axios from 'axios';

import { setSelectedPhoneId } from '../../actions';
import PhoneDetailComponent from './PhoneDetailComponent';

const mapStateToProps = state => ({
  selectedPhoneId: _.get(state, 'selectedPhoneId')
});

const mapDispatchToProps = null;

const ReduxConnector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  ReduxConnector,
  withState('phoneDetails', 'setPhoneDetails', null),
  withState('error', 'setError', null),
  withHandlers({
    fetchData: ({ selectedPhoneId, setError, setPhoneDetails }) => () => {
      console.log(
        `Fetching data from ${window.location.protocol}//${window.location.hostname}:4000/phones`
      );
      axios({
        url: `${window.location.protocol}//${window.location.hostname}:4000/phones`,
        method: 'post',
        data: {
          query: `
            query Phones {
              phone (id: ${selectedPhoneId}) {
                id,
                brand,
                colors,
                description,
                images,
                name,
                price,
                summary,
                thumbnail,
                web,
                year
              } 
           }
            `
        }
      })
        .then(result => {
          setError(null);
          setPhoneDetails(_.get(result, 'data.data.phone', null));
        })
        .catch(error => {
          console.log(error);
          setError('Error fetching phone details from server.');
        });
    }
  }),

  withHandlers({
    handleBuy: ({ phoneDetails }) => () => {
      window.open(_.get(phoneDetails, 'web', '_blank'));
    },
    handleClose: ({ dispatch }) => () => {
      dispatch(setSelectedPhoneId(null));
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchData();
    }
  })
)(PhoneDetailComponent);
