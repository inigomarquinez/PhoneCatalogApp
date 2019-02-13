import { connect } from 'react-redux';
import { compose } from 'recompose';

import App from './App';

const mapStateToProps = null;
const mapDispatchToProps = null;

const ReduxConnector = connect(mapStateToProps, mapDispatchToProps);

const AppHOC = compose(ReduxConnector)(App);

export default AppHOC;