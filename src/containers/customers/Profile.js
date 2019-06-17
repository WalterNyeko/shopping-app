import React, { Fragment } from "react";
import { connect } from "react-redux";
import ProfileComponent from "../../components/customers/Profile";
import UpperNav from "../../components/commons/UpperNav";
import Footer from "../../components/commons/Footer";
import { getDepartments } from "../../store/actions/Departments";
import {
  getCustomersDetails,
  updateProfile,
  updateAddress,
  updateCreditCard,
  getShippingRegions
} from "../../store/actions/Customers";
import history from "../../helpers/history";

export class Profile extends React.Component {
  state = {
    isLoggedIn: false,
    name: "",
    email: "",
    address_1: "",
    address_2: "",
    city: "",
    region: "",
    postal_code: "",
    country: "",
    shipping_region_id: "",
    credit_card: "",
    day_phone: "",
    eve_phone: "",
    mob_phone: "",
    password: "",
    errors: {}
  };
  componentWillMount() {
    const {
      getDepartments,
      getCustomersDetails,
      getShippingRegions
    } = this.props;
    getDepartments();
    const jwtToken = localStorage.getItem("jwt-token");
    jwtToken && this.setState({ isLoggedIn: true });
    jwtToken && getCustomersDetails();
    getShippingRegions();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  hanleEditProfile = event => {
    event.preventDefault();
    const { updateProfile } = this.props;
    const {
      name,
      email,
      password,
      day_phone,
      eve_phone,
      mob_phone
    } = this.state;
    const data = {
      name,
      email,
      password,
      day_phone,
      eve_phone,
      mob_phone
    };
    if (!name) {
      return this.inputErrors("name", "Please provide your name");
    } else if (!email) {
      return this.inputErrors("email", "Please provide your email address");
    } else {
      updateProfile(data);
    }
  };

  hanleEditAddress = event => {
    event.preventDefault();
    const { updateAddress } = this.props;
    const data = {
      address_1: this.state.address_1,
      address_2: this.state.address_2,
      city: this.state.city,
      region: this.state.region,
      postal_code: this.state.postal_code,
      country: this.state.country,
      shipping_region_id: this.state.shipping_region_id
    };
    if (!this.state.address_1) {
      return this.inputErrors("address_1", "Field address 1 is mandatory");
    } else if (!this.state.city) {
      return this.inputErrors("city", "Please provide your city");
    } else if (!this.state.region) {
      return this.inputErrors("region", "Please provide your region");
    } else if (!this.state.postal_code) {
      return this.inputErrors("postal_code", "Please provide your postal code");
    } else if (!this.state.country) {
      return this.inputErrors("country", "Please provide your country");
    } else if (!this.state.shipping_region_id) {
      return this.inputErrors(
        "shipping_region_id",
        "Please select your shipping region"
      );
    } else {
      updateAddress(data);
    }
  };

  hanleEditCreditCard = event => {
    event.preventDefault();
    const { updateCreditCard } = this.props;
    const { credit_card } = this.state;
    const data = {
      credit_card
    };
    if (!credit_card) {
      return this.inputErrors(
        "credit_card",
        "Please provide your credit card number"
      );
    } else {
      updateCreditCard(data);
    }
  };

  handleClickNav = id => {
    history.push(`/department/${id}`);
  };

  /**
   * renders the validation errors for input fields
   *
   * @param {string} errorKey
   * @param {string} message
   *
   * @returns {void}
   */
  inputErrors = (errorKey, message) => {
    this.setState({
      ...(this.state.errors[errorKey] = message)
    });
  };

  /**
   * logs out a user from the app by doing the following
   * 1. clears the users token from localStorage
   * 2. clears the users name from loaclStorage
   * 3. redirects user to the landing page
   *
   * @returns {void}
   */
  handleLogout = () => {
    localStorage.removeItem("jwt-token");
    localStorage.removeItem("user");
    const { pathname } = history.location;
    if (pathname === "/") {
      history.push("/home");
    } else {
      history.push("/");
    }
  };

  render() {
    const {
      allDepartments,
      allDepartments: { departments },
      theCustomer,
      theCustomer: { shippingRegions }
    } = this.props;
    const { isLoggedIn } = this.state;
    const { shipping_region_id } = theCustomer.customerDetails;
    const theRegion = shippingRegions.filter(
      element => element.shipping_region_id === shipping_region_id
    );
    let currentRegion;
    if (theRegion.length) {
      currentRegion = theRegion[0].shipping_region;
    }

    return (
      <Fragment>
        <UpperNav
          allDepartments={allDepartments}
          isLoggedIn={isLoggedIn}
          handleClickNav={this.handleClickNav}
          handleLogout={this.handleLogout}
        />
        <ProfileComponent
          theCustomer={theCustomer}
          shippingRegions={shippingRegions}
          handleInputChange={this.handleInputChange}
          state={this.state}
          hanleEditProfile={this.hanleEditProfile}
          hanleEditAddress={this.hanleEditAddress}
          hanleEditCreditCard={this.hanleEditCreditCard}
          currentRegion={currentRegion}
        />
        <Footer departments={departments} />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  allDepartments: state.departments,
  theCustomer: state.customers
});
export default connect(
  mapStateToProps,
  {
    getDepartments,
    getCustomersDetails,
    updateProfile,
    updateAddress,
    updateCreditCard,
    getShippingRegions
  }
)(Profile);
