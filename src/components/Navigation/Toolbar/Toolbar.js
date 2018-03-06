import React from 'react';
import {Icon, Layout } from 'antd';
import Styles from './Toolbar.module.css';

const {Header} = Layout;
export default (props) => {

    return (
        <Header className={Styles.Toolbar}>
            <Icon
                className={["trigger", Styles.Icon].join(" ")}
                type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={props.toggle}
            />
        </Header>
    )
}