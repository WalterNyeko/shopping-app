import React from "react";
import { UpperNav } from "../../../containers/commons/UpperNav";
import { mount, shallow } from "enzyme";
import { Router } from "react-router";
import history from "../../../helpers/history";

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
describe("UpperNav", () => {
  const wrapper = mount(
    <Router history={history}>
      <UpperNav {...props} />
    </Router>
  );
  it("should render side navigation without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should logout user when handleLogout() is called", () => {
    const props = {
      getDepartments: jest.fn(),
      getItemsInCart: jest.fn(),
      allDepartments: [],
      myCart: {
        totalAmountOfItemsInCart: { total_amount: 10 },
        cartItems: []
      },
      handleInputChange: jest.fn(),
      handleSearch: jest.fn(),
      history
    }
    const nextProps = {
      getDepartments: jest.fn(),
      getItemsInCart: jest.fn(),
      allDepartments: [],
      myCart: {
        totalAmountOfItemsInCart: { total_amount: 1 },
        cartItems: []
      },
      handleInputChange: jest.fn(),
      handleSearch: jest.fn(),
      history
    }
    const shallowWrapper = shallow(<UpperNav {...props}/>);
    const spy = jest.spyOn(shallowWrapper.instance(), 'handleLogout');
    shallowWrapper.instance().handleLogout();
    shallowWrapper.instance().handleClickNav();
    shallowWrapper.instance().componentWillReceiveProps(nextProps);
    expect(spy).toHaveBeenCalled();
  });
});
