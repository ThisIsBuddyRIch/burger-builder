import React, { Component } from 'react'
import Button, { BTN_TYPES } from "../../../components/UI/Button/Button";
import classes from "./ContactData.css"
import axios from "../../../infrastructure/axios-order"
import { withRouter } from "react-router-dom";
import Spinner from "../../../hoc/withSpinner/withSpinner"
import Input from "../../../components/UI/Input/Input"
import { connect } from "react-redux";

export class ContactData extends Component {
    state = {
        name: "",
        email: "",
        address: {
            street: "",
            zipCode: "",
        },

        isFetching: false,
    }

    componentDidMount() {
    }

    onChangeNameHndl = (e) => {
        this.setState({name: e.target.value})
    }

    onChangeEmailHandl = (e) => {
        this.setState({email: e.target.value})
    }

    onChangeStreetHndl = (e) => {
        const value = e.target.value

        this.setState(prevState => {
            return {
                address: {
                    ...prevState.address,
                    street: value
                }
            }
        })
    }

    onChangeZipCodeHndl = (e) => {
        const value = e.target.value;

        this.setState(prevState => {

            return {
                address: {
                    ...prevState.address,
                    zipCode: value
                }
            }
        })
    }


    postOrder = (e) => {
        e.preventDefault();
        const ingr = this.props.ingredients.filter(item => item.amount > 0);

        this.toggleFetching(true);
    
        axios.post("/api/BurgerOrder/CreateBurgerOrder", {
            customerApiModel: {
                address: {
                    ...this.state.address,
                    country: "Russia"
                },
                name: this.state.name,
                email: this.state.email
            },
            ingredients: ingr,
            deliveryMethod: "fast"
        }).then(x => {
            this.toggleFetching(false)
            this.props.history.push("/");
        })
            .catch(x => this.toggleFetching(false));
    }

    toggleFetching(isFetching) {
        this.setState({isFetching: isFetching})
    }

    render() {

        return (
            <Spinner isFetching={this.state.isFetching}>
                <div className={classes.ContactData}>
                    <h4>Enter you Contact Data</h4>
                    <form>
                        <Input type="text" name="name" placeholder="Your Name" onChange={this.onChangeNameHndl} />
                        <Input type="text" name="email" placeholder="Your Email" onChange={this.onChangeEmailHandl}  />
                        <Input type="text" name="street" placeholder="Your Street" onChange={this.onChangeStreetHndl} />
                        <Input type="text" name="postal" placeholder="Your Postal" onChange={this.onChangeZipCodeHndl} />
                        <Button btnType={BTN_TYPES.succes} click={this.postOrder} >Order</Button>
                    </form>
                </div>
            </Spinner>)
    }
}

const mapStateToProps = state => {
    console.log("conndata", state);
    return {
        ingredients: state.burger.ingredients,
    }
}

export default connect(mapStateToProps)(ContactData)
