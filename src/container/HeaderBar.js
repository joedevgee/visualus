import { connect } from 'react-redux';
import HeaderBar from '../component/HeaderBar/HeaderBar';

const mapStateToProps = state => {
  return state.defaultTheme;
};

export default connect(mapStateToProps)(HeaderBar);
