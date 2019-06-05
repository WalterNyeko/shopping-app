import React from "react";
import Footer from "../../../containers/commons/Footer";
import { mount } from "enzyme";
import { Router } from "react-router";
import history from "../../../helpers/history";

describe("Footer", () => {
  const props = {
    departments: [{ department_id: 1, name: "test" }]
  };
  const wrapper = mount(
    <Router history={history}>
      <Footer {...props} />
    </Router>
  );
  it("should render footer without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
