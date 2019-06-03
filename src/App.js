import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Routes from "./helpers/Routes";
import LandingPage from "./containers/home/LandingPage";
import PerDepartmentPage from "./containers/home/PerDepartmentPage";
import PerCategoryPage from "./containers/home/PerCategoryPage";
import OrdersPage from "./containers/orders/OrderPage";
import store from "./store/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <BrowserRouter>
            <Switch>
              <Route path={Routes.landingPage} exact component={LandingPage} />
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
            </Switch>
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}
export default App;
