import { call, put, takeLatest } from 'redux-saga/effects';
import GooglePlaces from '../api/googlePlaces';
import {
  FETCH_PLACES_BEGIN,
  FETCH_PLACES_COMPLETE,
  FETCH_PLACES_FAIL
} from '../actionType/fetchPlacesActionType';

export function* fetchPlaces(action) {
  try {
    const data = yield call(GooglePlaces.fetchPlaces, action.payload);
    console.debug('Fetched places from Google API: ', data);
    yield put({ type: FETCH_PLACES_COMPLETE, data });
  } catch (error) {
    yield put({ type: FETCH_PLACES_FAIL, error });
  }
}

export default function* watchFetchPlaces() {
  yield takeLatest({ FETCH_PLACES_BEGIN, fetchPlaces });
}
