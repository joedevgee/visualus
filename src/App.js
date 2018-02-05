// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './component/header/header';
import Home from './wrapper/home/home';
import Education from './container/education/education';

import './App.css';

const App = () => {
  const { Footer, Content } = Layout;
  return (
    <Layout>
      <Header />
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
