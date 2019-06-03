import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ProductsComponent from "../../components/products/Products";
import { getProducts } from "../../store/actions/Products";

class Products extends Component {
  componentWillMount = () => {
    const { getProducts } = this.props;
    getProducts();
  };

  render() {
    const { products } = this.props.allProducts;
    return (
      <Fragment>
        <ProductsComponent products={products} />
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
)(Products);
