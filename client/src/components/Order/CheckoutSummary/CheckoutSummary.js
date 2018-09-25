import React from 'react'
import Burger from "../../Burger/Burger"
import classes from "./CheckoutSummary.css"
import Button, { BTN_TYPES } from "../../UI/Button/Button"

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well</h1>
      <Burger ingredients={props.ingredients} />
      <Button click={props.checkOutCancel} btnType={BTN_TYPES.danger}>Cancel</Button>
      <Button click={props.checkOutContinue} btnType={BTN_TYPES.succes}>Continue</Button>
    </div>
  )
}

export default checkoutSummary
