import React from 'react';
import Styles from './Burger.css';
import Ingredient from './BurgerIngredient/BurgerIngredient';

export default (props) => {
    return (
        <div className={Styles.Burger} >
            <Ingredient type={'breadTop'} />
            <Ingredient type={'cheese'} />
            <Ingredient type={'bacon'} />
            <Ingredient type={'breadBottom'} />
        </div>
    );
}

