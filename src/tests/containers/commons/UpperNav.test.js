import React from "react";
import { UpperNav } from "../../../containers/commons/UpperNav";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { Router } from "react-router";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import history from "../../../helpers/history";

const initialState = {
  allDepartments: { departments: [{ department_id: 1, name: "Test" }] },
  myCart: {
    totalAmountOfItemsInCart: { total_amount: 10.0 },
    cartItems: [{}]
  }
};
const props = {
  getDepartments: jest.fn(),
  getItemsInCart: jest.fn(),
  myCart: {
    totalAmountOfItemsInCart: {
      total_amount: 10
    }
  },
  allDepartments: {
    departments: [
      {
        department_id: 1,
        name: "Test"
      }
    ]
  }
};
const mockStore = configureStore([thunk]);
const store = mockStore(initialState);
describe("UpperNav", () => {
  const wrapper = mount(
    <Router history={history}>
      <UpperNav {...props} />
    </Router>
  );
  it("should render side navigation without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
