import React from 'react'
import classes from "./Burger.css"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"
import * as burgerTypes from "./BurgerIngredient/BurgrerIngredientTypes.js"

const burger = (props) => {
  return (
    <div className={classes.Burger}>
        <BurgerIngredient type={burgerTypes.BREAD_TOP} />
        <BurgerIngredient type={burgerTypes.CHEESE} />
        <BurgerIngredient type={burgerTypes.MEAT} />
        <BurgerIngredient type={burgerTypes.BREAD_BOTTOM} />
    </div>
  )
}

export default burger
