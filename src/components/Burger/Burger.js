import React from 'react';
import Styles from './Burger.module.css';
import Ingredient from './BurgerIngredient/BurgerIngredient';
import { Row, Col } from 'antd';

export default (props) => {
    return (
        <Row>
            <Col xs={24}
                sm={{ span: 20, offset: 2 }}
                md={{ span: 14, offset: 5 }}
                lg={{ span: 12, offset: 6 }}
                xl={{ span: 8, offset: 8 }}
                xxl={{span: 6, offset: 9 }}
            >
                <div className={Styles.Burger} >
                    <Ingredient type={'breadTop'} />
                    <Ingredient type={'cheese'} />
                    <Ingredient type={'bacon'} />
                    <Ingredient type={'breadBottom'} />
                </div>
            </Col>
        </Row>
    );
}

