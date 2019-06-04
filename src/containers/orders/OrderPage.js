import React, { Component, Fragment } from "react";
import OrderPageComponent from "../../components/orders/OrderPage";
import UpperNav from "../commons/UpperNav";
import Footer from "../commons/Footer";
import { connect } from "react-redux";
import { getDepartments } from "../../store/actions/Departments";
import {
  getItemsInCart,
  getTotalAmount,
  emptyShoppingCart,
  deleteItemFromShoppingCart
} from "../../store/actions/Orders";

class OrderPage extends Component {
  componentWillMount = () => {
    const {
      getItemsInCart,
      getDepartments,
      getTotalAmount,
      deleteItemFromShoppingCart
    } = this.props;
    getDepartments();
    const cartId = localStorage.getItem("cartId");
    cartId && getItemsInCart(cartId);
    cartId && getTotalAmount(cartId);
  };
  handleDeleteItemFromShoppingCart = () => {
    const cartId = localStorage.getItem("cartId");
    // cartId&& deleteItemFromShoppingCart(cartId, productId)
  };

  handleEmptyShoppingCart = () => {
    const { emptyShoppingCart } = this.props;
    const cartId = localStorage.getItem("cartId");
    emptyShoppingCart(cartId);
  };
  render() {
    const { departments } = this.props.allDepartments;
    const {
      cartItems,
      totalAmountOfItemsInCart: { total_amount }
    } = this.props.myCart;

    return (
      <Fragment>
        <UpperNav />
        <OrderPageComponent
          cartItems={cartItems}
          totalAmount={total_amount}
          handleClick={this.handleEmptyShoppingCart}
        />
        <Footer departments={departments} />
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
  {
    getDepartments,
    getItemsInCart,
    getTotalAmount,
    emptyShoppingCart,
    deleteItemFromShoppingCart
  }
)(OrderPage);
