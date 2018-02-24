import React from 'react';
import Styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { Row, Col } from 'antd';

export default (props) => {

    // console.time('Random Person Code');
    // const transformedIngredient2 = [];
    // Object.keys(props.ingredients).forEach((v) => {
    //     for (let i = 0; i < props.ingredients[v]; ++i)
    //         transformedIngredient2.push(<BurgerIngredient type={v} key={v + i} />)
    // });
    // console.timeEnd('Random Person Code');

    // console.time('My Code'); For performance check
    let transformedIngredient = Object.keys(props.ingredients).map(ing => {
        let ingredients = [];
        for (let i = 0; i < props.ingredients[ing]; i++)
            ingredients.push(<BurgerIngredient key={ing + i} type={ing} />);
        return [...ingredients];
    })
    // console.timeEnd('My Code');
    if (!transformedIngredient.join(''))
        transformedIngredient = <p>Please Start Adding Ingredeints</p>

    // console.time('Max Code');
    // const transformedIngredient = Object.keys(props.ingredients)
    //     .map(ing => [...Array(props.ingredients[ing])].map((_, i) =>
    //         <BurgerIngredient key={ing + i} type={ing} />))
    // console.timeEnd('Max Code')
    return (
        <Row>
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

