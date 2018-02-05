// @flow
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => (
  <Layout.Header style={{ position: 'fixed', width: '100%', zIndex: 100 }}>
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
  </Layout.Header>
);

export default Header;
