import {
    FETCH_INGREDIENTS_START, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_ERROR
} from "../actionCreators/actions"

const initState = {
    isFetching: false,
    orders: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_INGREDIENTS_START:
            return { ...state, isFetching: true }
        case FETCH_ORDERS_SUCCESS:
            return setOrders(state, action.payload)
        case FETCH_ORDERS_ERROR:
            return {...state, isFetching: false}
        default:
            return state;
    }

}

const setOrders = (state, payload) => {
    const orders = payload.map(item => {
        return {
            id: item.id,
            totalPrice: item.burger.totalPrice,
            ingredients: item.burger.ingredients
        }
    });

    return {...state, orders: orders, isFetching: true}
}

export default reducer;