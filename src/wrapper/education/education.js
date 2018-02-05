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
  onInputValueChange: (input: string) => void
};

const Education = ({ loading, universityList, onInputValueChange }: Props) => {
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
        <Route exact path="/education" render={renderUniversity} />
        <Route path="/education/:topicId" component={UniversityDetail} />
      </Switch>
    </div>
  );
};

export default Education;
