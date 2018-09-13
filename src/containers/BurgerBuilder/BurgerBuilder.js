import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Burger from "../../components/Burger/Burger"
import BurgerIngredientModel from "../../components/Burger/BurgerIngredient/BurgerIngredientModel"
import * as ingredientConstants from "../../components/Burger/BurgerIngredient/BurgrerIngredientTypes"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"


export class BurgerBuilder extends Component {
  static propTypes = {

  }
  state = {
    ingredients: ingredientConstants.ALL_INGREDIENTS.map(type => new BurgerIngredientModel(type, 0)),
    price : 4,
    purchase: false
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

  checkCanOrder() {
    return  this.state.ingredients.some(x => x.amount > 0);
  }

  purchase = () => {
    if(this.checkCanOrder()){
      this.setState({purchase: true})
    }
  } 

  purchaseCancelHandler = () => {
    this.setState({purchase: false})
  }

  purchaseContinueHandler =() => {
    alert("purchaseContinueHandler!")
  }

  render() {

    let disabledInfo = {};
    this.state.ingredients.forEach(x => {
      disabledInfo[x.type] = x.amount <= 0 
    })

    const canOrder = this.checkCanOrder();

    console.log(disabledInfo);
    return (
      <Fragment>
        <Modal isShow={this.state.purchase} closeModal={this.purchaseCancelHandler}>
          <OrderSummary ingredients={this.state.ingredients} 
            cancel={this.purchaseCancelHandler}
            continue={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
         more={this.addIngredientHandler} 
         less={this.removeIngredientHandler} 
         disabledInfo={disabledInfo} 
         price={this.state.price} 
         canOrder={canOrder}
         purchase={this.purchase}
         />
      </Fragment>
    )
  }
}

export default BurgerBuilder
