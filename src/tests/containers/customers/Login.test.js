import React from "react";
import { LoginPage } from "../../../containers/customers/LoginPage";
import { mount } from "enzyme";
import { SpanModal } from "../../../containers/commons/SpanModal";

const props = {
  signIn: jest.fn()
};

describe("Login Page", () => {
  const wrapper = mount(<LoginPage {...props} />);
  const spanModalWrapper = mount(
    <SpanModal
      spanText="Sign In"
      modalTitle="Login To Your ShopMate Account"
      modalWidth="450px"
      modalContent={<LoginPage signIn={jest.fn()} />}
    />
  );
  it("should render login page without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should show login modal when user clicks Sign In", () => {
    expect(spanModalWrapper.instance().state.visible).toBe(false);
    const signIn = spanModalWrapper.find("span");
    signIn.simulate("click"); //when user clicks the Sign In text on nav bar (modal trigger)
    expect(spanModalWrapper.instance().state.visible).toBe(true);
  });

  it("should call signIn() action method when user clicks Sign In Button on the modal", () => {
    expect(spanModalWrapper.instance().state.visible).toBe(true); //modal is still open from previous click
    const spy = jest.spyOn(
      spanModalWrapper.instance().props.modalContent.props,
      "signIn"
    );
    const signInButton = spanModalWrapper.find("span").at(6);
    signInButton.simulate("click"); //when user clicks the Sign In Button on the modal
    expect(spy).toHaveBeenCalled();
  });
});
