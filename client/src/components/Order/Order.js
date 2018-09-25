import React from 'react'
import classes from './Order.css'
import * as ingredientConstants from "../../components/Burger/BurgerIngredient/BurgrerIngredientTypes"

const order = (props) => {
    console.log(props)
    let ingredients = props.ingredients.map(ig => {
        return (<span key={ig.type} className={classes.Ingredient}>{ingredientConstants.INGREDIENT_LABELS[ig.type]} ({ig.amount}) </span>)
    })

   return (
       
    <div className={classes.Order}>
      <p>{ingredients}</p>
      <p>Price : <strong>{props.totalPrice}</strong></p>
    </div>
  )
}

export default order
