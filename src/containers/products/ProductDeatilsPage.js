import React, { Component, Fragment } from "react";
import UpperNav from "../commons/UpperNav";
import SideNav from "../commons/SideNav";
import Footer from "../commons/Footer";
import { connect } from "react-redux";
import { getDepartments } from "../../store/actions/Departments";
import { getProduct, getProductReviews } from "../../store/actions/Products";
import ProductDeatilsContent from "../products/ProductDetailsContent";

export class ProductDeatilsPage extends Component {
  state = {
    loading: true
  };
  componentWillMount = () => {
    const {
      getDepartments,
      getProduct,
      getProductReviews,
      match: {
        params: { productId }
      }
    } = this.props;
    getDepartments();
    getProduct(productId);
    getProductReviews(productId);
  };
  render() {
    const {
      allDepartments: { departments },
      theProduct: { product, productReviews },
      match: {
        params: { productId }
      }
    } = this.props;
    return (
      <Fragment>
        <UpperNav />
        <div className="mycontent">
          <SideNav
            content={
              <ProductDeatilsContent
                product={product}
                productReviews={productReviews}
                productId={productId}
                loading={this.state.loading}
              />
            }
          />
        </div>
        <Footer departments={departments} />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  allDepartments: state.departments,
  theProduct: state.products
});
export default connect(
  mapStateToProps,
  { getDepartments, getProduct, getProductReviews }
)(ProductDeatilsPage);
