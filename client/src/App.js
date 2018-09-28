import React, { Component } from 'react';
import Layout from "./components/Layout/Layout"
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder"
import Checkout from './containers/Checkout/Checkout'
import { Route, Switch } from "react-router-dom";
import Orders from "./containers/Orders/Orders"
import * as routs from "./router/routs"

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path={routs.ORDERS} component={Orders} />
            <Route path={routs.CHECKOUT} component={Checkout} />
            <Route exact path={routs.ROOT} component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
