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

class UpperNav extends Component {
  state = {
    isLoggedIn: false
  };

  componentWillMount() {
    return this.retrieveItems(this.props);
  }

  retrieveItems = props => {
    const jwtToken = localStorage.getItem("jwt-token");
    const { getDepartments, getTotalAmount, getItemsInCart } = props;
    jwtToken && this.setState({ isLoggedIn: true });
    getDepartments();
    const cartId = localStorage.getItem("cartId");
    cartId && getTotalAmount(cartId);
    getItemsInCart(cartId);
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.myCart.totalAmountOfItemsInCart.total_amount !==
      this.props.myCart.totalAmountOfItemsInCart.total_amount
    ) {
      return this.retrieveItems(nextProps);
    }
  }

  handleLogout = () => {
    localStorage.removeItem("jwt-token");
    localStorage.removeItem("user");
    const cartId = localStorage.getItem("cartId");
    const { emptyShoppingCart } = this.props;
    emptyShoppingCart(cartId);
    history.push("/");
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
