import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Burger from "../../components/Burger/Burger"
import BurgerIngredientModel from "../../components/Burger/BurgerIngredient/BurgerIngredientModel"
import * as ingredientConstants from "../../components/Burger/BurgerIngredient/BurgrerIngredientTypes"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"
import axios from "../../infrastructure/axios-order"
import Spinner from "../../hoc/withSpinner/withSpinner"
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler"
import { connect } from "react-redux";
import { addIngredient, removeIngredient, fetchIngredients } from "../../store/actionCreators/burgerActionCreators"
import { CHECKOUT } from "../../router/routs"

export class BurgerBuilder extends Component {
  static propTypes = {

  }
  state = {

    purchase: false,
  }

  componentDidMount() {
    this.props.fetchIngredients();
  }

  checkCanOrder() {
    return this.props.ingredients.some(x => x.amount > 0);
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
    const serializedIngredients = this.props.ingredients.map(x => {
      return {
        type: x.type,
        amount: x.amount
      }
    });

    this.props.history.push({
      pathname: CHECKOUT,
      state: serializedIngredients
    })
  }





  _getModalInner() {
    return (
      <Spinner isFetching={this.props.isFetching}>
        <OrderSummary ingredients={this.props.ingredients}
          cancel={this.purchaseCancelHandler}
          continue={this.purchaseContinueHandler} />
      </Spinner>
    );
  }

  _getBurger() {

    return (
      <Spinner isFetching={this.props.isFetching}>
        <Burger ingredients={this.props.ingredients} />
      </Spinner>
    )

  }

  render() {

    let disabledInfo = {};
    this.props.ingredients.forEach(x => {
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
          more={this.props.addIngredient}
          less={this.props.removeIngredient}
          disabledInfo={disabledInfo}
          price={this.props.price}
          canOrder={canOrder}
          purchase={this.purchase}
        />
      </Fragment>
    )
  }
}


const mapStateToProps = state => {
  console.log(state)
  return {
    ingredients: state.burger.ingredients,
    price: state.burger.price,
    isFetching: state.burger.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    //addIngredient: (typeIngr) => dispatch({ type: actions.ADD_INGREDIENT, payload: {type: typeIngr}}),
    //removeIngredient: (typeIngr) => dispatch({type: actions.REMOVE_INGREDIENT, payload: { type: typeIngr}})
    addIngredient: (ingredientType) => dispatch(addIngredient(ingredientType)),
    removeIngredient: (ingredientType) => dispatch(removeIngredient(ingredientType)),
    fetchIngredients: () => dispatch(fetchIngredients())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))
