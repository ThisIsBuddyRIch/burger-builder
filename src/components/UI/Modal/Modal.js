import React, { Fragment } from 'react'
import classes from "./Modal.css"
import Backdrop from "../Backdrop/Backdrop"

const modal = (props) => {

    let modalClass = props.isShow ? classes.show : classes.hidden;
    modalClass += " " + classes.Modal
    return (
        <Fragment>
            <Backdrop isShow={props.isShow} click={props.closeModal} />
            <div className={modalClass}  >
                {props.children}
            </div>
        </Fragment>

    )
}

export default modal
