import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 2.2,
    cheese: 2.5,
    bacon: 3,
    meat: 4
}

export default class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: 4 
    }

    addIngredient = (type) => {
        this.setState(
            preState => {
                const ingredients = {...preState.ingredients};
                ++ingredients[type];
                return({
                    ingredients : ingredients,
                    totalPrice : preState.totalPrice + INGREDIENT_PRICES[type]
                });
            }
        );
    }

    removeIngredient = (type) => {
        this.setState(
            preState => {
                const ingredients = {...preState.ingredients};
                --ingredients[type];
                return({
                    ingredients : ingredients,
                    totalPrice : preState.totalPrice - INGREDIENT_PRICES[type]
                });
            }
        );
    }

    render() {
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                IngredientNames={this.state.ingredients}
                AddIngredient={this.addIngredient}
                RemoveIngredient={this.removeIngredient}
                TotalPrice={this.state.totalPrice}/>
            </Fragment>
        );
    }

}
