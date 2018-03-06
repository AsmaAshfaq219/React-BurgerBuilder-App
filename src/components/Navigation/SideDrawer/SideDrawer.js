import React from 'react';
import { Layout, Menu } from 'antd';

import Styles from './SideDrawer.module.css';

const {  Sider } = Layout;

export default (props) => {
    return (
        <Sider
          className={Styles.SideDrawer}
          trigger={null}
          collapsible
          collapsed={props.collapsed}
          collapsedWidth= {0}
        >
          <div className="logo" />
          <Menu mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
    );
  }

