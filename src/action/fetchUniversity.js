// @flow
import type { UniversityActions, UniversityList } from '../type/university';

export const beginFetchUniversity = (input: string): UniversityActions => {
  return { type: 'FETCH_UNIVERSITY_BEGIN', input: input };
};

export const completeFetchUniversity = (
  result: UniversityList
): UniversityActions => {
  return { type: 'FETCH_UNIVERSITY_COMPLETE', result: result };
};

export const failFetchUniversity = (error: string): UniversityActions => {
  return { type: 'FETCH_UNIVERSITY_FAIL', error: error };
};
