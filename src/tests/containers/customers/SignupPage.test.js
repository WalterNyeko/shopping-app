import React from "react";
import { SignupPage } from "../../../containers/customers/SignupPage";
import { mount } from "enzyme";
import { SpanModal } from "../../../containers/commons/SpanModal";

const props = {
  signupUser: jest.fn()
};

describe("SignUp Page", () => {
  const wrapper = mount(<SignupPage {...props} />);
  const spanModalWrapper = mount(
    <SpanModal
      spanText="Sign Up"
      modalTitle="Sign UP For A ShopMate Account"
      modalWidth="450px"
      modalContent={<SignupPage {...props} />}
    />
  );
  it("should render signup page without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should show signup modal when user clicks Sign Up", () => {
    expect(spanModalWrapper.instance().state.visible).toBe(false);
    const signIn = spanModalWrapper.find("span");
    signIn.simulate("click"); //when user clicks the Sign Up text on nav bar (modal trigger)
    expect(spanModalWrapper.instance().state.visible).toBe(true);
  });

  it("should call signupUser() action method when user clicks Sign Up Button on the modal", () => {
    expect(spanModalWrapper.instance().state.visible).toBe(true); //modal is still open from previous click
    const spy = jest.spyOn(
      spanModalWrapper.instance().props.modalContent.props,
      "signupUser"
    );
    const signInButton = spanModalWrapper.find("span").at(8);
    signInButton.simulate("click"); //when user clicks the Sign Up Button on the modal
    expect(spy).toHaveBeenCalled();
  });
});
