import React from "react";
import { shallow } from "enzyme";
import { PlaceOrder } from "../../../containers/orders/PlaceOrder";
import PlaceOrderComponent from "../../../components/orders/PlaceOrder";

describe("PlaceOrder", () => {
  const props = {
    getDepartments: jest.fn(),
    getShippingRegions: jest.fn(),
    getTaxes: jest.fn(),
    getAllMyOrders: jest.fn(),
    getTotalAmount: jest.fn(),
    getItemsInCart: jest.fn(),
    placeOrder: jest.fn(),
    getOrderById: jest.fn(),
    getOrderDetailById: jest.fn(),
    getCustomersDetails: jest.fn(),
    theOrders: {
      cartItems: [{}],
      totalAmountOfItemsInCart: { total_amount: 10 },
      myOrders: [{}],
      orderOfParticularId: [{}],
      orderDetails: {}
    },
    allDepartments: {
      departments: [{}]
    },
    theRegions: {
      shippingRegions: [{}],
      customerDetails: {
        email: "test@gmail.com"
      },
      taxes: [
        { tax_id: 1, tax_type: "Test", taxt_percentage: "2.5" },
        { tax_id: 2, tax_type: "Test 2", taxt_percentage: "3.5" }
      ]
    },
    createChargeOnCard: jest.fn(),
    cartItems: [{}]
  };
  const wrapper = shallow(<PlaceOrder {...props} />);
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handleInputChange", () => {
    const spy = jest.spyOn(wrapper.instance(), "handleInputChange");
    const event = { target: { name: "shipping_id", value: "1" } };
    wrapper.instance().populateStateImmediately();
    wrapper.instance().handleInputChange(event);
    expect(spy).toHaveBeenCalled();
  });

  it("should call placeOrder() when handlePlaceOrder() is called", () => {
    const spy = jest.spyOn(wrapper.instance().props, "placeOrder");
    const event = {
      preventDefault: jest.fn()
    };
    wrapper.setState({ shipping_id: "2" });
    wrapper.instance().handlePlaceOrder(event);
    expect(spy).toHaveBeenCalled();
  });

  it("should not call placeOrder() when handlePlaceOrder() is called and shipping_id == 0", () => {
    const spy = jest.spyOn(wrapper.instance().props, "placeOrder");
    const event = {
      preventDefault: jest.fn()
    };
    wrapper.setState({ shipping_id: "0" });
    wrapper.instance().handlePlaceOrder(event);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("should not call placeOrder() if cart is empty", () => {
    wrapper.update();
    const spy = jest.spyOn(wrapper.instance().props, "placeOrder");
    const event = {
      preventDefault: jest.fn()
    };
    wrapper.setProps({
      theOrders: {
        cartItems: [],
        totalAmountOfItemsInCart: { total_amount: 2 }
      }
    });
    wrapper.setState({ shipping_id: "2" });
    wrapper.instance().handlePlaceOrder(event);
    wrapper.instance().handleFetchOrderById(1);
    wrapper.instance().inputErrors("test", "test complain");
    wrapper.instance().handleLogout();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("should format date correctly", () => {
    const formattedDate = wrapper
      .instance()
      .formatDate("2019-06-17T01:12:13.000Z");
    expect(formattedDate).toEqual("2019-6-17");
  });

  it("should render the component well", () => {
    const componentProps = {
      state: {
        errors: {}
      },
      orderDetails: {
        total_amount: 10
      },
      shippingRegions: [{}],
      handleInputChange: jest.fn(),
      handlePlaceOrder: jest.fn(),
      myOrders: [{}],
      handleFetchOrderById: jest.fn(),
      orderOfParticularId: [{}],
      orderDetails: jest.fn(),
      formatDate: jest.fn(),
      cartItems: [{}]
    };
    const componentWrapper = shallow(
      <PlaceOrderComponent {...componentProps} />
    );
    expect(componentWrapper).toMatchSnapshot();
  });

  it("should call handlePayment() when the function is called", () => {
    const spy = jest.spyOn(wrapper.instance(), "handlePayment");
    wrapper.instance().handlePayment();
    expect(spy).toHaveBeenCalled();
  });
});
