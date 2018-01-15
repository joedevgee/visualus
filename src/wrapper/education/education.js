// @flow
import React from 'react';
import { Layout } from 'antd';
import University from '../../component/university/university';

import './education.css';

const Education = () => {
  const { Content } = Layout;
  return (
    <Content style={{ padding: '8px' }}>
      <div className="education">
        <University />
      </div>
    </Content>
  );
};

export default Education;
