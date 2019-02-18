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
    dataReceived: ({ dispatch }) => data => {
      dispatch(setPhoneList(data));
      dispatch(setDataLoaded(true));
    }
  }),
  lifecycle({
    componentDidMount() {
      axios({
        url: 'http://localhost:4000/phones',
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
                image
              } 
           }
            `
        }
      }).then(result => {
        console.log(result.data.data.phones);
        this.props.dataReceived(result.data.data.phones);
      });
    }
  })
)(App);
