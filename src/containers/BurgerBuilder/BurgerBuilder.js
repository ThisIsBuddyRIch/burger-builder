import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Burger from "../../components/Burger/Burger"
import BurgerIngredientModel from "../../components/Burger/BurgerIngredient/BurgerIngredientModel"
import * as ingredintType from "../../components/Burger/BurgerIngredient/BurgrerIngredientTypes"

export class BurgerBuilder extends Component {
  static propTypes = {

  }

  state = {
    ingredients: [
      new BurgerIngredientModel(ingredintType.BREAD_TOP, 1),
      new BurgerIngredientModel(ingredintType.MEAT, 2),
      new BurgerIngredientModel(ingredintType.CHEESE, 3),
      new BurgerIngredientModel(ingredintType.SALAD, 1),
      new BurgerIngredientModel(ingredintType.BACON, 1),
      new BurgerIngredientModel(ingredintType.BREAD_BOTTOM, 1),
    ]
  }

  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <div>Build controll</div>
      </Fragment>
    )
  }
}

export default BurgerBuilder
