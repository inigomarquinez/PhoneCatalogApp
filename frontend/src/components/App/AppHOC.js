import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers, withState } from 'recompose';
import axios from 'axios';

import App from './App';
import { setDataLoaded, setPhoneList } from '../../actions';

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
          dispatch(setPhoneList(result.data.data.phones));
          dispatch(setDataLoaded(true));
        })
        .catch(error => {
          console.log(error);
          setError('error');
        });
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchData();
    }
  })
)(App);
