// @flow
import React from 'react';
import { Layout } from 'antd';

import './home.css';

const Home = () => {
  const { Content } = Layout;
  return (
    <Content style={{ padding: '50px' }}>
      <div className="home">
        <h1>This is home</h1>
      </div>
    </Content>
  );
};

export default Home;
