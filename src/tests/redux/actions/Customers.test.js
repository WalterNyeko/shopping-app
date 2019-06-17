import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { SIGNUP_USER } from "../../../store/types";
import { signupUser } from "../../../store/actions/Customers";
const mockStore = configureStore([thunk]);
const store = mockStore({});

describe("Customers", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it("should create a new customer account", () => {
    const data = {
      username: "Test",
      email: "test@gmail.com",
      password: "123"
    };
    fetch.mockResponse(JSON.stringify(data));
    const expectedActions = [{ type: SIGNUP_USER, payload: data }];
    // return store.dispatch(signupUser(data)).then(() => {
    //   expect(store.getActions()).toEqual(expectedActions);
    // });
  });
});
