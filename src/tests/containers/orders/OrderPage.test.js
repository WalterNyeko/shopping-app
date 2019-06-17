import React from "react";
import { shallow } from "enzyme";
import { OrderPage } from "../../../containers/orders/OrderPage";
import OrderPageComponent from "../../../components/orders/OrderPage";
import StripeCheckout from "react-stripe-checkout";

describe("Order Page", () => {
  const props = {
    getDepartments: jest.fn(),
    getTotalAmount: jest.fn(),
    getItemsInCart: jest.fn(),
    deleteItemFromShoppingCart: jest.fn(),
    createChargeOnCard: jest.fn(),
    emptyShoppingCart: jest.fn(),
    editItemFromShoppingCart: jest.fn(),
    allDepartments: {
      departments: []
    },
    myCart: {
      cartItems: [{ quantity: 1 }],
      totalAmountOfItemsInCart: {
        total_amount: 10
      }
    }
  };

  const componentProps = {
    cartItems: [{}, {}],
    totalAmount: 10,
    handleClick: jest.fn(),
    handleClickRemoveItem: jest.fn(),
    handleClickIncreaseItemQuantity: jest.fn(),
    handleClickDecreaseItemQuantity: jest.fn()
  };
  const wrapper = shallow(<OrderPage {...props} />);
  const componenWrapper = shallow(<OrderPageComponent {...componentProps} />);
  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handleClickRemoveItem() when the function is called", () => {
    const spy = jest.spyOn(wrapper.instance(), "handleClickRemoveItem");
    wrapper.instance().handleClickRemoveItem();
    expect(spy).toHaveBeenCalled();
  });

  it("should call handleClickIncreaseItemQuantity() when the function is called", () => {
    const spy = jest.spyOn(
      wrapper.instance(),
      "handleClickIncreaseItemQuantity"
    );
    wrapper.instance().handleClickIncreaseItemQuantity();
    expect(spy).toHaveBeenCalled();
  });

  it("should call handleClickDecreaseItemQuantity() when the function is called", () => {
    const spy = jest.spyOn(
      wrapper.instance(),
      "handleClickDecreaseItemQuantity"
    );
    wrapper.instance().handleClickDecreaseItemQuantity();
    expect(spy).toHaveBeenCalled();
  });

  it("should call handleEmptyShoppingCart() when the function is called", () => {
    const spy = jest.spyOn(wrapper.instance(), "handleEmptyShoppingCart");
    wrapper.instance().handleEmptyShoppingCart();
    expect(spy).toHaveBeenCalled();
  });
});
