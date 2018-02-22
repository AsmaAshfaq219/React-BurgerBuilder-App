import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import {Button} from 'antd';

export default class BurgerBuilder extends Component {

    render() {
        return (
            <Fragment>
                <Burger />
                <div>Burger Controls
                    <Button>Hi</Button>
                </div>
            </Fragment>
        );
    }

}
