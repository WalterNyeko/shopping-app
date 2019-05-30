import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Routes from './helpers/Routes';
import LandingPage from './containers/home/LandingPage';
import SignupPage from './containers/customers/SignupPage';

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route path={Routes.landingPage} exact component={LandingPage}/>
            <Route path={Routes.signupPage} exact component={SignupPage}/>

          </Switch>
        </BrowserRouter>
      </Fragment>
    )
  }
}
export default App;