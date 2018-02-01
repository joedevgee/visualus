// @flow
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Home from './wrapper/home/home';
import Education from './container/education/education';

import './App.css';

const App = () => {
  const { Header, Footer, Content } = Layout;
  return (
    <Layout>
      <Header style={{ position: 'fixed', width: '100%', zIndex: 100 }}>
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
      <Content style={{ marginTop: 64, padding: '20px 50px 0', zIndex: 1 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/education" component={Education} />
        </Switch>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        VisualUSA ©2017 Created by Joey Liu
      </Footer>
    </Layout>
  );
};

export default App;
