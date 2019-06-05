import React from "react";
import { SideNav } from "../../../containers/commons/SideNav";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Router } from "react-router";
import history from "../../../helpers/history";
import { NavLink } from "react-router";

const initialState = {
  categories: []
};
const mockStore = configureStore([thunk]);
const store = mockStore(initialState);
describe("SideNav", () => {
  const props = {
    getCategories: jest.fn(),
    allCategories: {
      categories: {
        rows: [
          {
            category_id: 1,
            name: "French",
            description: "The French have always had an eye for beauty.",
            department_id: 1
          },
          {
            category_id: 2,
            name: "Italian",
            description: "The full and resplendent treasure chest of art",
            department_id: 1
          }
        ]
      }
    }
  };
  const wrapper = mount(
    <Provider store={store}>
      <Router history={history}>
        <SideNav {...props} />
      </Router>
    </Provider>
  );
  it("should render side navigation without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the right data when the side nav renders", () => {
    expect(wrapper.find("h6").text()).toContain("Categories");
    expect(wrapper.find("NavLink")).toHaveLength(2); // 2 categories
    expect(wrapper.find("NavLink").at(0).text()).toContain("French");
    expect(wrapper.find("NavLink").at(1).text()).toContain("Italian");
  });
});
