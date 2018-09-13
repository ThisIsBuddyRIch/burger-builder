import React from 'react'
import classes from "./Burger.css"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"
import * as burgerTypes from "./BurgerIngredient/BurgrerIngredientTypes.js"


const burger = (props) => {

    const preparedIngredients = props.ingredients.reduce((acc, x) => {
        return acc.concat(x.convert())
    }, []).map((type, index) => <BurgerIngredient type={type} key={type + index} />)

    return (
        <div className={classes.Burger}>
            {preparedIngredients}
        </div>
    )
}

export default burger
