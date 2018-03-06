import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import { Layout } from 'antd';


const { Content } = Layout;

export default class extends Component {
    state = {
        collapsed: true,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout>
                <SideDrawer collapsed={this.state.collapsed} />
                <Toolbar
                    collapsed={this.state.collapsed}
                    toggle={this.toggle} />
                <Content>
                    {this.props.children}
                </Content>
            </Layout>
        );
    }
}
