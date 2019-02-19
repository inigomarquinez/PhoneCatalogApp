import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers } from 'recompose';
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
  withHandlers({
    fetchData: ({ dispatch }) => () => {
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
                description,
                color,
                price,
                thumbnail,
                image
              } 
           }
            `
        }
      }).then(result => {
        //dataReceived(result.data.data.phones);
        dispatch(setPhoneList(result.data.data.phones));
        dispatch(setDataLoaded(true));
      }).catch(error => {
        console.log(error)
      });
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchData();
    }
  })
)(App);
