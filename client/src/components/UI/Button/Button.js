import React from 'react'
import classes from "./Button.css"

export const BTN_TYPES = {
    danger: "Danger",
    succes: "Success"
}

const button = (props) => {
  return (
        <button className={[classes.Button, classes[props.btnType]].join(' ')} onClick={props.click} >
            {props.children}
        </button>
  )
}

export default button
