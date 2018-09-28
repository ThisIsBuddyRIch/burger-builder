import {
    createAction, ADD_INGREDIENT,
    REMOVE_INGREDIENT, FETCH_INGREDIENTS_START, 
    FETCH_INGREDIENTS_SUCCESS, FETCH_INGREDIENTS_ERROR
} from "./actions";
import axios from "../../infrastructure/axios-order"


const addIngredient = (ingredinetType) => {
    return createAction(ADD_INGREDIENT, ingredinetType)

}

const removeIngredient = (ingredinetType) => {
    return createAction(REMOVE_INGREDIENT, ingredinetType);
}

const fetchIngredients = () => dispatch => {
    dispatch(createAction(FETCH_INGREDIENTS_START))

    axios.get("/api/Ingredient/GetIngredients").then(x => {
        dispatch(createAction(FETCH_INGREDIENTS_SUCCESS, x.data))
    }).catch(err => dispatch(createAction(FETCH_INGREDIENTS_ERROR)));
}


export {
    addIngredient,
    removeIngredient,
    fetchIngredients
}