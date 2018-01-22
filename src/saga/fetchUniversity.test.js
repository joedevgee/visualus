import { call, put, takeLatest } from 'redux-saga/effects';
import watchFetchUniversity, { fetchUniversity } from './fetchUniversity';
import { universityList } from '../api/eduData';

describe('FetchUniversity saga', () => {
  const action = { input: 'uc' };
  let output = null;
  it('Should watch for fetch university request', () => {
    const generator = watchFetchUniversity();
    output = generator.next().value;
    expect(output).toEqual(
      takeLatest('FETCH_UNIVERSITY_BEGIN', fetchUniversity)
    );
  });
  it('Should call education API', () => {
    const generator = fetchUniversity(action);
    output = generator.next().value;
    expect(output).toEqual(call(universityList, action.input));
  });
  it('Should return a FETCH_UNIVERSITY_COMPLETE action after success api call', () => {
    const generator = fetchUniversity(action);
    const result = [
      {
        id: 1,
        name: 'name',
        alias: 'alias'
      }
    ];
    generator.next();
    output = generator.next(result).value;
    const expectedResult = put({
      type: 'FETCH_UNIVERSITY_COMPLETE',
      result
    });
    expect(output).toEqual(expectedResult);
  });
  it('Should return a fetch_university_name_fail action after api get error response', () => {
    const generator = fetchUniversity(action);
    generator.next();
    output = generator.throw('API returned error').value;
    const expectedResult = put({
      type: 'FETCH_UNIVERSITY_FAIL',
      error: 'API returned error'
    });
    expect(output).toEqual(expectedResult);
  });
});
