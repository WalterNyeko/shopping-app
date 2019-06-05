import React from "react";
import SideNav from "../../../containers/commons/SideNav";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const initialState = {
  departments: []
};
const mockStore = configureStore([thunk]);
const store = mockStore(initialState);
describe("SideNav", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <SideNav />
    </Provider>
  );
  it("should render side navigation without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
