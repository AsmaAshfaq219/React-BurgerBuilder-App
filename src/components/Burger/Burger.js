import React from 'react';
import Styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { Row, Col } from 'antd';

export default (props) => {

    // console.time('My Code'); For performance check
    let transformedIngredient = Object.keys(props.ingredients).map(ing => {
        let ingredients = [];
        for (let i = 0; i < props.ingredients[ing]; i++)
            ingredients.push(<BurgerIngredient key={ing + i} type={ing} />);
        return ingredients;
    })
    // console.timeEnd('My Code');

    // console.time('Max Code');
    // let transformedIngredient = Object.keys(props.ingredients)
    //     .map(ing => [...Array(props.ingredients[ing])].map((_, i) =>
    //         <BurgerIngredient key={ing + i} type={ing} />))
    // console.timeEnd('Max Code')
    if (!transformedIngredient.join(''))
        transformedIngredient = <p>Please Start Adding Ingredeints</p>

    return (
        <Row >
            <Col xs={24}
                sm={{ span: 20, offset: 2 }}
                md={{ span: 14, offset: 5 }}
                lg={{ span: 12, offset: 6 }}
                xl={{ span: 8, offset: 8 }}
                xxl={{ span: 6, offset: 9 }}
            >
                <div className={Styles.Burger} >
                    <BurgerIngredient type={'breadTop'} />
                    {transformedIngredient}
                    <BurgerIngredient type={'breadBottom'} />
                </div>
            </Col>
        </Row>
    );
}

