import React from "react";
import { shallow } from "enzyme";
import { CategoryProducts } from "../../../containers/products/CategoryProducts";

describe("Each Product", () => {
  const props = {
    getProductsPerCategory: jest.fn(),
    getProduct: jest.fn(),
    allProducts: {
      productsPerCategory: [{}]
    },
    categoryId: 1
  };
  const wrapper = shallow(<CategoryProducts {...props} />);
  it("should render component without crashing", () => {
    wrapper.setProps({ categoryId: 2 });
    expect(wrapper).toMatchSnapshot();
  });
});
