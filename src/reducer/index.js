import { combineReducers } from 'redux';
import fetchPlaces from './fetchPlaces';
import fetchUniversity from './fetchUniversity';

const reduxApp = combineReducers({
  fetchPlaces,
  fetchUniversity
});

export default reduxApp;
