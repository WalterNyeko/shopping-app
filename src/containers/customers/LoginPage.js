import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import LoginPageComponent from "../../components/customers/LoginPage";
import { signIn } from "../../store/actions/Customers";

export class LoginPage extends Component {
  state = {
    email: "",
    password: ""
  };

  /**
   * ensures the most recent value for each jsx input element is stored in the state
   * sets the state value of the input basing on its name attribute
   *
   * @param {Object} event
   *
   * @returns {void}
   */
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  /**
   * signs in a user into the app upon successful request
   *
   * @param {Object} event
   *
   * @returns {void}
   */
  handleSubmit = event => {
    event.preventDefault();
    const { signIn } = this.props;
    const { email, password } = this.state;
    const userData = { email, password };
    signIn(userData);
  };
  render() {
    return (
      <Fragment>
        <LoginPageComponent
          state={this.state}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
      </Fragment>
    );
  }
}
export default connect(
  null,
  { signIn }
)(LoginPage);
