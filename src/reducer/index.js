import { combineReducers } from 'redux';
import education from './education';

const rootReducer = combineReducers({
  Education: education
});

export default rootReducer;
