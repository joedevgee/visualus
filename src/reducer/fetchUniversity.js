// @flow
import type {
  UniversityListState,
  UniversityActions
} from '../type/university';

const defaultState: UniversityListState = {
  loading: false,
  universityList: []
};

const university = (
  state: UniversityListState = defaultState,
  action: UniversityActions
): UniversityListState => {
  switch (action.type) {
    case 'FETCH_UNIVERSITY_BEGIN':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_UNIVERSITY_COMPLETE':
      return {
        ...state,
        loading: false,
        universityList: action.result
      };
    case 'FETCH_UNIVERSITY_FAIL':
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default university;