import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Burger from "../../components/Burger/Burger"

export class BurgerBuilder extends Component {
  static propTypes = {

  }

  render() {
    return (
      <Fragment>
        <Burger />
        <div>Build controll</div>
      </Fragment>
    )
  }
}

export default BurgerBuilder
