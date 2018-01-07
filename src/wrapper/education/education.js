// @flow
import React from 'react';
import { Layout } from 'antd';

import './education.css';

const Education = () => {
  const { Content } = Layout;
  return (
    <Content style={{ padding: '8px' }}>
      <div className="education">
        <h2>This is education</h2>
      </div>
    </Content>
  );
};

export default Education;
