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
  deleteItemFromShoppingCart,
  createChargeOnCard
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

  /**
   * ensures that a user can delete an item from the cart
   *
   * @returns {void}
   */
  handleDeleteItemFromShoppingCart = () => {
    const cartId = localStorage.getItem("cartId");
    // cartId&& deleteItemFromShoppingCart(cartId, productId)
  };

  /**
   * ensures the user's cart is emptied
   *
   * @returns {void}
   */
  handleEmptyShoppingCart = () => {
    const { emptyShoppingCart } = this.props;
    const cartId = localStorage.getItem("cartId");
    emptyShoppingCart(cartId);
  };

  /**
   * ensures the user's card is charged whenever they place an order
   *
   * @param {Object} token
   *
   * @returns {void}
   */
  handlePayment = token => {
    console.log(token);
    const data = {
      stripeToken: token,
      oredr_id: 1,
      description: "Some test description",
      amount: 125000
    };
    const { createChargeOnCard } = this.props;
    const cartId = localStorage.getItem("cartId");
    createChargeOnCard(cartId, data);
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
          handlePayment={this.handlePayment}
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
    deleteItemFromShoppingCart,
    createChargeOnCard
  }
)(OrderPage);
