import React, { Fragment } from 'react'
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import classes from "./SideDrawer.css"
import Backdrop from "../../UI/Backdrop/Backdrop"

const sideDrawer = (props) => {

    let sideDrawerClasses = [classes.SideDrawer];
    
    props.opened ? sideDrawerClasses.push(classes.Open) : sideDrawerClasses.push(classes.Close)

    return (
        <Fragment>
            <Backdrop isShow={props.opened} click={props.close}/>
            <div className={sideDrawerClasses.join(' ')}>
                <div className={classes.Logo} >
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>

    )
}

export default sideDrawer
