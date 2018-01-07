import { fork } from 'redux-saga/effects';
import watchFetchPlaces from './fetchPlaces';

function* rootSaga() {
  yield fork(watchFetchPlaces);
}

export default rootSaga;
