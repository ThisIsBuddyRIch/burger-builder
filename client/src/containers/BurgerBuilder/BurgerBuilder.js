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
import * as actions from "../../store/actions"

export class BurgerBuilder extends Component {
  static propTypes = {

  }
  state = {
    // ingredients: ingredientConstants.ALL_INGREDIENTS.map(type => new BurgerIngredientModel(type, 0)),
    // price: 4,
    purchase: false,
    isFetching: false
  }

  componentDidMount() {
    //this.fetchIngredients();
  }

  toggleFetching(state) {
    this.setState({ isFetching: state })
  }

  fetchIngredients() {
    this.toggleFetching(true);

    axios.get("/api/Ingredient/GetIngredients").then(x => {
      const ingredients = x.data.map(x => {
        return new BurgerIngredientModel(x.type, x.amount);
      })
      this.setState({ ingredients: ingredients });
      this.toggleFetching(false);
    }).catch(err => this.toggleFetching(false));
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
      pathname: "/checkout",
      state: serializedIngredients
    })
  }





  _getModalInner() {
    return (
      <Spinner isFetching={this.state.isFetching}>
        <OrderSummary ingredients={this.props.ingredients}
          cancel={this.purchaseCancelHandler}
          continue={this.purchaseContinueHandler} />
      </Spinner>
    );
  }

  _getBurger() {
    // let result = null;

    // if (this.state.isFetching) {
    //   result = <Spinner />
    // } else {
    //   result = 
    // }
    // return result;

    return (
      <Spinner isFetching={this.state.isFetching}>
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
    ingredients: state.ingredients,
    price: state.price
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addIngredient: (typeIngr) => dispatch({ type: actions.ADD_INGREDIENT, payload: {type: typeIngr}}),
    removeIngredient: (typeIngr) => dispatch({type: actions.REMOVE_INGREDIENT, payload: { type: typeIngr}})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))
