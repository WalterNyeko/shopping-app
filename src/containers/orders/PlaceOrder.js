import React, { Fragment } from "react";
import { connect } from "react-redux";
import PlaceOrderComponent from "../../components/orders/PlaceOrder";
import UpperNav from "../../components/commons/UpperNav";
import Footer from "../../components/commons/Footer";
import { getDepartments } from "../../store/actions/Departments";
import {
  getShippingRegions,
  getTaxes,
  getCustomersDetails
} from "../../store/actions/Customers";
import {
  placeOrder,
  getAllMyOrders,
  getOrderById,
  getOrderDetailById,
  getTotalAmount,
  getItemsInCart,
  createChargeOnCard
} from "../../store/actions/Orders";
import history from "../../helpers/history";
import { showErrorNotification } from "../../helpers/index";

export class PlaceOrder extends React.Component {
  state = {
    isLoggedIn: false,
    shipping_id: 0,
    errors: {},
    tax_id: 0,
    tax_type: "",
    tax_percentage: 0,
    orderId: 0
  };
  componentWillMount() {
    const {
      getDepartments,
      getShippingRegions,
      getTaxes,
      getAllMyOrders,
      getTotalAmount,
      getCustomersDetails
    } = this.props;
    const cartId = localStorage.getItem("cartId");
    getDepartments();
    const jwtToken = localStorage.getItem("jwt-token");
    jwtToken && this.setState({ isLoggedIn: true });
    getShippingRegions();
    getTaxes();
    getAllMyOrders();
    cartId && getTotalAmount(cartId);
    cartId && getItemsInCart(cartId);
    getCustomersDetails();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => this.populateStateImmediately());
  };

  populateStateImmediately = () => {
    const { shipping_id } = this.state;
    if (shipping_id === "1" || shipping_id === "2") {
      const {
        tax_id,
        tax_type,
        tax_percentage
      } = this.props.theRegions.taxes[1];
      this.setState({ tax_id, tax_type, tax_percentage });
    } else {
      const {
        tax_id,
        tax_type,
        tax_percentage
      } = this.props.theRegions.taxes[0];
      this.setState({ tax_id, tax_type, tax_percentage });
    }
  };

  /**
   * ensures the user's card is charged whenever they place an order
   *
   * @param {Object} token
   *
   * @returns {void}
   */
  handlePayment = token => {
    const cartId = localStorage.getItem("cartId");
    const {
      theOrders: {
        totalAmountOfItemsInCart: { total_amount }
      }
    } = this.props;
    const { orderId } = this.state;
    const data = {
      stripeToken: token,
      oredr_id: orderId,
      description: "Some test description",
      amount: total_amount
    };
    const { createChargeOnCard } = this.props;
    createChargeOnCard(cartId, data);
  };

  handlePlaceOrder = event => {
    event.preventDefault();
    const cartId = localStorage.getItem("cartId");
    const { shipping_id, tax_id } = this.state;
    const { placeOrder } = this.props;
    const data = {
      cart_id: cartId,
      tax_id,
      shipping_id
    };
    if (this.props.theOrders.cartItems.length) {
      if (shipping_id === "1" || shipping_id === "0") {
        showErrorNotification("Please select a shipping region");
      } else {
        placeOrder(data);
      }
    } else {
      showErrorNotification("You don't have items in your cart");
    }
  };

  handleFetchOrderById = orderId => {
    const { getOrderById, getOrderDetailById } = this.props;
    getOrderById(orderId);
    getOrderDetailById(orderId);
    this.setState({ orderId });
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

  formatDate = date => {
    const firstFormat = new Date(date);
    const theDate = new Date(firstFormat);
    const year = theDate.getFullYear();
    const month = theDate.getMonth() + 1;
    const day = theDate.getDate();
    const formatted = year + "-" + month + "-" + day;
    return formatted;
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
    const { isLoggedIn } = this.state;
    const {
      allDepartments,
      allDepartments: { departments },
      theRegions: { shippingRegions },
      theOrders: { myOrders, orderOfParticularId, orderDetails }
    } = this.props;
    const {
      cartItems,
      totalAmountOfItemsInCart: { total_amount }
    } = this.props.theOrders;
    const { email } = this.props.theRegions.customerDetails;
    return (
      <Fragment>
        <UpperNav
          allDepartments={allDepartments}
          isLoggedIn={isLoggedIn}
          totalAmount={total_amount}
          handleLogout={this.handleLogout}
          cartItems={cartItems}
        />
        <PlaceOrderComponent
          handleInputChange={this.handleInputChange}
          shippingRegions={shippingRegions}
          state={this.state}
          handlePlaceOrder={this.handlePlaceOrder}
          myOrders={myOrders}
          handleFetchOrderById={this.handleFetchOrderById}
          orderOfParticularId={orderOfParticularId}
          orderDetails={orderDetails}
          formatDate={this.formatDate}
          handlePayment={this.handlePayment}
          email={email}
          cartItems={cartItems}
        />
        <Footer departments={departments} />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  allDepartments: state.departments,
  theRegions: state.customers,
  theOrders: state.itemsInCart
});
export default connect(
  mapStateToProps,
  {
    getDepartments,
    getShippingRegions,
    getTaxes,
    placeOrder,
    getAllMyOrders,
    getOrderById,
    getOrderDetailById,
    getTotalAmount,
    getItemsInCart,
    createChargeOnCard,
    getCustomersDetails
  }
)(PlaceOrder);
