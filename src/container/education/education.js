// @flow
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import type { State, Dispatch } from '../../type';
import type { Id, UniversityList, University } from '../../type/university';

import { beginFetchUniversity } from '../../action/fetchUniversity';
import { setSelectUniversity } from '../../action/selectUniversity';

import type { Props } from '../../wrapper/education/education';
import Education from '../../wrapper/education/education';

// TODO: create separate selector and add unit test for selectors
const getSelectedUniversity = (list: UniversityList, selectedId?: Id) => {
  if (selectedId) {
    return list.find((u: University) => u.id === selectedId);
  } else {
    return null;
  }
};

const mapStateToProps = (state: State) => {
  return {
    loading: state.Education.loading,
    universityList: state.Education.universityList,
    selectedUniversity: getSelectedUniversity(
      state.Education.universityList,
      state.Education.selectedId
    )
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onInputValueChange: input => {
      dispatch(beginFetchUniversity(input));
    },
    onUniversitySelected: id => {
      dispatch(setSelectUniversity(id));
    }
  };
};

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(Education);
