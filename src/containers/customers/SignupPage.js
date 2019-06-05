import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import SignupPageComponent from "../../components/customers/SignupPage";
import { signupUser } from "../../store/actions/Customers";

export class SignupPage extends Component {
  state = {
    username: "",
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
   * signs up a user into the app upon successful request
   *
   * @param {Object} event
   *
   * @returns {void}
   */
  handleSubmit = event => {
    event.preventDefault();
    const { username, email, password } = this.state;
    const userData = { name: username, email, password };
    const { signupUser } = this.props;
    signupUser(userData);
  };
  render() {
    return (
      <Fragment>
        <SignupPageComponent
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          state={this.state}
        />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  username: state.username,
  email: state.email,
  password: state.password
});
export default connect(
  mapStateToProps,
  { signupUser }
)(SignupPage);
