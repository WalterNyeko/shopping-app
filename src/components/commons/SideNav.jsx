import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/commons/Footer";
import "../../styles/SideNav.css";

const SideNav = props => {
  const { content, allCategories } = props;
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-2">
          <div className="sidenav">
            <h6>Categories</h6>
            <hr />
            {allCategories &&
              allCategories.map(({ name, category_id }) => (
                <Fragment key={category_id}>
                  <NavLink to={`/category/${category_id}`}>{name}</NavLink>
                </Fragment>
              ))}
          </div>
        </div>
        <div className="col-md-10">{content}</div>
      </div>
    </Fragment>
  );
};
export default SideNav;
