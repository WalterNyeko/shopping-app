import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import UpperNavComponent from "../../components/commons/UpperNav";
import { getDepartments } from "../../store/actions/Departments";
import { getTotalAmount } from "../../store/actions/Orders";

class UpperNav extends Component {
  state = {
    isLoggedIn: false
  };

  componentWillMount() {
    const jwtToken = localStorage.getItem("jwt-token");
    const { getDepartments, getTotalAmount, getCartUniqueId } = this.props;
    jwtToken && this.setState({ isLoggedIn: true });
    getDepartments();
    const cartId = localStorage.getItem("cartId");
    getTotalAmount(cartId);
  }
  render() {
    const { isLoggedIn } = this.state;
    const {
      allDepartments,
      myCart: {
        totalAmountOfItemsInCart: { total_amount }
      }
    } = this.props;
    return (
      <Fragment>
        <UpperNavComponent
          isLoggedIn={isLoggedIn}
          allDepartments={allDepartments}
          totalAmount={total_amount}
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
  { getDepartments, getTotalAmount }
)(UpperNav);
