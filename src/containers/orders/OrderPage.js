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
  createChargeOnCard,
  editItemFromShoppingCart
} from "../../store/actions/Orders";

export class OrderPage extends Component {
  componentWillMount = () => {
    const { getItemsInCart, getDepartments, getTotalAmount } = this.props;
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
  handleClickRemoveItem = itemId => {
    const cartId = localStorage.getItem("cartId");
    const { deleteItemFromShoppingCart } = this.props;
    deleteItemFromShoppingCart(cartId, itemId);
  };

  /**
   * ensures that a user can increase quantity an item from the cart
   *
   * @returns {void}
   */
  handleClickIncreaseItemQuantity = itemId => {
    const cartId = localStorage.getItem("cartId");
    const { editItemFromShoppingCart } = this.props;
    const theSelectedObject = this.props.myCart.cartItems.filter(
      item => item.item_id === itemId
    );
    let { quantity } = theSelectedObject[0];
    quantity++;
    const data = {
      item_id: itemId,
      quantity
    };
    editItemFromShoppingCart(cartId, data);
  };

  /**
   * ensures that a user can decrease quantity an item from the cart
   *
   * @returns {void}
   */
  handleClickDecreaseItemQuantity = itemId => {
    const cartId = localStorage.getItem("cartId");
    const { editItemFromShoppingCart } = this.props;
    const theSelectedObject = this.props.myCart.cartItems.filter(
      item => item.item_id === itemId
    );
    let { quantity } = theSelectedObject[0];
    quantity--;
    const data = {
      item_id: itemId,
      quantity
    };
    editItemFromShoppingCart(cartId, data);
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
          handleClickRemoveItem={this.handleClickRemoveItem}
          handleClickIncreaseItemQuantity={this.handleClickIncreaseItemQuantity}
          handleClickDecreaseItemQuantity={this.handleClickDecreaseItemQuantity}
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
    createChargeOnCard,
    editItemFromShoppingCart
  }
)(OrderPage);
