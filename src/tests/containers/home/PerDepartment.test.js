import React from "react";
import { shallow, mount } from "enzyme";
import PerDepartment from "../../../components/home/PerDepartmentPage";

describe("PerDepartment", () => {
  const props = {
    match: {
      params: {
        departmentId: 1
      }
    }
  };
  const wrapper = shallow(<PerDepartment {...props} />);
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
