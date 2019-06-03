import React, { Component, Fragment } from "react";
import OrderPageComponent from "../../components/orders/OrderPage";
import UpperNav from "../commons/UpperNav";
import Footer from "../commons/Footer";
import { connect } from "react-redux";
import { getDepartments } from "../../store/actions/Departments";
import { getItemsInCart, getTotalAmount } from "../../store/actions/Orders";

class OrderPage extends Component {
  componentWillMount = () => {
    const { getItemsInCart, getDepartments, getTotalAmount } = this.props;
    getDepartments();
    const cartId = localStorage.getItem("cartId");
    getItemsInCart(cartId);
    getTotalAmount(cartId);
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
        <OrderPageComponent cartItems={cartItems} totalAmount={total_amount} />
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
  { getDepartments, getItemsInCart, getTotalAmount }
)(OrderPage);
