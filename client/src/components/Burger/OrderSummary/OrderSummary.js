import React, {Fragment} from 'react'
import * as ingredientConstants from "../BurgerIngredient/BurgrerIngredientTypes"
import classes from "./OrderSummary.css"
import Button, {BTN_TYPES} from "../../UI/Button/Button"

const orderSummary = (props) => {
const ingredientSummary = props.ingredients.filter(x => x.amount > 0).map(x => {

        return (<li key={x.type}>
                    <span className={classes.capitalize}>{ingredientConstants.INGREDIENT_LABELS[x.type]}</span>:  {x.amount} 
                </li>)
})

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
          {ingredientSummary}
      </ul>
      <Button btnType={BTN_TYPES.danger} click={props.cancel}>Cancel</Button>
      <Button btnType={BTN_TYPES.succes} click={props.continue}>Continue</Button>
    </Fragment>
  )
}

export default orderSummary
