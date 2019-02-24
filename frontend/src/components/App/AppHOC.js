/**
 * @file Higher-Order-Component to add logic to App component.
 */
import { compose, lifecycle, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';
import axios from 'axios';

import { setDataLoaded, setPhoneList } from '../../actions';
import App from './App';

const mapStateToProps = null;
const mapDispatchToProps = null;

const ReduxConnector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  ReduxConnector,
  withState('error', 'setError', null),
  withHandlers({
    contactUs: () => () => {
      window.open('https://www.guidesmiths.com/contact', '_blank');
    },
    fetchData: ({ dispatch, setError }) => () => {
      console.log(
        `Fetching data from ${window.location.protocol}//${window.location.hostname}:4000/phones`
      );
      axios({
        url: `${window.location.protocol}//${window.location.hostname}:4000/phones`,
        method: 'post',
        data: {
          query: `
            query Phones {
              phones {
                id,
                brand,
                name,
                price,
                summary,
                thumbnail
              } 
           }
            `
        }
      })
        .then(result => {
          setError(null);
          dispatch(setPhoneList(result.data.data.phones));
          dispatch(setDataLoaded(true));
        })
        .catch(error => {
          console.log(error);
          setError('Error fetching phones information from server.');
        });
    },
    goToGuideSmiths: () => () => {
      window.open('https://www.guidesmiths.com/', 'web', '_blank');
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchData();
    }
  })
)(App);
