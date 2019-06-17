import React from "react";
import { SideNav } from "../../../containers/commons/SideNav";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Router } from "react-router";
import history from "../../../helpers/history";
import { NavLink } from "react-router";
import SideNavComponent from '../../../components/commons/SideNav';

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
  });

  it("should call handleClickSideNav() when a department is clicked", () => {
    const myprops = {
      allCategories: {
        categories: { 
        rows: [] }},
      getCategories: jest.fn(),
      departmentId: 1,
      allCategories: { categoriesPerDepartment: [] },
      getDepartmentCategories: jest.fn(),
    }

    const nextProps = {
      allCategories: {
        categories: { 
        rows: [] }},
      getCategories: jest.fn(),
      departmentId: 2,
      allCategories: { categoriesPerDepartment: [] },
      getDepartmentCategories: jest.fn(),
    }
    const nextPropsWithoutDepartmentId = {
      allCategories: {
        categories: { 
        rows: [] }},
      getCategories: jest.fn(),
      allCategories: { categoriesPerDepartment: [] },
      getDepartmentCategories: jest.fn(),
    }
    const shallowWrapper = shallow(<SideNav {...myprops} />);
    const spy = jest.spyOn(shallowWrapper.instance(), 'handleClickSideNav');
    shallowWrapper.instance().handleClickSideNav();
    shallowWrapper.instance().componentWillReceiveProps(myprops);
    shallowWrapper.instance().componentWillReceiveProps(nextProps);
    shallowWrapper.instance().componentWillReceiveProps(nextPropsWithoutDepartmentId);
    expect(spy).toHaveBeenCalled();
  });
});
