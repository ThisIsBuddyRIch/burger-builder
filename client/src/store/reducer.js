import BurgerIngredientModel from "../components/Burger/BurgerIngredient/BurgerIngredientModel"
import * as ingredientConstants from "../components/Burger/BurgerIngredient/BurgrerIngredientTypes"
import * as actions from "./actions"


const initState = {
    ingredients: ingredientConstants.ALL_INGREDIENTS.map(type => new BurgerIngredientModel(type, 0)),
    price: 4,
}

const reducer = (state = initState, action) => {
    console.log(action)
    switch (action.type) {
        case actions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: state.ingredients.map(item => {
                    if (item.type === action.payload.type) {
                        return item.add();
                    }
                    return item;
                }),
                price: state.price + ingredientConstants.INGREDIENT_PRICE[action.payload.type]
            }
        case actions.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: state.ingredients.map(item => {
                    if (item.type === action.payload.type) {
                        return item.remove();
                    }
                    return item;
                }),
                price: state.price - ingredientConstants.INGREDIENT_PRICE[action.payload.type]
            }
        default:
            return state;
    }
}

export default reducer;