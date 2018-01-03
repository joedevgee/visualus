import { combineReducers } from 'redux';
import fetchPlaces from './fetchPlaces';

const reduxApp = combineReducers({
  fetchPlaces
});

export default reduxApp;
