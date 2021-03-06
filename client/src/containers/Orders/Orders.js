import React, { Component } from 'react'
import Order from "../../components/Order/Order"
import axios from "../../infrastructure/axios-order"
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler"
import Spinner from "../../hoc/withSpinner/withSpinner"
import { connect } from "react-redux";
import { fetchOrders } from "../../store/actionCreators/orderActionCreators"

class Orders extends Component {
    state = {
        orders: [],
        isFetching: true
    }
  
    componentDidMount() {
        this.setState(state => state.isFetching = true);
        
        axios.get("/api/BurgerOrder/GetAllOrders")
        .then(res => {
           
            const orders = res.data.map(item => {
                return {
                    id: item.id,
                    totalPrice: item.burger.totalPrice,
                    ingredients: item.burger.ingredients
                }
            });
            this.setState({orders: orders, isFetching: false})
        }).catch(err => this.setState(state => state.isFetching= false));

    }

    render() {
        let ordersToRender = this.state.orders.map(x => {
            return (<Order key={x.id} ingredients={x.ingredients} totalPrice={x.totalPrice} />)
        })

        return (
            <div>
                <Spinner isFetching={this.state.isFetching}>
                    {ordersToRender}
                </Spinner>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        isFetching: state.order.isFetching
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: dispatch(fetchOrders())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));