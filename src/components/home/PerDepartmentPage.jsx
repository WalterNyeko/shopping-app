import React, { Fragment } from "react";
import HomePage from "../../containers/home/HomePage";
import ProductsPerDepartment from "../../containers/products/DepartmentProducts";

const PerDepartmentPage = props => {
  const { departmentId, handleSearch, handleInputChange, afterSearch } = props;
  return (
    <Fragment>
      <HomePage
        content={
          <ProductsPerDepartment
            departmentId={departmentId}
            afterSearch={afterSearch}
            showSearchedDepartmentItems
          />
        }
        departmentId={departmentId}
        handleSearch={handleSearch}
        handleInputChange={handleInputChange}
      />
    </Fragment>
  );
};
export default PerDepartmentPage;
