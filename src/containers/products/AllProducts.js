import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ProductsComponent from "../../components/products/Products";
import { getProducts } from "../../store/actions/Products";

export class AllProducts extends Component {
  componentWillMount = () => {
    const { getProducts } = this.props;
    const requestData = {
      page: 1,
      limit: 8,
      description_length: 100
    };
    getProducts(requestData);
  };

  render() {
    let theProducts;
    const { products, productsAfterSearch } = this.props.allProducts;
    if (productsAfterSearch && productsAfterSearch.rows) {
      theProducts = productsAfterSearch;
    } else {
      theProducts = products;
    }
    return (
      <Fragment>
        <ProductsComponent
          products={theProducts}
          afterSearch={this.props.afterSearch}
        />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  allProducts: state.products
});
export default connect(
  mapStateToProps,
  { getProducts }
)(AllProducts);
