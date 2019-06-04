import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import bag from "../../images/shopping-bag.png";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { useStyles } from "../../styles/UpperNav";
import { SpanModal } from "../../../src/containers/commons/SpanModal";
import SignUpPage from "../../containers/customers/SignupPage";
import LoginPage from "../../containers/customers/LoginPage";

const UpperNav = ({
  isLoggedIn,
  allDepartments,
  totalAmount,
  handleLogout,
  cartItems
}) => {
  const classes = useStyles();
  const { departments } = allDepartments;
  return (
    <Fragment>
      <nav className="navbar navbar-expand-md sticky-top navbar-light bg-light pt-0 pb-0 fir">
        <div className="navbar-brand">
          {isLoggedIn ? (
            <Fragment>
              <ul class="navbar-nav m-auto">
                <li class="nav-item dropdown">
                  <li class="nav-item">
                    <a class="nav-link text-dark" href="#">
                      Hey!
                    </a>
                  </li>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle text-dark nav-dropdown"
                    href="#"
                    id="dropdown03"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {localStorage.getItem("user")}
                  </a>
                  <div class="dropdown-menu" aria-labelledby="dropdown03">
                    <NavLink to="/mycart">
                      <i className="fas fa-shopping-cart text-dark ml-4" />
                      <sup>
                        <span className="badge badge-danger">
                          {cartItems && cartItems.length
                            ? cartItems.length
                            : "0"}
                        </span>
                      </sup>{" "}
                      <a className="text-dark">My Bag</a>
                    </NavLink>
                    <a class="dropdown-item" href="#">
                      <i className="fas fa-user" />
                      <sup>
                        <span className="badge"> &nbsp; &nbsp; </span>
                      </sup>{" "}
                      My Profile
                    </a>
                    <a class="dropdown-item" href="#" onClick={handleLogout}>
                      <i className="fas fa-sign-out-alt" />
                      <sup>
                        <span className="badge"> &nbsp; &nbsp; </span>
                      </sup>{" "}
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </Fragment>
          ) : (
            <Fragment>
              Hey! &nbsp;
              <a className="text-danger" href="#">
                <SpanModal
                  spanText="Sign In"
                  modalTitle="Login To Your ShopMate Account"
                  modalWidth="450px"
                  modalContent={<LoginPage />}
                  className={classes.navItems}
                />
              </a>
              &nbsp;&nbsp;Or&nbsp;&nbsp;
              <a href="#" className="text-danger">
                <SpanModal
                  spanText="Register"
                  modalTitle="Register For A ShopMate"
                  modalWidth="450px"
                  modalContent={<SignUpPage />}
                  className={classes.navItems}
                />
              </a>
            </Fragment>
          )}
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
              <i className="fas fa-shopping-cart" />
              <sup>
                <span className="badge badge-danger">
                  {cartItems && cartItems.length ? cartItems.length : "0"}
                </span>
              </sup>{" "}
              Your Bag &nbsp;{" "}
              <span className="text-danger">
                {" "}
                $ {totalAmount ? totalAmount : "0.0"}
              </span>
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
