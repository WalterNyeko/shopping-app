import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/SideNav.css";

const SideNav = props => {
  const { content, allCategories, handleClickSideNav } = props;
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-2">
          <div className="sidenav">
            <h6>Categories</h6>
            <hr />

            <div className="row">
              <div className="col-12">
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  {allCategories &&
                    allCategories.map(({ name, category_id }) => (
                      <Fragment key={category_id}>
                        <a
                          className="nav-link nav-items-department"
                          onClick={() => handleClickSideNav(category_id)}
                          id={`pills-${name}-tab`}
                          data-toggle="pill"
                          href="/"
                          role="tab"
                          aria-controls={`pills-${name}`}
                          aria-selected="true"
                        >
                          {name}
                        </a>
                      </Fragment>
                    ))}
                </div>
              </div>
              <div className="col-9">
                <div className="tab-content" id="v-pills-tabContent" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-10">{content}</div>
      </div>
    </Fragment>
  );
};
export default SideNav;
