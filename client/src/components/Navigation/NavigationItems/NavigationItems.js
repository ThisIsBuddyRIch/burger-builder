import React from 'react'
import classes from "./NavigationItems.css"
import NavigationItem from "./NavigationItem/NavigationItem"
import * as routs from "../../../router/routs"

const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems} >
            <NavigationItem exact link={routs.ROOT}>Burger Builder</NavigationItem>
            <NavigationItem link={routs.ORDERS}>Orders</NavigationItem>
            <NavigationItem link={routs.LOGIN}>Login</NavigationItem>
        </ul>
    )
}

export default navigationItems
