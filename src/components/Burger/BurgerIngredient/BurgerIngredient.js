import React from 'react'
import * as ingredientTypes from "./BurgrerIngredientTypes"
import classes from "./BurgerIngredient.css"
import PropTypes from "prop-types";

const burgerIngredient = (props) => {
    let ingredient = null;


    switch (props.type) {

        case ingredientTypes.BREAD_BOTTOM:
            ingredient = <div className={classes.BreadBottom}></div>
            break;
        case ingredientTypes.BREAD_TOP:
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            )
            break;
        case ingredientTypes.MEAT:
            ingredient = <div className={classes.Meat}></div>
            break;

        case ingredientTypes.CHEESE:
            ingredient = <div className={classes.Cheese}></div>
            break;
        case ingredientTypes.BACON:
            ingredient = <div className={classes.Bacon}></div>
            break;
        case ingredientTypes.SALAD:
            ingredient = <div className={classes.Salad}></div>
            break;
    }

    return ingredient;
}

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default burgerIngredient
