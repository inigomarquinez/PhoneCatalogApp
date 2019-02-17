import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import axios from 'axios';

import App from './App';

const mapStateToProps = null;
const mapDispatchToProps = null;

const ReduxConnector = connect(
  mapStateToProps,
  mapDispatchToProps
);

const AppHOC = compose(
  ReduxConnector,
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
        console.log(result.data);
      });
      // axios({
      //   url: 'http://localhost:4000/phones',
      //   method: 'post',
      //   data: {
      //     query: `
      //       query PostsForAuthor {
      //         author(id: 1) {
      //           firstName
      //           posts {
      //             title
      //             votes
      //           }
      //         }
      //       }
      //       `
      //   }
      // }).then(result => {
      //   console.log(result.data);
      // });
    }
  })
)(App);

export default AppHOC;
