import React, { Fragment, Component } from 'react'
import classes from "./Layout.css"
import Toolbar from "../Navigation/Toolbar/Toolbar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"

class Layout extends Component {

    state ={
       showSideDrawer: false 
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () =>{
        this.setState(state => {return {showSideDrawer: !state.showSideDrawer}});
    }

    render() {
        return (
            <Fragment>
                <Toolbar toggleDrawer={this.sideDrawerToggleHandler} />
                <SideDrawer close={this.sideDrawerClosedHandler} opened={this.state.showSideDrawer} />
                <main className={classes.Content} >
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}

export default Layout
