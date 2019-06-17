import React from "react";
import { shallow, mount } from "enzyme";
import { Router } from "react-router";
import { EachProduct } from "../../../containers/products/EachProduct";
import EachProductComponent from "../../../components/products/EachProduct";
import history from "../../../helpers/history";

describe("Each Product", () => {
  const props = {
    products: {
      count: 10,
      rows: [{ product_id: 1, thumbnail: "altar-piece.gif" }]
    }
  };
  const wrapper = shallow(<EachProduct {...props} />);
  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  const componentProps = {
    products: {
      count: 11,
      rows: [
        {
          product_id: 1,
          thumbnail: "altar-piece.gif",
          description: "Test one two"
        }
      ]
    },
    getProducts: jest.fn(),
    getProductsPerDepartment: jest.fn(),
    departmentId: 1,
    getProductsPerCategory: jest.fn(),
    categoryId: 1,
    getProductsAfterSearch: jest.fn(),
    afterSearch: true
  };
  const componentWrapper = mount(
    <Router history={history}>
      <EachProductComponent {...componentProps} />
    </Router>
  );
  it("should render component without crashing", () => {
    const wrapper = shallow(<EachProduct {...componentProps} />);
    const spy = jest.spyOn(wrapper.instance(), "handleClick");
    wrapper.instance().handleClick(10);
    expect(spy).toHaveBeenCalled();
  });
});
