import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../Ui/Button/Button';


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return <li key={igKey}><span style={{TextTransform: 'capitalize'}}>{igKey}</span>:  {props.ingredients[igKey]}</li>
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price}</strong></p>
            <p>Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;