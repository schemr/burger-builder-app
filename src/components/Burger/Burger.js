import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.css'

const burger = (props) => {
    let transIngredients = Object.keys(props.ingredients).map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
            return <BurgerIngredient key={ingredientKey+i} type={ingredientKey} />
        })
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (transIngredients.length === 0){
        transIngredients = <p>Please Start Burger Builder</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;