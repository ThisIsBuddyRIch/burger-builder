import React from 'react'
import classes from "./Spinner.css"

const spinner = () => {
    return (
        <div className={classes.loaderWrapper}>
            <div className={classes.loader}>
            </div>
        </div>
    )
}

export default spinner
