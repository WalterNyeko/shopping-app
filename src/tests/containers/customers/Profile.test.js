import React from "react";
import { shallow } from "enzyme";
import { Profile as ProfileComponent } from "../../../components/customers/Profile";
import { Profile } from "../../../containers/customers/Profile";

describe("Profile", () => {
  const props = {
    getDepartments: jest.fn(),
    getShippingRegions: jest.fn(),
    getCustomersDetails: jest.fn(),
    updateCreditCard: jest.fn(),
    allDepartments: {
      departments: [{}]
    },
    theCustomer: {
      shippingRegions: [{ shipping_region_id: 1 }],
      customerDetails: { shipping_region_id: 1 }
    },
    state: {
      isLoggedIn: false,
      name: "",
      email: "",
      address_1: "",
      address_2: "",
      city: "",
      region: "",
      postal_code: "",
      country: "",
      shipping_region_id: "",
      credit_card: "",
      day_phone: "",
      eve_phone: "",
      mob_phone: "",
      password: "",
      errors: {}
    },
    updateProfile: jest.fn(),
    updateAddress: jest.fn()
  };
  const wrapper = shallow(<Profile {...props} />);
  it("should render profile correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call inputErrors() when validation for credit card does not pass", () => {
    const componentWrapper = wrapper.find(ProfileComponent).dive();
    const updateCardButton = componentWrapper.find(".update-card");
    const event = {
      preventDefault: jest.fn()
    };
    const spy = jest.spyOn(wrapper.instance(), "inputErrors");
    updateCardButton.simulate("click", event);
    expect(spy).toHaveBeenCalled();
  });

  it("should set state value correctly when inputErrors() is called", () => {
    const componentWrapper = wrapper.find(ProfileComponent).dive();
    const updateCardButton = componentWrapper.find(".update-card");
    const event = {
      preventDefault: jest.fn()
    };
    wrapper.setState({ credit_card: "" });
    const spy = jest.spyOn(wrapper.instance(), "inputErrors");
    updateCardButton.simulate("click", event);
    expect(spy).toHaveBeenCalled();
    expect(wrapper.instance().state.errors.credit_card).toEqual(
      "Please provide your credit card number"
    );
  });

  it("should call updateCreditCard() when validations pass while editing Card", () => {
    const componentWrapper = wrapper.find(ProfileComponent).dive();
    const updateCardButton = componentWrapper.find(".update-card");
    const event = {
      preventDefault: jest.fn()
    };
    wrapper.instance().handleClickNav(1);
    wrapper.instance().handleLogout();
    wrapper.setState({ credit_card: "42424242424242" });
    const spy = jest.spyOn(wrapper.instance().props, "updateCreditCard");
    updateCardButton.simulate("click", event);
    expect(spy).toHaveBeenCalled();
  });

  it("should call updateProfile() when validations pass while editing Profile", () => {
    const componentWrapper = wrapper.find(ProfileComponent).dive();
    const updateProfileButton = componentWrapper.find(".update-profile");
    const event = {
      preventDefault: jest.fn()
    };
    wrapper.setState({ name: "nyeko", email: "nyeko@gmail.com" });
    const spy = jest.spyOn(wrapper.instance().props, "updateProfile");
    updateProfileButton.simulate("click", event);
    expect(spy).toHaveBeenCalled();
  });

  it("should call updateAddress() when validations pass while editing Address", () => {
    const componentWrapper = wrapper.find(ProfileComponent).dive();
    const updateAddressButton = componentWrapper.find(".update-address");
    const event = {
      preventDefault: jest.fn()
    };
    wrapper.setState({
      address_1: "nyeko",
      city: "nyeko@gmail.com",
      region: "West Coast",
      postal_code: "256",
      country: "uganda",
      shipping_region_id: 1
    });
    const spy = jest.spyOn(wrapper.instance().props, "updateAddress");
    updateAddressButton.simulate("click", event);
    expect(spy).toHaveBeenCalled();
  });

  it("should call handleInputChange() and update state when input values change", () => {
    const componentWrapper = wrapper.find(ProfileComponent).dive();
    const creditCardField = componentWrapper.find(".credit_card");
    const event = {
      preventDefault: jest.fn(),
      target: { name: "credit_card", value: "4242424242424" }
    };
    creditCardField.simulate("change", event);
    expect(wrapper.instance().state.credit_card).toEqual("4242424242424");
  });

  it("should call inputErrors() and update errors state when value for address_1 is missing", () => {
    const componentWrapper = wrapper.find(ProfileComponent).dive();
    const updateAddressButton = componentWrapper.find(".update-address");
    const event = {
      preventDefault: jest.fn()
    };
    wrapper.setState({
      address_1: ""
    });
    updateAddressButton.simulate("click", event);
    expect(wrapper.instance().state.errors.address_1).toEqual(
      "Field address 1 is mandatory"
    );
  });

  it("should call inputErrors() and update errors state when value for city is missing", () => {
    const componentWrapper = wrapper.find(ProfileComponent).dive();
    const updateAddressButton = componentWrapper.find(".update-address");
    const event = {
      preventDefault: jest.fn()
    };
    wrapper.setState({
      address_1: "test",
      city: ""
    });
    updateAddressButton.simulate("click", event);
    expect(wrapper.instance().state.errors.city).toEqual(
      "Please provide your city"
    );
  });

  it("should call inputErrors() and update errors state when value for region is missing", () => {
    const componentWrapper = wrapper.find(ProfileComponent).dive();
    const updateAddressButton = componentWrapper.find(".update-address");
    const event = {
      preventDefault: jest.fn()
    };
    wrapper.setState({
      address_1: "test",
      city: "test",
      region: ""
    });
    updateAddressButton.simulate("click", event);
    expect(wrapper.instance().state.errors.region).toEqual(
      "Please provide your region"
    );
  });

  it("should call inputErrors() and update errors state when value for postal_code is missing", () => {
    const componentWrapper = wrapper.find(ProfileComponent).dive();
    const updateAddressButton = componentWrapper.find(".update-address");
    const event = {
      preventDefault: jest.fn()
    };
    wrapper.setState({
      address_1: "test",
      city: "test",
      region: "test",
      postal_code: ""
    });
    updateAddressButton.simulate("click", event);
    expect(wrapper.instance().state.errors.postal_code).toEqual(
      "Please provide your postal code"
    );
  });

  it("should call inputErrors() and update errors state when value for country is missing", () => {
    const componentWrapper = wrapper.find(ProfileComponent).dive();
    const updateAddressButton = componentWrapper.find(".update-address");
    const event = {
      preventDefault: jest.fn()
    };
    wrapper.setState({
      address_1: "test",
      city: "test",
      region: "test",
      postal_code: "256",
      country: ""
    });
    updateAddressButton.simulate("click", event);
    expect(wrapper.instance().state.errors.country).toEqual(
      "Please provide your country"
    );
  });

  it("should call inputErrors() and update errors state when value for shipping_region_id is missing", () => {
    const componentWrapper = wrapper.find(ProfileComponent).dive();
    const updateAddressButton = componentWrapper.find(".update-address");
    const event = {
      preventDefault: jest.fn()
    };
    wrapper.setState({
      address_1: "test",
      city: "test",
      region: "test",
      postal_code: "256",
      country: "test",
      shipping_region_id: ""
    });
    updateAddressButton.simulate("click", event);
    expect(wrapper.instance().state.errors.shipping_region_id).toEqual(
      "Please select your shipping region"
    );
  });

  it("should call inputErrors() and update errors state when value for name is missing", () => {
    const componentWrapper = wrapper.find(ProfileComponent).dive();
    const updateProfileButton = componentWrapper.find(".update-profile");
    const event = {
      preventDefault: jest.fn()
    };
    wrapper.setState({
      name: ""
    });
    updateProfileButton.simulate("click", event);
    expect(wrapper.instance().state.errors.name).toEqual(
      "Please provide your name"
    );
  });

  it("should call inputErrors() and update errors state when value for email is missing", () => {
    const componentWrapper = wrapper.find(ProfileComponent).dive();
    const updateProfileButton = componentWrapper.find(".update-profile");
    const event = {
      preventDefault: jest.fn()
    };
    wrapper.setState({
      name: "test",
      email: ""
    });
    updateProfileButton.simulate("click", event);
    expect(wrapper.instance().state.errors.email).toEqual(
      "Please provide your email address"
    );
  });
});
// wrapper.setState({
//     address_1: "",
//     city: "",
//     region: "",
//     postal_code: "",
//     country: "",
//     shipping_region_id: ""
//   });
