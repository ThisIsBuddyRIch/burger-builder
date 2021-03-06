import React from 'react'
import classes from './BuildControl.css'

const buildContol = (props) => {
  return (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} disabled={props.disabled} onClick={props.less} >Less</button>
        <button className={classes.More} onClick={props.more} >More</button>
    </div>
  )
}

export default buildContol
