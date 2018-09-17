import React, { Fragment, Component } from 'react'
import classes from "./Modal.css"
import Backdrop from "../Backdrop/Backdrop"

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        
        //console.log(nextProps)
        return nextProps.isShow !== this.props.isShow;
    }

    render() {
        let modalClasses = [classes.Modal]
        this.props.isShow ? modalClasses.push(classes.show) : modalClasses.push(classes.hidden);
        console.log(modalClasses)
        return (
            <Fragment>
                <Backdrop isShow={this.props.isShow} click={this.props.closeModal} />
                <div className={modalClasses.join(" ")}  >
                    {this.props.children}
                </div>
            </Fragment>

        )
    }

}

export default Modal
