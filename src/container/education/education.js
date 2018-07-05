// @flow
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import type { State, Dispatch } from '../../type';

import { beginFetchUniversity } from '../../action/fetchUniversity';
import { setSelectUniversity } from '../../action/selectUniversity';

import type { Props } from '../../wrapper/education/education';
import Education from '../../wrapper/education/education';

const mapStateToProps = (state: State) => {
  return {
    loading: state.Education.loading,
    metaData: state.Education.metaData,
    universityList: state.Education.universityList,
    selectedUniversityId: state.Education.selectedId,
    keyword: state.Education.keyword
  };
};

// const mapDispatchToProps = (dispatch: Dispatch, stateProps) => {
//   return {
//     onInputValueChange: input => {
//       dispatch(beginFetchUniversity(input, 0, 20));
//     },
//     onUniversitySelected: id => {
//       dispatch(setSelectUniversity(id));
//     },
//     onPageChange: (page: Number, pageSize: Number) => {
//       dispatch(beginFetchUniversity(stateProps.keyword, page, pageSize));
//     }
//   };
// };

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { dispatch } = dispatchProps;
  return {
    ...stateProps,
    //Write MapDispatch here
    onInputValueChange: input => {
      dispatch(beginFetchUniversity(input, 0, 20));
    },
    onUniversitySelected: id => {
      dispatch(setSelectUniversity(id));
    },
    onPageChange: (page: Number, pageSize: Number) => {
      dispatch(beginFetchUniversity(stateProps.keyword, page - 1, pageSize));
    }
  };
}

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  null,
  mergeProps
);
export default connector(Education);
