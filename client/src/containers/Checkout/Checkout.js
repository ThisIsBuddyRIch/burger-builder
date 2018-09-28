import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, withRouter } from "react-router-dom";
import ContactData  from './ContactData/ContactData';
import { connect } from "react-redux";
import * as routs from "../../router/routs"

export class Checkout extends Component {
    onCheckOutCancel = () => {
        this.props.history.goBack();
    }

    onCheckOutContinue = () => {
        this.props.history.replace(routs.CHECKOUT + routs.CONTACT_DATA);
    }

    componentWillMount(){
        if(this.props.ingredients.every(x => x.amount === 0)){
            this.props.history.push(routs.ROOT)
        }
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    checkOutCancel={this.onCheckOutCancel}
                    checkOutContinue={this.onCheckOutContinue}
                    ingredients={this.props.ingredients} />

                <Route path={this.props.match.url + routs.CONTACT_DATA} component={ContactData} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burger.ingredients
    }
}

export default connect(mapStateToProps)(Checkout)
