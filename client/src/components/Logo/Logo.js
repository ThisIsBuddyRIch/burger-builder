import React from 'react'
import logoImg from "../../assets/images/burger-logo.png"
import classes from "./Logo.css"

const logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logoImg} alt="MyBurger" />
    </div>
  )
}

export default logo
