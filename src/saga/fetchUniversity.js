import { call, takeLatest, put } from 'redux-saga/effects';
import { universityList } from '../api/eduData';

export function* fetchUniversity(action) {
  try {
    const result = yield call(universityList, action.input);
    yield put({ type: 'FETCH_UNIVERSITY_COMPLETE', result: result });
  } catch (error) {
    yield put({ type: 'FETCH_UNIVERSITY_FAIL', error: error });
  }
}

export default function* watchFetchUniversity() {
  yield takeLatest('FETCH_UNIVERSITY_BEGIN', fetchUniversity);
}
