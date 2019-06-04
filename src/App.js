import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { Route, Switch } from "react-router-dom";
import Routes from "./helpers/Routes";
import LandingPage from "./containers/home/LandingPage";
import PerDepartmentPage from "./containers/home/PerDepartmentPage";
import PerCategoryPage from "./containers/home/PerCategoryPage";
import OrdersPage from "./containers/orders/OrderPage";
import store from "./store/store";
import ProductDeatilsPage from "./containers/products/ProductDeatilsPage";
import history from "./helpers/history";
import Home from "./containers/home/Home";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Router history={history}>
            <Switch>
              <Route path={Routes.landingPage} exact component={LandingPage} />
              <Route path={Routes.homePage} exact component={Home} />
              <Route
                path={Routes.departmentProducts}
                exact
                component={PerDepartmentPage}
              />
              <Route
                path={Routes.categoryProducts}
                exact
                component={PerCategoryPage}
              />
              <Route path={Routes.orderPage} exact component={OrdersPage} />
              <Route
                path={Routes.productDetailsPage}
                exact
                component={ProductDeatilsPage}
              />
            </Switch>
          </Router>
        </Fragment>
      </Provider>
    );
  }
}
export default App;
