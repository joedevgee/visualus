// @flow
import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Home from './wrapper/home/home';
import Education from './wrapper/education/education';

import './App.css';

const App = () => {
  const { Header, Footer } = Layout;
  return (
    <Layout>
      <Header style={{ position: 'fixed', width: '100%' }}>
        <span className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/education">Education</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Route exact path="/" component={Home} />
      <Route path="/education" component={Education} />
      <Footer style={{ textAlign: 'center' }}>
        VisualUSA ©2017 Created by Joey Liu
      </Footer>
    </Layout>
  );
};

export default App;
