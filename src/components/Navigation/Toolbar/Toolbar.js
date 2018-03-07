import React from 'react';
import { Icon, Layout, Menu, Row, Col } from 'antd';
import Styles from './Toolbar.module.css';

const { Header } = Layout;
export default (props) => {

    return (
        <Header className={Styles.Toolbar}>
            <Row>
                <Col md={{ span: 0 }}>
                    <Icon
                        className={["trigger", Styles.Icon].join(" ")}
                        type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={props.toggle}
                    />
                </Col>
                <Col>
                    <div className="logo" />
                </Col>
                <Col xs={{ span: 0 }} md={{ span: 24 }}>
                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        className={Styles.NavigationMenu}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </Header>
    )
}