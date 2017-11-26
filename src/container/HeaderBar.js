import { connect } from 'react-redux';
import HeaderBar from '../component/HeaderBar/HeaderBar';
import switchTheme from '../action/switchTheme';

const mapStateToProps = state => {
  return {
    defaultTheme: state.defaultTheme
  };
};

export default connect(mapStateToProps)(HeaderBar);
