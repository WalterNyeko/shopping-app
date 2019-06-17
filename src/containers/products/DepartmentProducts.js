import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ProductsComponent from "../../components/products/Products";
import { getProductsPerDepartment } from "../../store/actions/Products";

export class DepartmentProducts extends Component {
  componentWillMount = () => {
    const { getProductsPerDepartment, departmentId } = this.props;
    const requestData = {
      page: 1,
      limit: 8,
      description_length: 100,
      departmentId
    };
    getProductsPerDepartment(requestData);
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.departmentId !== this.props.departmentId) {
      const { getProductsPerDepartment, departmentId } = nextProps;
      const requestData = {
        page: 1,
        limit: 8,
        description_length: 100,
        departmentId
      };
      getProductsPerDepartment(requestData);
    }
  };

  render() {
    const { productsPerDepartment } = this.props.allProducts;
    return (
      <Fragment>
        <ProductsComponent
          products={productsPerDepartment}
          departmentId={this.props.departmentId}
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
  { getProductsPerDepartment }
)(DepartmentProducts);
