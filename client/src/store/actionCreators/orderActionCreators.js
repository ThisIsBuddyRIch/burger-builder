import {
    FETCH_ORDERS_START, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_ERROR, createAction
} from "./actions"
import axios from "../../infrastructure/axios-order"


const fetchOrders = () => dispatch => {
    dispatch(createAction(FETCH_ORDERS_START))  
    axios.get("/api/BurgerOrder/GetAllOrders")
    .then(res => {
        dispatch(createAction(FETCH_ORDERS_SUCCESS, res.data))
    }).catch(err => dispatch(createAction(FETCH_ORDERS_ERROR)));
}

export {
    fetchOrders
}