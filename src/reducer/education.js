// @flow
import type {
  UniversityListState,
  UniversityActions
} from '../type/university';

const defaultState: UniversityListState = {
  loading: false,
  keyword: '',
  universityList: [],
  metaData: {
    total: 0,
    per_page: 20,
    page: 0
  }
};

const education = (
  state: UniversityListState = defaultState,
  action: UniversityActions
): UniversityListState => {
  switch (action.type) {
    case 'FETCH_UNIVERSITY_BEGIN':
      return {
        ...state,
        loading: true,
        keyword: action.input
      };
    case 'FETCH_UNIVERSITY_COMPLETE':
      return {
        ...state,
        loading: false,
        universityList: action.result,
        metaData: action.meta
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
      const id = action.result.id;
      const detail = action.result.detail;
      return {
        ...state,
        loading: false,
        universityList: state.universityList.map(
          u =>
            u.id === id
              ? {
                  ...u,
                  detail: detail
                }
              : u
        )
      };
    default:
      return state;
  }
};

export default education;
