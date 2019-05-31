import { combineReducers } from "redux";
import customersReducer from "../reducers/Customers";
import productsReducer from "./Products";
import categoriesReducer from './Categories';
import departmentsReducer from './Departments';

export default combineReducers({
  customers: customersReducer,
  products: productsReducer,
  categories: categoriesReducer,
  departments: departmentsReducer,
});