// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import type { UniversityList, Loading } from '../../type/university';
import University from '../../component/university/university';
import UniversityDetail from '../../component/universityDetail/universityDetail';

import './education.css';

export type Props = {
  loading: Loading,
  universityList: UniversityList,
  onInputValueChange: (input: string) => void,
  match: any
};

const Education = ({
  loading,
  universityList,
  onInputValueChange,
  match
}: Props) => {
  const renderUniversity = () => (
    <University
      loading={loading}
      valueList={universityList}
      onInputValueChange={onInputValueChange}
    />
  );
  return (
    <div className="education">
      <Switch>
        <Route exact path={match.url} render={renderUniversity} />
        <Route path={`${match.url}/:topicId`} component={UniversityDetail} />
      </Switch>
    </div>
  );
};

export default Education;
