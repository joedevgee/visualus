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
    universityList: state.Education.universityList,
    selectedUniversityId: state.Education.selectedId
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
