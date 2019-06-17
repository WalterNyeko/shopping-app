import React from "react";
import { shallow, mount } from "enzyme";
import { DepartmentProducts } from "../../../containers/products/DepartmentProducts";

describe("Each Product", () => {
  const props = {
    getProductsPerDepartment: jest.fn(),
    getProduct: jest.fn(),
    allProducts: {
      productsPerDepartment: [{}]
    },
    departmentId: 1
  };
  const wrapper = shallow(<DepartmentProducts {...props} />);
  it("should render component without crashing", () => {
    wrapper.setProps({ departmentId: 2 });
    expect(wrapper).toMatchSnapshot();
  });
});
