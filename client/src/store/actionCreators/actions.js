export const ADD_INGREDIENT = "ADD_INGREDIENT"
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT"
export const FETCH_INGREDIENTS_START = "FETCH_INGREDIENTS_START";
export const FETCH_INGREDIENTS_SUCCESS = "FETCH_INGREDIENTS_SUCCESS";
export const FETCH_INGREDIENTS_ERROR = "FETCH_INGREDIENTS_ERROR"; 


export const FETCH_ORDERS_START = "FETCH_ORDERS_START";
export const FETCH_ORDERS_SUCCESS = "FETCH_ORDERS_SUCCESS";
export const FETCH_ORDERS_ERROR = "FETCH_ORDERS_ERROR";



export const createAction = (type, payload) => {
    return {
        type: type,
        payload: payload
    }
}