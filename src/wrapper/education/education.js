// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import type {
  UniversityList,
  Loading,
  Id,
  University as UniversityType
} from '../../type/university';
import { getSelectedUniversity } from '../../selector/university';
import University from '../../component/university/university';
import UniversityDetail from '../../component/universityDetail/universityDetail';

import './education.css';

export type Props = {
  +loading: Loading,
  +universityList: UniversityList,
  +selectedUniversityId: Id,
  +onInputValueChange: (input: string) => void,
  +onUniversitySelected: (id: Id) => void
};

const Education = ({
  loading,
  universityList,
  onInputValueChange,
  selectedUniversityId,
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
  const renderUniversityDetail = () => {
    const detailU = getSelectedUniversity(universityList, selectedUniversityId);
    return !detailU ? null : <UniversityDetail university={detailU} />;
  };
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
