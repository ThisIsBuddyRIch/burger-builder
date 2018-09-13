import React from 'react'
import classes from "./Burger.css"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"
import * as burgerTypes from "./BurgerIngredient/BurgrerIngredientTypes.js"

const burger = (props) => {

  
   
    let preparedIngredients = props.ingredients.reduce((acc, x) => {
            return acc.concat(x.convert())
        }, []).map((type, index) => <BurgerIngredient type={type} key={type + index} />)

    console.log(preparedIngredients);

    if(preparedIngredients.length === 0){
        preparedIngredients = <p>Please start adding ingredients</p>
    }

    return (
        <div className={classes.Burger}>
        <BurgerIngredient type={burgerTypes.BREAD_TOP} />
            {preparedIngredients}
        <BurgerIngredient type={burgerTypes.BREAD_BOTTOM} />
        </div>
    )
}

export default burger
