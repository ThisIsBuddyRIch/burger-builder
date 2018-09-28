import BurgerIngredientModel from "../../components/Burger/BurgerIngredient/BurgerIngredientModel"
import * as ingredientConstants from "../../components/Burger/BurgerIngredient/BurgrerIngredientTypes"
import * as actions from "../actionCreators/actions"


const initState = {
    ingredients: ingredientConstants.ALL_INGREDIENTS.map(type => new BurgerIngredientModel(type, 0)),
    price: 4,
    isFetching: false
}

const reducer = (state = initState, action) => {
    console.log(action)
    switch (action.type) {
        case actions.ADD_INGREDIENT:
            return addIngredient(state, action.payload)
        case actions.REMOVE_INGREDIENT:
            return removeIngredients(state, action.payload)
        case actions.FETCH_INGREDIENTS_START:
            return {...state, isFetching: true }
        case actions.FETCH_INGREDIENTS_SUCCESS:
            return setIngredients(state, action.payload)
        case actions.FETCH_INGREDIENTS_ERROR:
            return {...state, isFetching: false }
        default:
            return state;
    }
}

const setIngredients = (state, payload) => {
    const ingredients = payload.map(x => {
        return new BurgerIngredientModel(x.type, x.amount);
    })
    return {
        ...state,
        ingredients: ingredients,
        isFetching: false
    }
}

const addIngredient = (state, ingredientType) => {
    console.log(state, ingredientType)
    return {
        ...state,
        ingredients: state.ingredients.map(item => {
            if (item.type === ingredientType) {
                return item.add();
            }
            return item;
        }),
        price: state.price + ingredientConstants.INGREDIENT_PRICE[ingredientType]
    }
}

const removeIngredients = (state, ingredientType) => {
    return {
        ...state,
        ingredients: state.ingredients.map(item => {
            if (item.type === ingredientType) {
                return item.remove();
            }
            return item;
        }),
        price: state.price - ingredientConstants.INGREDIENT_PRICE[ingredientType]
    }
}


export default reducer;