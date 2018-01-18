// @flow
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import type { State, Dispatch } from '../../type';

import { beginFetchUniversity } from '../../action/fetchUniversity';

import type { Props } from '../../wrapper/education/education';
import Education from '../../wrapper/education/education';

const mapStateToProps = (state: State) => {
  return {
    loading: state.loading,
    universityList: state.universityList
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onInputValueChange: input => {
      dispatch(beginFetchUniversity(input));
    }
  };
};

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(Education);
