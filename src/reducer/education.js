// @flow
import type {
  UniversityListState,
  UniversityActions,
  UniversityList,
  UniversityDetail,
  Id
} from '../type/university';

const defaultState: UniversityListState = {
  loading: false,
  universityList: []
};

const updateUniversityDetail = (
  list: UniversityList,
  result: {
    id: Id,
    detail: UniversityDetail
  }
): UniversityList =>
  list.map(
    u =>
      u.id === result.id
        ? { ...u, ...{ id: result.id, detail: result.detail } }
        : u
  );

const education = (
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
    case 'SET_SELECTED_UNIVERSITY':
      return {
        ...state,
        loading: false,
        selectedId: action.id
      };
    case 'FETCH_UNIVERSITY_DETAIL_COMPLETE':
      return {
        ...state,
        loading: false,
        universityList: updateUniversityDetail(
          state.universityList,
          action.result
        )
      };
    default:
      return state;
  }
};

export default education;
