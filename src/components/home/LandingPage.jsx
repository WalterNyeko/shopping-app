import React, { Fragment } from "react";
import HomePage from "../../containers/home/HomePage";
import AllProducts from "../../containers/products/AllProducts";

const LandingPage = props => {
  const { products, handleInputChange, handleSearch, afterSearch } = props;
  return (
    <Fragment>
      <HomePage
        content={<AllProducts products={products} afterSearch={afterSearch} />}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
      />
    </Fragment>
  );
};
export default LandingPage;
