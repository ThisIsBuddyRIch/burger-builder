import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Burger from "../../components/Burger/Burger"
import BurgerIngredientModel from "../../components/Burger/BurgerIngredient/BurgerIngredientModel"
import * as ingredientConstants from "../../components/Burger/BurgerIngredient/BurgrerIngredientTypes"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"


export class BurgerBuilder extends Component {
  static propTypes = {

  }
  state = {
    ingredients: ingredientConstants.ALL_INGREDIENTS.map(type => new BurgerIngredientModel(type, 0)),
    price : 4
  } 

  addIngredientHandler = (type) => {
    let newIngredinets = this.state.ingredients.map(x => {
        if(x.type === type){
          return x.add();
        }
        return x;
    })
    let newPrice = this.state.price + ingredientConstants.INGREDIENT_PRICE[type]
    this.setState({
      ingredients: newIngredinets,
      price: newPrice
    })
  } 

  removeIngredientHandler = (type) => {
    let newIngredinets = this.state.ingredients.map(x => {
      if(x.type === type){
        return x.remove();
      }
      return x;
    })

    let newPrice = this.state.price - ingredientConstants.INGREDIENT_PRICE[type]
    this.setState({
      ingredients: newIngredinets,
      price: newPrice
    })
  }


  render() {

    let disabledInfo = {};
    this.state.ingredients.forEach(x => {
      disabledInfo[x.type] = x.amount <= 0 
    })

    console.log(disabledInfo);
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
         more={this.addIngredientHandler} 
         less={this.removeIngredientHandler} 
         disabledInfo={disabledInfo} 
         price={this.state.price} />
      </Fragment>
    )
  }
}

export default BurgerBuilder
