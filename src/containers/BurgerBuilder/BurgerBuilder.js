import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import { Button } from 'antd';

export default class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            cheese: 1,
            bacon: 2,
            meat: 1
        }
    }
    render() {
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients} />
                <div>Burger Controls
                    <Button>Hi</Button>
                </div>
            </Fragment>
        );
    }

}
