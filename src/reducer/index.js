import { combineReducers } from 'redux';
import fetchUniversity from './fetchUniversity';

const rootReducer = combineReducers({
  Education: fetchUniversity
});

export default rootReducer;
