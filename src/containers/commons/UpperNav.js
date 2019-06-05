import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import UpperNavComponent from "../../components/commons/UpperNav";
import { getDepartments } from "../../store/actions/Departments";
import {
  getTotalAmount,
  getItemsInCart,
  emptyShoppingCart
} from "../../store/actions/Orders";
import history from "../../helpers/history";

export class UpperNav extends Component {
  state = {
    isLoggedIn: false
  };

  /**
   * 1. retrieves departments, total amount and items in shopping cart
   * 2. sets the state value of isLoggedIn to false
   *
   * @param {Object} props
   *
   * @returns {void}
   */
  retrieveItems = props => {
    const jwtToken = localStorage.getItem("jwt-token");
    const { getDepartments, getTotalAmount, getItemsInCart } = props;
    jwtToken && this.setState({ isLoggedIn: true });
    getDepartments();
    const cartId = localStorage.getItem("cartId");
    cartId && getTotalAmount(cartId);
    getItemsInCart(cartId);
  };

  componentWillMount() {
    return this.retrieveItems(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.myCart.totalAmountOfItemsInCart.total_amount !==
      this.props.myCart.totalAmountOfItemsInCart.total_amount
    ) {
      return this.retrieveItems(nextProps);
    }
  }

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
    const cartId = localStorage.getItem("cartId");
    const {
      emptyShoppingCart,
      myCart: { cartItems }
    } = this.props;
    cartItems && cartItems.length && emptyShoppingCart(cartId);
    const { pathname } = history.location;
    if (pathname === "/") {
      history.push("/home");
    } else {
      history.push("/");
    }
  };
  render() {
    const { isLoggedIn } = this.state;
    const {
      allDepartments,
      myCart: {
        totalAmountOfItemsInCart: { total_amount },
        cartItems
      }
    } = this.props;
    return (
      <Fragment>
        <UpperNavComponent
          isLoggedIn={isLoggedIn}
          allDepartments={allDepartments}
          totalAmount={total_amount}
          handleLogout={this.handleLogout}
          cartItems={cartItems}
        />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  allDepartments: state.departments,
  myCart: state.itemsInCart
});
export default connect(
  mapStateToProps,
  { getDepartments, getTotalAmount, emptyShoppingCart, getItemsInCart }
)(UpperNav);
