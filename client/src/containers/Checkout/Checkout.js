import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import BurgerIngredientModel from "../../components/Burger/BurgerIngredient/BurgerIngredientModel"
import * as burgerConstants from "../../components/Burger/BurgerIngredient/BurgrerIngredientTypes"
import { Route, withRouter } from "react-router-dom";
import ContactData  from './ContactData/ContactData';
import { connect } from "react-redux";


export class Checkout extends Component {
    onCheckOutCancel = () => {
        this.props.history.goBack();
    }

    onCheckOutContinue = () => {
        this.props.history.replace("/checkout/contact-data")
    }

    // afterOrderSubmit = () =>{
    //     this.props.history.push("/")
    // }

    render() {
        return (
            <div>
                <CheckoutSummary
                    checkOutCancel={this.onCheckOutCancel}
                    checkOutContinue={this.onCheckOutContinue}
                    ingredients={this.props.ingredients} />

                <Route path={this.props.match.url + "/contact-data"} component={ContactData} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout)
