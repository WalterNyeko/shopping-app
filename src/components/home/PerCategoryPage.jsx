import React, { Fragment } from "react";
import HomePage from "../../containers/home/HomePage";
import CategoryProducts from "../../containers/products/CategoryProducts";

const PerCategoryPage = props => {
  const { categoryId, dontRender } = props;
  return (
    <Fragment>
      <HomePage
        content={<CategoryProducts categoryId={categoryId} />}
        dontRender={dontRender}
        categoryId={categoryId}
      />
    </Fragment>
  );
};
export default PerCategoryPage;
