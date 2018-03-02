import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import Styles from './BuildControls.module.css';
import {Button} from 'antd';

export default (props) => {
    const ingredientControls = Object.keys(props.IngredientNames).map(ingName => (
        <BuildControl
            Label={ingName}
            key={ingName}
            Add={() => props.AddIngredient(ingName)}
            Remove={() => props.RemoveIngredient(ingName)}
            Disable={props.IngredientNames[ingName] <= 0}
        />

    ));
    return (
        <div className={Styles.BuildControls}>
            <div>
                <h4><strong>Total Price: ${props.TotalPrice.toFixed(2)}</strong></h4>
            </div>
            {ingredientControls}
            <Button onClick={props.ShowModal} disabled={!props.Purchasable}>ORDER NOW</Button>
        </div>);
}