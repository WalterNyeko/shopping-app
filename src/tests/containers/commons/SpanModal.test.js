import React from "react";
import { SpanModal } from "../../../containers/commons/SpanModal";
import { mount } from "enzyme";

describe("SpanModal", () => {
  const wrapper = mount(<SpanModal />);
  it("should render modal without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should show modal when its span is clicked", () => {
    expect(wrapper.instance().state.visible).toEqual(false);
    const theSpan = wrapper.find("span").at(0);
    theSpan.simulate("click");
    expect(wrapper.instance().state.visible).toEqual(true);
  });

  it("should close the modal when handleCancel() is called", () => {
    expect(wrapper.instance().state.visible).toEqual(true);
    const spy = jest.spyOn(wrapper.instance(), "handleCancel");
    wrapper.instance().handleCancel();
    expect(spy).toHaveBeenCalled();
    expect(wrapper.instance().state.visible).toEqual(false);
  });

  it("should close the modal when handleOk() is called", () => {
    expect(wrapper.instance().state.visible).toEqual(false);
    const theSpan = wrapper.find("span").at(0);
    theSpan.simulate("click"); //re-open the modal
    expect(wrapper.instance().state.visible).toEqual(true);
    const spy = jest.spyOn(wrapper.instance(), "handleOk");
    wrapper.instance().handleOk(); //should close the modal
    expect(spy).toHaveBeenCalled();
    expect(wrapper.instance().state.visible).toEqual(false);
  });
});
