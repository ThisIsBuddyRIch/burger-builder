import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Burger from "../../components/Burger/Burger"
import BurgerIngredientModel from "../../components/Burger/BurgerIngredient/BurgerIngredientModel"
import * as ingredientConstants from "../../components/Burger/BurgerIngredient/BurgrerIngredientTypes"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"
import axios from "../../infrastructure/axios-order"
import Spinner from "../../components/UI/Spinner/Spinner"
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler"

export class BurgerBuilder extends Component {
  static propTypes = {

  }
  state = {
    ingredients: ingredientConstants.ALL_INGREDIENTS.map(type => new BurgerIngredientModel(type, 0)),
    price: 4,
    purchase: false,
    isFetching: false
  }

  componentDidMount() {
   this.fetchIngredients();
  }

  toggleFetching(state){
    this.setState({isFetching:state})
  }

  fetchIngredients(){
    this.toggleFetching(true);

    axios.get("/api/Ingredient/GetIngredients").then(x => {
      const ingredients = x.data.map(x => {
        return new BurgerIngredientModel(x.type, x.amount);
      })
      this.setState({ ingredients: ingredients });
      this.toggleFetching(false);
    }).catch(err => this.toggleFetching(false));
  }

  addIngredientHandler = (type) => {
    let newIngredinets = this.state.ingredients.map(x => {
      if (x.type === type) {
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
      if (x.type === type) {
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
    return this.state.ingredients.some(x => x.amount > 0);
  }

  purchase = () => {
    if (this.checkCanOrder()) {
      this.setState({ purchase: true })
    }
  }

  purchaseCancelHandler = () => {
    this.setState({ purchase: false })
  }

  purchaseContinueHandler = () => {
    this.toggleFetching(false);

    axios.post("/api/BurgerOrder/CreateBurgerOrder", {
      customerApiModel: {
        address: {
          street: "Nevsky",
          zipCode: "455000",
          country: "Russia"
        },
        name: "Kirill",
        email: "test@mail.ru"
      },
      ingredients: this.state.ingredients.filter(item => item.amount > 0),
      deliveryMethod: "fast"
    }).then(x => this.setState({ isFetching: false, purchase: false }))
      .catch(x => this.setState({ isFetchingP: false, purchase: false }))
  }


  _getModalInner() {
    let result = null;

    if (this.state.isFetching) {
      result = <Spinner />
    } else {
      result = <OrderSummary ingredients={this.state.ingredients}
        cancel={this.purchaseCancelHandler}
        continue={this.purchaseContinueHandler}
      />;
    }
    return result;
  }

  _getBurger(){
    let result = null;

    if(this.state.isFetching){
      result = <Spinner />
    } else {
      result =  <Burger ingredients={this.state.ingredients} />
    }
    return result;
  }

  render() {

    let disabledInfo = {};
    this.state.ingredients.forEach(x => {
      disabledInfo[x.type] = x.amount <= 0
    })

    const canOrder = this.checkCanOrder();
    const modalInner = this._getModalInner();
    const burger = this._getBurger();


    return (
      <Fragment>
        <Modal isShow={this.state.purchase} closeModal={this.purchaseCancelHandler}>
          {modalInner}
        </Modal>
        {burger}
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

export default withErrorHandler(BurgerBuilder, axios)
