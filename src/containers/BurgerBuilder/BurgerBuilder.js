import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import { Modal } from 'antd'

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
        totalPrice: 4,
        purchasable: false,
        modalVisible: false
    }

    showModal = () => {
        this.setState({
            modalVisible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            modalVisible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            modalVisible: false,
        });
    }

    updatePurchasable(ingredients) {
        const ingredientsSum = Object.keys(ingredients)
            .map(ing => ingredients[ing])
            .reduce((sum, el) => sum + el, 0);
        this.setState({ purchasable: ingredientsSum > 0 });
    }
    addIngredient = (type) => {
        const ingredients = { ...this.state.ingredients };
        ++ingredients[type];
        this.setState({
            ingredients: ingredients,
            totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type]
        });
        this.updatePurchasable(ingredients);
    }

    removeIngredient = (type) => {
        const ingredients = { ...this.state.ingredients };
        --ingredients[type];
        this.setState({
            ingredients: ingredients,
            totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type]
        });
        this.updatePurchasable(ingredients);
    }

    render() {
        return (
            <Fragment>
                <Modal
                    title="Your Order!"
                    visible={this.state.modalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    <OrderSummary 
                        Ingredients={this.state.ingredients}
                        Price={this.state.totalPrice}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    IngredientNames={this.state.ingredients}
                    AddIngredient={this.addIngredient}
                    RemoveIngredient={this.removeIngredient}
                    TotalPrice={this.state.totalPrice}
                    Purchasable={this.state.purchasable}
                    ShowModal={this.showModal} />
            </Fragment>
        );
    }

}
