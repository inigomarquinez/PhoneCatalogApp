import { connect } from 'react-redux';

import PhoneListContainer from './PhoneListContainer';

const mapStateToProps = null;
const mapDispatchToProps = null;

const PhoneListContainerHOC = connect(mapStateToProps, mapDispatchToProps)(PhoneListContainer);

export default PhoneListContainerHOC;