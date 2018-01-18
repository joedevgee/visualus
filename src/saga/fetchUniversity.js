import { call, takeLatest, put } from 'redux-saga/effects';
import EducationAPIHelper from '../api/eduData';

export function* fetchUniversity(action) {
  try {
    const data = yield call(
      EducationAPIHelper.fetchUniversityList,
      action.input
    );
    yield put({ type: 'FETCH_UNIVERSITY_NAME_COMPLETE', data });
  } catch (error) {
    yield put({ type: 'FETCH_UNIVERSITY_NAME_FAIL', error });
  }
}

export default function* watchFetchUniversity() {
  yield takeLatest('FETCH_UNIVERSITY_NAME_BEGIN', fetchUniversity);
}
