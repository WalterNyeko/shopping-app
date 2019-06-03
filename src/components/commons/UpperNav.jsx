import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import bag from "../../images/shopping-bag.png";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { useStyles } from "../../styles/UpperNav";
import { SpanModal } from "../../../src/containers/commons/SpanModal";
import SignUpPage from "../../containers/customers/SignupPage";
import LoginPage from "../../containers/customers/LoginPage";

const UpperNav = ({ isLoggedIn, allDepartments, totalAmount }) => {
  const classes = useStyles();
  const { departments } = allDepartments;
  return (
    <Fragment>
      <nav className="navbar navbar-expand-md sticky-top navbar-light bg-light pt-0 pb-0 fir">
        <div className="navbar-brand">
          Hey!{" "}
          <a className="text-danger" href="#">
            <SpanModal
              spanText="Sign In"
              modalTitle="Login To Your ShopMate Account"
              modalWidth="450px"
              modalContent={<LoginPage />}
              className={classes.navItems}
            />
          </a>{" "}
          or{" "}
          <a href="#" className="text-danger">
            <SpanModal
              spanText="Register"
              modalTitle="Register For A ShopMate"
              modalWidth="450px"
              modalContent={<SignUpPage />}
              className={classes.navItems}
            />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample04"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav m-auto nav-list">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Daily Deals <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Sell
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Help & Contact
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-md-0">
            <NavLink to="/mycart/" className="my-bag">
              <img src={bag} alt="bag" /> &nbsp; Your Bag &nbsp;{" "}
              <span className="text-danger"> $ {totalAmount}</span>
            </NavLink>
          </form>
        </div>
      </nav>
      <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark nav-margin">
        <a className="navbar-brand logo" href="#">
          <NavLink to="/" className={classes.shopmateLogo}>
            SHOPMATE
          </NavLink>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample05">
          <ul className="navbar-nav m-auto">
            {departments &&
              departments.map(({ department_id, name }) => (
                <Fragment key={department_id}>
                  <NavLink
                    to={`/department/${department_id}`}
                    className={classes.navItemsMainBar}
                  >
                    <li className="nav-item active">
                      <a className="nav-link nav-link-item" href="#">
                        {name}
                        <span className="sr-only">(current)</span>
                      </a>
                    </li>
                  </NavLink>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </Fragment>
              ))}
          </ul>
          <form className="form-inline my-2 my-md-0 text-white">
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </form>
        </div>
      </nav>
    </Fragment>
  );
};
export default UpperNav;
