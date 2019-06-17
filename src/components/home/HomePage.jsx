import React, { Fragment } from "react";
import UpperNav from "../../containers/commons/UpperNav";
import SideNav from "../../containers/commons/SideNav";
import Footer from "../../containers/commons/Footer";

const HomePage = props => {
  const {
    content,
    departmentId,
    departments,
    handleInputChange,
    handleSearch,
    dontRender,
    categoryId,
    showSearchField
  } = props;
  return (
    <Fragment>
      <UpperNav
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
        showSearchField={showSearchField}
      />
      <div className="mycontent">
        <SideNav
          content={content}
          departmentId={departmentId}
          dontRender={dontRender}
          categoryId={categoryId}
        />
      </div>
      <Footer departments={departments} />
    </Fragment>
  );
};
export default HomePage;
