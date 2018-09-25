import React from 'react'
import * as ingredientConstants from "./BurgrerIngredientTypes"
import classes from "./BurgerIngredient.css"
import PropTypes from "prop-types";

const burgerIngredient = (props) => {
    let ingredient = null;


    switch (props.type) {

        case ingredientConstants.BREAD_BOTTOM:
            ingredient = <div className={classes.BreadBottom}></div>
            break;
        case ingredientConstants.BREAD_TOP:
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            )
            break;
        case ingredientConstants.MEAT:
            ingredient = <div className={classes.Meat}></div>
            break;

        case ingredientConstants.CHEESE:
            ingredient = <div className={classes.Cheese}></div>
            break;
        case ingredientConstants.BACON:
            ingredient = <div className={classes.Bacon}></div>
            break;
        case ingredientConstants.SALAD:
            ingredient = <div className={classes.Salad}></div>
            break;
    }

    return ingredient;
}

burgerIngredient.propTypes = {
    type: PropTypes.number.isRequired
}

export default burgerIngredient
