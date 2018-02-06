// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import type {
  UniversityList,
  Loading,
  Id,
  University as UniversityType
} from '../../type/university';
import University from '../../component/university/university';
import UniversityDetail from '../../component/universityDetail/universityDetail';

import './education.css';

export type Props = {
  +loading: Loading,
  +universityList: UniversityList,
  selectedUniversity?: UniversityType,
  +onInputValueChange: (input: string) => void,
  +onUniversitySelected: (id: Id) => void
};

const Education = ({
  loading,
  universityList,
  selectedUniversity,
  onInputValueChange,
  onUniversitySelected
}: Props) => {
  const renderUniversity = () => (
    <University
      loading={loading}
      valueList={universityList}
      onInputValueChange={onInputValueChange}
      onUniversitySelected={onUniversitySelected}
    />
  );
  const renderUniversityDetail = () =>
    selectedUniversity ? (
      <UniversityDetail university={selectedUniversity} />
    ) : null;
  return (
    <div className="education">
      <Switch>
        <Route exact path="/education" render={renderUniversity} />
        <Route path="/education/:topicId" render={renderUniversityDetail} />
      </Switch>
    </div>
  );
};

export default Education;
