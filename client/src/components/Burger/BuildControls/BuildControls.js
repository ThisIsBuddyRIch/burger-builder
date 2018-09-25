import React from 'react'
import * as ingredientConstants from "../../Burger/BurgerIngredient/BurgrerIngredientTypes"
import classes from "./BuildControls.css"
import BuildControl from "./BuildContol/BuildControl"

const controls = ingredientConstants.ALL_INGREDIENTS.map(type => {
  return { label: ingredientConstants.INGREDIENT_LABELS[type], type }
})

const buildControls = (props) => {
  return (

    <div className={classes.BuildControls}>
      <p>Current price:
        <span className={classes.Price}>
         {props.price.toFixed(2)}
        </span>
      </p>
      {controls.map((ctrl, index) => {
        return <BuildControl
          more={() => props.more(ctrl.type)}
          less={() => props.less(ctrl.type)}
          key={ctrl.type + index.toString()}
          label={ctrl.label}
          disabled={props.disabledInfo[ctrl.type]}
        />
      })}

      <button className={classes.OrderButton} disabled={!props.canOrder} onClick={props.purchase}>Order</button>
    </div>
  )
}

export default buildControls
