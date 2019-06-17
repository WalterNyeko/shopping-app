import React, { Fragment } from "react";
import HomePage from "../../containers/home/HomePage";
import ProductsPerDepartment from "../../containers/products/DepartmentProducts";

const PerDepartmentPage = props => {
  const { departmentId } = props;
  return (
    <Fragment>
      <HomePage
        content={<ProductsPerDepartment departmentId={departmentId} />}
        departmentId={departmentId}
      />
    </Fragment>
  );
};
export default PerDepartmentPage;
