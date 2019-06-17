import React from "react";
import { shallow, mount } from "enzyme";
import { Router } from "react-router";
import { ProductDeatilsPage } from "../../../containers/products/ProductDeatilsPage";
import history from "../../../helpers/history";

describe("Each Product", () => {
  const props = {
    getDepartments: jest.fn(),
    getProduct: jest.fn(),
    getProductReviews: jest.fn(),
    allDepartments: { departments: [{}] },
    theProduct: {
      product: { product_id: 1, thumbnail: "altar-piece.gif" },
      productReviews: [{}]
    },
    match: {
      params: { productId: 1 }
    }
  };
  const wrapper = shallow(<ProductDeatilsPage {...props} />);
  it("should render component without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
