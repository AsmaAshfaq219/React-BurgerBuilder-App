import React from 'react';
import Styles from './BurgerIngredient.css';
import PropTypes from 'prop-types';

const BurgerIngredient = (props) => {
    let Ingredient = null;
    switch (props.type) {
        case 'breadBottom':
            Ingredient = <div className={Styles.BreadBottom}></div>
            break;
        case 'breadTop':
            Ingredient = <div className={Styles.BreadTop}>
                <div className={Styles.Seeds1}></div>
                <div className={Styles.Seeds2}></div>
            </div>
            break;
        case 'meat':
            Ingredient = <div className={Styles.Meat}></div>
            break;
        case 'cheese':
            Ingredient = <div className={Styles.Cheese}></div>
            break;
        case 'salad':
            Ingredient = <div className={Styles.Salad}></div>
            break;
        case 'bacon':
            Ingredient = <div className={Styles.Bacon}></div>
            break;
        default:
            return null;
    }
    return Ingredient
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;