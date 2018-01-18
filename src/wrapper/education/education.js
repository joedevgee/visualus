// @flow
import React from 'react';
import { Layout } from 'antd';
import type { UniversityList, Loading } from '../../type/university';
import University from '../../component/university/university';

import './education.css';

export type Props = {
  loading: Loading,
  universityList: UniversityList,
  onInputValueChange: (input: string) => void
};

const Education = ({ loading, universityList, onInputValueChange }: Props) => {
  const { Content } = Layout;
  return (
    <Content style={{ padding: '8px' }}>
      <div className="education">
        <University
          loading={loading}
          valueList={universityList}
          onInputValueChange={onInputValueChange}
        />
      </div>
    </Content>
  );
};

export default Education;
