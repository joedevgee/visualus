import { fork, takeLatest } from 'redux-saga/effects';
import watchFetchPlaces from './fetchPlaces';

export default function* rootSaga() {
  yield fork(watchFetchPlaces);
}
