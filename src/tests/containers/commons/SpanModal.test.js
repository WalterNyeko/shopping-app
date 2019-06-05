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
});
