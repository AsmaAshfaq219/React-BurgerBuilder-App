import React, { Fragment, Component } from 'react';

class OrderSummary extends Component {
    shouldComponentUpdate(prevProps) {
        return prevProps.Ingredients !== this.props.Ingredients;
    }
    componentWillUpdate() {
        console.log('OrderSummary Will Update');
    }
    render() {
        const orderSummary = Object.keys(this.props.Ingredients)
            .map(ing => <li key={ing + 32} style={{ textTransform: 'capitalize' }}>{ing}: {this.props.Ingredients[ing]}</li>);
        return (
            <Fragment>
                <h4>Confirm your Delicious Order!!</h4>
                <ul>
                    {orderSummary}
                </ul>
                <p><strong>Total Price: ${this.props.Price.toFixed(2)}</strong></p>
            </Fragment>
        )
    }
}
// export default (props) => {
//     const orderSummary = Object.keys(props.Ingredients)
//         .map(ing => <li key={ing + 32} style={{textTransform: 'capitalize' }}>{ing}: {props.Ingredients[ing]}</li>);
//         return (
//         <Fragment>
//             <h4>Confirm your Delicious Order!!</h4>
//             <ul> 
//                 {orderSummary}
//             </ul>
//             <p><strong>Total Price: ${props.Price.toFixed(2)}</strong></p>
//         </Fragment>
//     );
// }   
export default OrderSummary;